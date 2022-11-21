import { useState, useEffect } from 'react'

import * as API from '../api'
import { useDebounce } from './'

function useSearch(searchWord) {
  const [videos, setVideos] = useState([])

  const debouncedSearchValue = useDebounce(searchWord)

  useEffect(() => {
    const searchSongs = async () => {
      try {
        const {
          data: { data },
        } = await API.searchSongs(debouncedSearchValue)

        setVideos(data)
      } catch (err) {
        console.log(err)
      }
    }

    searchSongs()
  }, [debouncedSearchValue])

  return [videos, setVideos]
}

export default useSearch
