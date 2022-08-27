const Joi = require("joi");
module.exports = {
  signup: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
  login:{
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required()
    })
  }

};
