import { Stack, Box } from '@mui/material'

import { VideoCard } from '../'

const Videos = ({
  videos,
  activeView,
  setFavorites,
  userId,
  favorites = [],
}) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
      sx={{ width: '80%', marginTop: 1, marginInline: 'auto' }}
    >
      {videos.map((video) => (
        <Box key={video.id}>
          <VideoCard
            {...video}
            userId={userId}
            activeView={activeView}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
