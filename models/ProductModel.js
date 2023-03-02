import mongoose from 'mongoose'
const { Schema, model, Types } = mongoose

const ProductSchema = new Schema(
  {
    partnerId: {
      type: Types.ObjectId,
      required: true,
      ref: 'partner'
    },
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }

  },
  { timestamps: true }
)

export const ProductModel = model('product', ProductSchema, 'product')
