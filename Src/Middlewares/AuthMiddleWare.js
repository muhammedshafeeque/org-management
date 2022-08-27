const MiscServices = require("../Services/MiscServices");
const UserService = require("../Services/UserService");

module.exports={
    verifyUser:async(req,res,next)=>{
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
          ) {
            try {
              token = req.headers.authorization.split(" ")[1];
              const decoded = await MiscServices.verifyToken(token)
              let user = await UserService.getUserByid(decoded.id)

              if (user) {
                req.user = user; 
                req.user.token=token
              }
              next();
            } catch (error) {
              res.status(401).json({ error: "Not Authorized" });
            }
        }else{
            res.status(401).json({ error: "Not Authorized" });
        }
    }
}