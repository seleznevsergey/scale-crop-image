function createValidator(joi) {
  const getImg = {
    query: {
      href: joi.string().uri().required(),
      x: joi.number().integer().min(0).required(),
      y: joi.number().integer().min(0).required(),
      h: joi.number().integer().min(0).required(),
      w: joi.number().integer().min(0).required(),
      s: joi.number().greater(0).required(),
    },
  };
  return {
    getImg,
  };
}
module.exports = createValidator;
