import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  token: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expires: Date,
});

const Token = mongoose.model('Token', tokenSchema)

export default Token;