const checkModelName = model => modelName => {
  if (model.modelName !== modelName) {
    throw new Error(
      `Expected 'model.modelName' and 'modelName' to be same. Received '${model.modelName}' and '${modelName}' instead.`
    )
  }

  it(`is named '${modelName}'`, () => {
    expect(model.modelName).toEqual(modelName)
  })
}

module.exports = checkModelName
