module.exports = (err, req, res, next) => {
  // Make sure the status exists on the error object
  console.log(err);
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};
