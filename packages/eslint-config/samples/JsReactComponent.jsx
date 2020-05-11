import PropTypes from 'prop-types'
import React from 'react'

let testing

const moo123 = 'foo'

const thisIsAnArrowFn = (string) => {
  return string + testing
}

thisIsAnArrowFn('hello')

function thisIsAFn(string) {
  if (string) {
    const moo = 'foo'
    return moo
  }

  return string
}

thisIsAnArrowFn('hello')
thisIsAFn('hello')

const Comp = () => null

export const JsComp = () => {
  return (
    <>
      <div>Moo</div>
      <div>Moo</div>
    </>
  )
}

// eslint-disable-next-line react/no-multi-comp
export const JsReactComponent = ({ bool, text, max, ...rest }) => {
  return (
    <div>
      <Comp />
      <h1 {...rest}>Hello</h1>
      <div>{bool && text}</div>
      <div>{max}</div>
      <a href="/#">Hello</a>
      <div />
      <button type="button">moo</button>
    </div>
  )
}

JsReactComponent.propTypes = {
  bool: PropTypes.bool,
  max: PropTypes.number,
  text: PropTypes.string,
}

JsReactComponent.defaultProps = {
  bool: false,
  max: 100,
  text: '',
}

export default 'moo'
