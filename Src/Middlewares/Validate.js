const pick = require("../utils/pick");
const Joi = require("joi");
module.exports = {
  validate: (schema) => (req, res, next) => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema).validate(object);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  },
};
