import app from "./app";
import routes from "./routes";

export const localsMiddleware = (req,res,next)=>{
    app.locals.siteName = "OhTube";
    app.locals.routes = routes;
    next();
};