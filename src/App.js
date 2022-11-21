import { useState, useEffect } from 'react'
import { CssBaseline, Box, Typography } from '@mui/material'

import { AppBar, Videos } from './components'
import { useDebounce } from './hooks'
import * as API from './api'

const App = () => {
  const [searchWord, setSearchWord] = useState('')
  const [activeView, setActiveView] = useState('home')
  const [videos, setVideos] = useState([])
  const [favorites, setFavorites] = useState([])

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

  return (
    <Box
      sx={{
        backgroundImage:
          'radial-gradient(circle at 65% 15%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 40% 33%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 9% 92%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 84% 0%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 97% 94%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 13% 95%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 77% 8%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 58% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 76% 71%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 88% 74%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 74% 99%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 16% 56%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 25% 4%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 54% 83%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 70% 60%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 23% 73%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 63% 81%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 56% 58%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 64% 68%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 52% 48%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),linear-gradient(90deg, rgb(54, 51, 154),rgb(148, 25, 101))',
      }}
    >
      <CssBaseline />
      <AppBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      {activeView === 'home' ? (
        searchWord && videos?.length > 0 ? (
          <Videos
            videos={videos}
            activeView={activeView}
            setFavorites={setFavorites}
            favorites={favorites}
          />
        ) : (
          <Box
            sx={{
              marginTop: 2,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Typography variant="h5" color="white">
              Search for songs...
            </Typography>
          </Box>
        )
      ) : (
        <Videos
          videos={favorites}
          activeView={activeView}
          setFavorites={setFavorites}
        />
      )}
    </Box>
  )
}

export default App
