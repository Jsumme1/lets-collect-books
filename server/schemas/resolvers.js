const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
 },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };s
    },
    
    saveBook: async (parent, args, context ) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate (
            // finds the user 
            {_id: context.user._id},
            {$push: {savedBooks: args}},
            {new:true}

          );
          return updatedUser;
          }
          throw new AuthenticationError ("Not logged in!");
        },
    
    

    removeBook: async (parent, {bookId}, context ) => {
        if (!context.user) {
        throw new AuthenticationError ("Not logged in!");
        }
      else {
          const updatedUser = await User.findByIdAndUpdate(
            // finds the user 
            {_id: context.user._id},
            {$pull: {savedBooks: {bookId}}},
            {new: true}

          );
          return updatedUser;
      }}
    
    
    }


};

module.exports = resolvers;
