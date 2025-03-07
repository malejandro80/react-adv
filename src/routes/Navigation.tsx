/** @format */

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/' className='nav-active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className='nav-active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className='nav-active'>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<h1>Home</h1>} />
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
