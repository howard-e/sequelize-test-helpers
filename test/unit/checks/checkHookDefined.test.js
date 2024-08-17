const { sequelize, dataTypes, checkHookDefined } = require('../../../src')
const HasHooksModel = require('../../models/HasHooks')

describe('src/checkHookDefined', () => {
  let Model = HasHooksModel(sequelize, dataTypes)
  let instance = new Model()

  describe('when hooks are defined', () => {
    ;['beforeValidate', 'afterValidate', 'afterCreate'].forEach(checkHookDefined(instance))
  })

  describe('when hooks are not defined', () => {
    it("fails the test, defined the 'not a hook' hook", () => {
      expect(() => {
        checkHookDefined(instance)('not a hook')
      }).toThrow()
    })
  })
})
