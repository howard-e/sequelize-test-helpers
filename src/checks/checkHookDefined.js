const checkHookDefined = instance => hookName => {
  it(`defined the ${hookName} hook`, () => {
    expect(instance.hooks[hookName]).toBeFunction()
  })
}

module.exports = checkHookDefined
