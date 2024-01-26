import { Request, Response} from "express";

import User from "../model/user";
import { sendEmail} from "../utils/sendEmail"

export const SendEmailToUser = async (req: Request, res: Response) => {
    try {
        const {email} = req.body;
        await sendEmail( email, "Verify Account for Food platform");

    }
}