import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useStore } from 'react-redux'
import { signIn } from '@/store/actions/user'

import './style.scss'

import Shell from '@/components/shell'
import Meta from '@/components/meta'

export default Shell(() => {
  const store = useStore()
  const nickname = useRef()

  const onSignIn = async event => {
    event.preventDefault()

    const name = nickname.current

    if (!name.value) {
      name.focus()
      return false
    }

    const _signIn = args => signIn(args)(store.dispatch, store.getState)
    let [err, success] = await _signIn({ nickname: name.value })
    if (success) {
      window.location.href = '/'
    }
    return false
  }

  return (
    <div styleName='container' className='text-center'>
      <Meta title='React同构脚手架' />
      <form className='form-signin' onSubmit={e => onSignIn(e)}>
        <div styleName='icon' />
        <h1 className='h3 mb-3 font-weight-normal'>React同构脚手架</h1>
        <input type='text' name='nickname' ref={nickname} className='form-control mb-3' placeholder='请输入昵称' />
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          登录
        </button>
      </form>
    </div>
  )
})
