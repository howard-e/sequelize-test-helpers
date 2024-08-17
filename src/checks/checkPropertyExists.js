const checkPropertyExists = instance => propName => {
  if (!instance[propName]) {
    throw new Error(`Expected property, '${propName}' to exist.`)
  }

  it(`has property ${propName}`, () => {
    expect(instance).toHaveProperty(propName)
  })
}

module.exports = checkPropertyExists
