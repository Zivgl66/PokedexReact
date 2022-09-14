import Joi from "joi-browser";

const searchSchema = {
  input: Joi.string().max(64).required(),
};

export default searchSchema;
