const logger = (req, res, next) => {
  const time = new Date();
  console.log(time);
  next();
};

module.exports = logger;
