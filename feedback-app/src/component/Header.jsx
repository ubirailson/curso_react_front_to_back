import React from 'react'
import PropTypes from 'prop-types'


//function Header(props) {
function Header({ text }) {
  
  return (
    <header>
      <div className="container">
        {/* <h2>{props.text}</h2> */}
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {  
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,//.isRequired
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header


