import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStore, useSelector } from 'react-redux'

import { signOut } from '@/store/actions/user'
import { getUserInfo } from '@/store/reducers/user'

import './style.scss'

export default () => {
  const store = useStore()
  const userinfo = useSelector(state => getUserInfo(state))

  const onSignOut = async () => {
    const _signOut = () => signOut()(store.dispatch, store.getState)
    const [, success] = await _signOut()
    if (success) {
      // 退出成功
      window.location.reload()
    } else {
      alert('退出失败')
    }
  }

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-md navbar-expand-lg navbar-dark bg-dark bd-navbar' styleName='test'>
        <NavLink className='navbar-brand' exact to='/'>
          React同构脚手架
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/topics'>
                Topics
              </NavLink>
            </li>
          </ul>

          <span className='mt-2 mt-md-0'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <span className='nav-link'>{userinfo.nickname}</span>
              </li>
              <li className='nav-item'>
                {userinfo.nickname ? (
                  <a className='nav-link' onClick={() => onSignOut()}>
                    退出
                  </a>
                ) : (
                  <Link to='/sign-in'>登录</Link>
                )}
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </header>
  )
}
