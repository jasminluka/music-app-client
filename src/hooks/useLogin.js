import { useEffect } from 'react'

import * as API from '../api'

function useLogin({ email, password }) {
  useEffect(() => {
    const loginUser = async () => {
      try {
        const {
          data: { data },
        } = await API.loginUser({ email, password })

        localStorage.setItem('user', JSON.stringify(data))
      } catch (err) {
        console.log(err)
      }
    }

    loginUser()
  }, [email, password])
}

export default useLogin
