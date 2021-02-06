import React from "react"

import PropTypes from "prop-types"

import "./Input.css"

const Input = ({ type, value }) => {
  return <input className="input" type={type} value={value} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input
