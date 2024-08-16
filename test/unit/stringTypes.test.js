const { dataTypes } = require('../../src')

describe('src/dataTypes#string', () => {
  const doTest = dataType => {
    describe(`Testing ${dataType}`, () => {
      describe('non function', () => {
        it(`supports ${dataType} with BINARY`, () => {
          expect(dataTypes[dataType].BINARY).toBeTruthy()
        })
      })

      describe('function', () => {
        it(`supports ${dataType}() with BINARY`, () => {
          expect(dataTypes[dataType](10).BINARY).toBeTruthy()
        })
      })
    })
  }
  ;['CHAR', 'STRING'].forEach(doTest)
})
