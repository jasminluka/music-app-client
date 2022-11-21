import { useState, useEffect } from 'react'

import * as API from '../api'

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))

        const {
          data: { data },
        } = await API.getUserById(user._id)

        setCurrentUser(data)
      } catch (err) {
        console.log(err)
      }
    }

    getCurrentUser()
  }, [])

  return currentUser
}

export default useCurrentUser
