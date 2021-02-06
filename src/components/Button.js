import React from "react"

import PropTypes from "prop-types"

import "./Button.css"

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
