import React from 'react'

const aVarIgnored = 'moo'

let testing: string

const thisIsAnArrowFn = (string: string): string => {
  return string + testing
}

const func = async () => {
  await 'value'
  const createValue = () => 'value'
  await createValue()
}

func()

thisIsAnArrowFn('hello')

interface Foo {
  [Z: string]: unknown
  B: string
  new ()
  A(): void
}

interface Args {
  foo?: string
  boo?: string
  poo?: string
}

function thisIsAFn(arguments_: Args): string {
  if (arguments_.boo === 'something') {
    const moo = 'foo'
    return moo
  }

  return arguments_.poo
}

thisIsAnArrowFn('hello')
thisIsAFn({ boo: 'hello' })

interface Props {
  bool: boolean
  text: string
  max: number
}

class Foo {
  bar() {
    this.bar()
  }
}

const fooFn = (thing: Foo): Foo => {
  return thing
}

const testing123 = new Foo()

fooFn(testing123)

export const Comp2323: React.FC = (props) => {
  const { children } = props
  return <div>{children}</div>
}

// eslint-disable-next-line react/no-multi-comp
export const TsReactComponent: React.FC<Props> = ({
  bool = false,
  text,
  max,
}) => {
  return (
    <div>
      <h1 className="moo foo">Hello</h1>
      {bool && <div>{text}</div>}
      <div>{max}</div>
      <a href="/#">Hello</a>
      <div />
      <button type="button">moo</button>
    </div>
  )
}

export default 'moo'
