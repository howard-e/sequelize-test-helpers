// const { expect } = require('chai')

const { sequelize, dataTypes, checkHookDefined } = require('../../../src')
const HasHooksModel = require('../../models/HasHooks')

describe('src/checkHookDefined', () => {
  describe('when hooks are defined', () => {
    const Model = HasHooksModel(sequelize, dataTypes)
    const instance = new Model()
    ;['beforeValidate', 'afterValidate', 'afterCreate'].forEach(checkHookDefined(instance))
  })

  describe('when hooks not defined', () => {
    const Model = HasHooksModel(sequelize, dataTypes)
    const instance = new Model()

    it('fails the test', () =>
      expect(() => {
        checkHookDefined(instance)('not a hook')
      }).toThrow())
  })
})
