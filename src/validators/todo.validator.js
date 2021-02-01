import Joi from "joi";

const CreateTodoSchema = Joi.object({
  startTime: Joi.number().required(),
  endTime: Joi.number().required(),
  title: Joi.string(),
  description: Joi.string(),
});

const UpdateTodoSchema = Joi.object({
  startTime: [Joi.number(), Joi.string()],
  endTime: [Joi.number(), Joi.string()],
  title: Joi.string(),
  description: Joi.string(),
  _id: Joi.string(),
});

export const validateTodoData = (data) => {
  let { error, value } = CreateTodoSchema.validate(data);
  return {
    err: error,
    value,
  };
};

export const validateTodoUpdateData = (data) => {
  let { error, value } = UpdateTodoSchema.validate(data);
  return {
    err: error,
    value,
  };
};
