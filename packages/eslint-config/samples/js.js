/**
 * Comment
 *
 * comment comment comment comment comment comment comment comment comment
 * comment comment comment comment comment
 */

// Comment

const variable3234 = 'string'
const variable2 = 'variable'
const myRe = /(?<id>ba[rz])/u

const json = JSON.stringify(variable2, null, 2)

const localVar = 'string'

const xyz = (aaa) => {
  return aaa ? 2 : 3
}

const constant = 'CONSTANT'

const numberOperator = (3 + 4) / 2
const numberPlus = numberOperator + 1

const array1 = ['one', 'two', numberOperator, xyz(constant)]

const object = {
  first: 'string',
  second: ['one', 'two', numberOperator],
}

const templateLiteral = `this is a var ${variable2}`

if (localVar) {
  // eslint-disable-next-line no-console
  console.log('log')
} else {
  // eslint-disable-next-line no-console
  console.log(window.location.hash)
}

export function JsComp() {
  return (
    <>
      <div>Moo</div>
      <div>Moo</div>
    </>
  )
}

function name(parameter) {
  const output = `${parameter}string`
  switch (output) {
    case 'moostring':
      console.log('hello', 'moo')
      break

    default:
      break
  }

  return output
}

name(variable2)
name(templateLiteral)
name(json)
name(constant)
name(numberPlus)
name(array1)
name(object)

export const funcName = (parameter) => {
  return parameter
}

funcName(myRe)

const array = []

funcName(array)

if (numberPlus > 0) {
  funcName(myRe)
}
