import {Schema, model} from "mongoose";

const basketSchema = new Schema ({
    User: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true,
    },
     foods: [
        {
        food: {type: Schema.Types.ObjectId, ref: "Food" , required: true },
        qty:{
            type: Number,
            required: true, 
        },
    },
    ],
    totalPrice: Number,      
});

const Basket = model("Basket", basketSchema);
export default Basket;