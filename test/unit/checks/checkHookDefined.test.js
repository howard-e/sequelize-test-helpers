const { sequelize, dataTypes, checkHookDefined } = require('../../../src')
const HasHooksModel = require('../../models/HasHooks')

describe('when hooks are defined', () => {
  const Model = HasHooksModel(sequelize, dataTypes)
  const instance = new Model()

  ;['beforeValidate', 'afterValidate', 'afterCreate'].forEach(checkHookDefined(instance))
})

describe('when hooks not defined', () => {
  const Model = HasHooksModel(sequelize, dataTypes)
  const instance = new Model()
  const hookName = 'not a hook'

  it(`fails the test, defined the '${hookName}' hook`, () => {
    expect(() => {
      checkHookDefined(instance)(hookName)
    }).toThrow()
  })
})
