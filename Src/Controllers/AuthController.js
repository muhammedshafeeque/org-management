const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");

module.exports = {
  doSignup: async (req, res, next) => {
    let user = req.body;
    try {
      let exist = await UserService.getUser(user.email);
      exist
        ? res.status(400).json({ message: "user Allready Exist" })
        : ((user.password = await MiscService.encryptPassword(user.password)),
          (user = await UserService.createUser(user)),
          (token = await MiscService.generateToken(user.id)),
          res
            .status(201)
            .json({ token, user: { name: user.name, email: user.email } }));
    } catch (error) {
      next(error);
    }
  },
  doLogin: async (req, res) => {
    let user = req.body;
    try {
      let User = await UserService.getUser(user.email); 
      User
        ? ((passwordVerification = await MiscService.verifyPassword(
            user.password,
            User.password
          )),
          (token = MiscService.generateToken(User.id)),
          res
            .status(200)
            .json({ token, user: { name: User.name, email: User.email } }))
        : res.status(400).json("invalid user");
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
