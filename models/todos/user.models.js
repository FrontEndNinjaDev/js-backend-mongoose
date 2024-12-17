import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // the first object
    // data fields
    username: {
      type: String, // types of object
      required: true, // required is required
      unique: true, // we have unique username in many social medias
      lowercase: true, // we can make usernames in lowecase
    }, // we can define a object
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'], // we can give a custom message here
    },
  },
  { timestamps: true }
);
// the second object we can give here time stamps
// thats the way to export the mongoose schemas

export const User = mongoose.model('User', userSchema);

// database saving name user == users
