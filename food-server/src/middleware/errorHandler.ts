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
    console.log("ERR MIDD====>",  error.stack?.red.underline);

    res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
      });
    };
    
    export default errorHandler;