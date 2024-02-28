import { Response, Request, NextFunction} from "express";


interface IMyError extends Error {
    statusCode: number;
  }

const errorHandler = (
   error: IMyError,
   req: Request,
   res: Response, 
   next: NextFunction
) => {
    console.log("ERR MESSAGE =====>", error.message.cyan);
    console.log("ERR MIDD====>",  error.stack?.red.underline);

    if (error.message === "jwt expired")
    error.message = "Token-ний хугацаа дууссан байна дахин нэвтэрнэ үү";
  else if (error.message === "invalid signature")
    error.message = "Token буруу байна дахин нэвтэрнэ үү";
  else error.message = error.message;

  res.status(error.statusCode || 500).json({
    message: error.message || "Серверт алдаа гарлаа дахин оролдоно уу",
  });
};
    export default errorHandler;