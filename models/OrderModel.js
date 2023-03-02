import mongoose from 'mongoose'
const { Schema, model, Types } = mongoose

const OrderSchema = new Schema(
  {
    clientId: {
      type: Types.ObjectId,
      required: true,
      ref: 'partner'
    },
    products: [{
      product: {
        type: Types.ObjectId,
        ref: 'product'
      },
      quantity: Number
    }]

  },
  { timestamps: true }
)

export const OrderModel = model('order', OrderSchema, 'order')
