import { useState } from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'

import * as API from '../../api'

// default user id
const userId = 1

const VideoCard = ({
  id: songId,
  _id: favoriteId,
  name,
  thumbnail,
  title,
  activeView,
  setFavorites,
  favorites,
  ...rest
}) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)

  const handleOpenSnackbar = () => {
    setIsSnackbarOpen(true)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setIsSnackbarOpen(false)
  }

  const addToFavorites = async (song) => {
    try {
      const {
        data: { data },
      } = await API.addToFavorites(userId, song)

      handleOpenSnackbar()
      setFavorites((prevFavorites) => [...prevFavorites, data])
    } catch (err) {
      console.log(err)
    }
  }

  const removeFromFavorites = async (favoriteId) => {
    try {
      const {
        data: { data },
      } = await API.deleteFavorite(favoriteId)

      setFavorites((prevFavorites) =>
        prevFavorites.filter((prevFavorite) => prevFavorite.id !== data.id)
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Card
        sx={{
          width: { xs: '100%', sm: '358px', md: '320px' },
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardMedia
          image={thumbnail}
          alt={title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Typography>
          {activeView === 'home' ? (
            !favorites.find((favorite) => favorite.id === songId) && (
              <Button
                variant="contained"
                onClick={() =>
                  addToFavorites({
                    id: songId,
                    name,
                    thumbnail,
                    title,
                    ...rest,
                  })
                }
              >
                Add to favorites
              </Button>
            )
          ) : (
            <Button
              color="error"
              variant="contained"
              onClick={() => removeFromFavorites(favoriteId)}
            >
              Remove from favorites
            </Button>
          )}
        </CardContent>
      </Card>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Added to Favorites!
        </Alert>
      </Snackbar>
    </>
  )
}

export default VideoCard
