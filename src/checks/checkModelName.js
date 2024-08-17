const checkModelName = model => modelName => {
  if (model.modelName !== modelName) {
    throw new Error()
  }

  return modelName
}

module.exports = checkModelName
