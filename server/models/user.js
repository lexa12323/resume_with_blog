import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Token from "./token.js";

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

//define schema level methods to create access token and refresh token:
userSchema.methods = {
    createAccessToken: async function () {
      try {
        let { _id, email } = this;
        let accessToken = jwt.sign(
          { _id, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "5s",
          }
        );
        return accessToken;
      } catch (error) {
        console.error(error);
        return;
      }
    },
    createRefreshToken: async function () {
      try {
        let { _id, email } = this;
        let refreshToken = jwt.sign(
          { _id, email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
  
        await new Token({ token: refreshToken }).save();
        return refreshToken;
      } catch (error) {
        console.error(error);
        return;
      }
    },
};
  
//pre save hook to hash password before saving user into the database:
userSchema.pre("save", async function (next) {
try {
    let salt = await bcrypt.genSalt(12); // generate hash salt of 12 rounds
    let hashedPassword = await bcrypt.hash(this.password, salt); // hash the current user's password
    this.password = hashedPassword;
} catch (error) {
    console.error(error);
}
return next();
});

const User = mongoose.model('User', userSchema)

export default User;