export const handleSuccessResponse = (res, message, data, statusCode) => {
  return res.status(statusCode).json({
    message,
    data,
  });
};

export const handleErrorResponse = (res, err, statusCode) => {
  return res.status(statusCode).json({
    message: err.message,
  });
};
