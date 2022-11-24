import React from 'react'

const Header = () => {
  return (
    <div>
               <header className="header">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              placeHolder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>
    </div>
  )
}

export default Header