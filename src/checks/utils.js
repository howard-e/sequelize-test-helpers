const { serialCommaList } = require('../utils')

// if unique is true then expect index.unique to be true too, but
// if unique is false then index.unique can simply be falsy
const matchUniqueness = (index, unique) => (unique ? index.unique === unique : !index.unique)
const prefix = unique => (unique ? 'n ' : ' non-')

const checkSingleIndex = (instance, unique) => indexName => {
  it(`indexed a${prefix(unique)}unique ${indexName}`, () => {
    expect(
      instance.indexes.find(
        index => matchUniqueness(index, unique) && index.fields[0] === indexName
      )
    ).not.toBeUndefined()
  })
}

const checkAllIndexes = (instance, unique) => indexNames => {
  describe(`indexed a${prefix(unique)}unique composite of [${serialCommaList(indexNames)}]`, () => {
    indexNames.forEach((indexName, i) => {
      it(`includes ${indexName} at ${i}`, () => {
        expect(
          instance.indexes.find(
            index => matchUniqueness(index, unique) && index.fields[i] === indexName
          )
        ).not.toBeUndefined()
      })
    })
  })
}

const checkIndex = (instance, indexNameOrNames, unique = false) =>
  (Array.isArray(indexNameOrNames) ? checkAllIndexes : checkSingleIndex)(
    instance,
    unique
  )(indexNameOrNames)

module.exports = { checkIndex }
