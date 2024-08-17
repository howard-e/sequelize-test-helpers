const checkHookDefined = instance => hookName => {
  if (typeof instance.hooks[hookName] !== 'function') {
    throw new Error()
  }

  return instance.hooks[hookName]
}

module.exports = checkHookDefined
