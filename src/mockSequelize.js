const DataTypes = require('./dataTypes')

class Model {}
Model.init = jest.fn()
Model.belongsToMany = jest.fn()
Model.belongsTo = jest.fn()
Model.hasMany = jest.fn()
Model.hasOne = jest.fn()

module.exports = { Model, DataTypes }
