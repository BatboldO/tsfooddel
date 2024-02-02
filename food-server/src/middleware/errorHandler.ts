import { Response, Request, NextFunction} from "express";

const errorHandler = (
   error: Error,
   req: Request,
   res: Response, 
   next: NextFunction
) => {
    console.log("ERR MIDD====>",  err.stack?.red.underline);

    res.status(500).json ({
        message: error.message || "Internal Server Error",
    });
};

 export default errorHandler;


