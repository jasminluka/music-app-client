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
          borderRadius: 0,
        }}
      >
        <CardMedia
          image={thumbnail}
          alt={title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
        <CardContent
          sx={{
            backgroundColor: '#1E1E1E',
            backgroundImage:
              'radial-gradient(circle at 65% 15%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 40% 33%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 9% 92%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 84% 0%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 97% 94%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 13% 95%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 77% 8%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 58% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 76% 71%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 88% 74%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 74% 99%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 16% 56%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 25% 4%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 54% 83%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 70% 60%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 23% 73%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 63% 81%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 56% 58%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 64% 68%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 52% 48%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),linear-gradient(90deg, rgb(54, 51, 154),rgb(148, 25, 101))',
            height: '106px',
          }}
        >
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
