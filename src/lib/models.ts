import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      lowercase: true
    },
    password: {
      type: String,
      min: 6
    },
    img: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      lowercase: true
    },
    phone: {
      type: String
    },
    message: {
      type: String,
      min: 10,
      max: 160,
      required: true
    }
  },
  { timestamps: true }
)

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    },
    img: { type: String, required: true },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)
export const Contact =
  mongoose.models?.Contact || mongoose.model('Contact', contactSchema)
