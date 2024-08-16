const { dataTypes } = require('../../src')

describe('src/dataTypes#numeric', () => {
  const doTest = dataType => {
    describe(`Testing ${dataType}`, () => {
      describe('non function', () => {
        it(`supports ${dataType} with ZEROFILL`, () => {
          expect(dataTypes[dataType].ZEROFILL).toBeTruthy()
        })

        it(`supports ${dataType} with UNSIGNED`, () => {
          expect(dataTypes[dataType](10).UNSIGNED).toBeTruthy()
        })

        it(`supports ${dataType} with UNSIGNED.ZEROFILL`, () => {
          expect(dataTypes[dataType].UNSIGNED.ZEROFILL).toBeTruthy()
        })

        it(`supports ${dataType} with ZEROFILL.UNSIGNED`, () => {
          expect(dataTypes[dataType].ZEROFILL.UNSIGNED).toBeTruthy()
        })
      })

      describe('function', () => {
        it(`supports ${dataType}() with ZEROFILL`, () => {
          expect(dataTypes[dataType](10).ZEROFILL).toBeTruthy()
        })

        it(`supports ${dataType}() with UNSIGNED`, () => {
          expect(dataTypes[dataType](10).UNSIGNED).toBeTruthy()
        })

        it(`supports ${dataType}() with UNSIGNED.ZEROFILL`, () => {
          expect(dataTypes[dataType](10).UNSIGNED.ZEROFILL).toBeTruthy()
        })

        it(`supports ${dataType}() with ZEROFILL.UNSIGNED`, () => {
          expect(dataTypes[dataType](10).ZEROFILL.UNSIGNED).toBeTruthy()
        })
      })
    })
  }
  ;[
    'BIGINT',
    'DECIMAL',
    'DOUBLE',
    'DOUBLE PRECISION',
    'FLOAT',
    'INTEGER',
    'REAL',
    'SMALLINT',
    'TINYINT'
  ].forEach(doTest)
})
