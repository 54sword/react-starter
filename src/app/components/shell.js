import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// redux
import { useStore } from 'react-redux'
import { saveScrollPosition, setScrollPosition } from '@/store/actions/scroll'

// tools
import parseUrl from '@/common/parse-url'

export default function (Component) {
  function Shell({ history, location, match, staticContext }) {
    const [notFound, setNotFound] = useState('')

    const store = useStore()

    const { pathname, search } = location

    location.params = search ? parseUrl(search) : {}

    useEffect(() => {
      setScrollPosition(pathname + search)(store.dispatch, store.getState)
      return () => {
        saveScrollPosition(pathname + search)(store.dispatch, store.getState)
      }
    }, [pathname, search, store.dispatch, store.getState])

    if (notFound) {
      return <div>{notFound}</div>
    }

    return <Component match={match} setNotFound={setNotFound} />
  }

  Shell.loadDataOnServer =
    Component.loadDataOnServer ||
    function () {
      return { code: 200 }
    }

  Shell.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    staticContext: PropTypes.object
  }

  return Shell
}
