import Errorhandler from "../utils/Errorhandler.js";

export const isAuthenticated = (req,res,next) => {
    const token = req.cookies["connect.sid"];

    if (!token) {
        return next(new Errorhandler("Not Logged In",401))
    }

    
    next();

}

export const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return next(new ErrorHandler("Only Admin Allowed", 405));
    }
    next();
  };