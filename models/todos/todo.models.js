import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  // schema is a method who is receiving 2  objects
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // we a need a relation with user so we are passing the reference
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      // object inside an array
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

// mongoose asking 2 question what is the name , and what is the schemas
export const Todo = mongoose.model('Todo', todoSchema);
//then the data will be saving in the db will be todos
