const checkHookDefined = instance => hookName => {
  if (typeof instance.hooks[hookName] !== 'function') {
    throw new Error(
      `Expected 'instance.hooks[hookName]' to be a function. Received ${typeof instance.hooks[hookName]} instead.`
    )
  }
  return instance.hooks[hookName]
}

module.exports = checkHookDefined
