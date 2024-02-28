import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

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
  isVerified : {
    type: Boolean,
    default: false,
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    buildingNo: { type: Number },
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Moderator"],
    default: "User",
  },
  otp: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  phone: String,
  orders: [
    {
      orderNo: String,
      payment: {
        paymentAmount: Number,
        status: {
          type: String,
          enum: ["paid", "unpaid"],
          default: "unpaid",
        },
        paidDate: Date,
        createdAt: Date,
      },
      address: {
        khoroo: { type: String },
        duureg: { type: String },
        buildingNo: { type: String },
        info: String,
      },
      delivery: {
        status: {
          type: String,
          enum: ["Pending", "Progressing", "Delivered"],
          default: "Pending",
        },
        deliveredAt: Date,
      },
    },
  ],
},
{
  timestamps: true,
}
);

userSchema.pre("save", async function async() {
if(this.isModified("password")) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
}
});

const User = model("User", userSchema);

export default User;
