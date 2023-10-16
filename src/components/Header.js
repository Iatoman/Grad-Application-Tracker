import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({header}) => {

  function filler(){
    alert("This is Useless");
  }

  return (
    <header className='Header'>
        <h1>{header}</h1>
        <p>Double click a job to mark as applied</p>
    </header>
  )
}

Header.defaultProps = {
    header: 'Grad Job Deadline Tracker',
}

Header.propTypes = {
    header: PropTypes.string,
}

export default Header
