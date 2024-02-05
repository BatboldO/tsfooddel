import {Schema, model} from "mongoose";


const categorySchema = new Schema({
    name: {
        type: String,
        require : [true, "category name is mandatory"],
        unique: true,
        maxLength: [50, "category name must not exceed 50 characters"],
    },
     description: {
      type: String,
      required: [true, "catogory info must be included "],
     },
     image: {
        type: String, 
        default: "no-category-photo",
     },
     createdAt: {
        type: Date,
        default: Date.now,
     },
});

const Model = model("Category", categorySchema);
export default Model; 