const { sequelize, dataTypes, checkModelName } = require('../../../src')
const SimpleModel = require('../../models/Simple')

describe('src/checkModelName', () => {
  const Model = SimpleModel(sequelize, dataTypes)

  describe('happy path', () => {
    checkModelName(Model)('Simple')
  })

  describe('unhappy path', () => {
    const modelName = 'Not So Simple'

    it(`fails the test, is named '${modelName}'`, () => {
      expect(() => {
        checkModelName(Model)(modelName)
      }).toThrow()
    })
  })
})
