import React from 'react'
import NavInstructor from './NavInstructor'

const Layout = ({ children }) => (
  <div className="App">
    <NavInstructor />
    {children}
  </div>
)

export default Layout;