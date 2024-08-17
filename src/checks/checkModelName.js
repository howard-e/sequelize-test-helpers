const checkModelName = model => modelName => {
  if (model.modelName !== modelName) {
    throw new Error(
      `Expected 'model.modelName' to be the same as 'modelName'. Received ${model.modelName} and ${modelName} instead.`
    )
  }
  return modelName
}

module.exports = checkModelName
