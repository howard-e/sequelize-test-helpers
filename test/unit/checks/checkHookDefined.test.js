const { sequelize, dataTypes, checkHookDefined } = require('../../../src')
const HasHooksModel = require('../../models/HasHooks')

describe('src/checkHookDefined', () => {
  let Model = HasHooksModel(sequelize, dataTypes)
  let instance = new Model()

  describe('when hooks are defined', () => {
    ;['beforeValidate', 'afterValidate', 'afterCreate'].forEach(checkHookDefined(instance))
  })

  describe('when hooks are not defined', () => {
    const hookName = 'not a hook'

    it(`fails the test, defined the ${hookName} hook`, () => {
      expect(() => {
        checkHookDefined(instance)(hookName)
      }).toThrow()
    })
  })
})
