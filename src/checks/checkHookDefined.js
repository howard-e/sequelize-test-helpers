const { isFunction } = require('../utils')

const checkHookDefined = instance => hookName => {
  if (!isFunction(instance.hooks[hookName])) {
    throw new Error(
      `Expected 'instance.hooks[${hookName}]' to be a function. Received '${typeof instance.hooks[hookName]}' instead.`
    )
  }

  it(`defined the ${hookName} hook`, () => {
    expect(instance.hooks[hookName]).toBeFunction()
  })
}

module.exports = checkHookDefined
