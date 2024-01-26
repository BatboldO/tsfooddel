
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
 
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Нэрээ заавал оруулна уу"], 
  },
  email: {
    type: String,
    unique: true,
    required: [true, "И-мэйл хаяг заавал оруулна уу"],
  },
  password: {
    type: String,
    required: [true, "Нууц үг заавал оруулна уу"],
    minlenght: 6,
    select: false,
  },
  avatarUrl: {
    type: String,
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    buildingNo: { type: Number },
  },
  role: {
    type: String,
    enum:["user","Admin", "Moderator"],
    default: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
 
// userSchema.pre('save',  async function(){ 
//     const salt =  await bcrypt.genSaltSync(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });
    
// userSchema.methods.checkPassword = async function (password: string) {
 
//   return await bcrypt.compare(password, this.password);
// };

const User = model("User", userSchema);
 
export default User;
 
 