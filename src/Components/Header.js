import React from 'react'

function Header({handleToggleDarkMode}) {
  return (
    <div className='header'>
        <h1>Notes App</h1>
        <button
          onClick={() =>
					  handleToggleDarkMode(
						  (previousDarkMode) => !previousDarkMode
					  )
				  }
          className='dartmork'
        >Dark Mode</button>
    </div>
  )
}

export default Header