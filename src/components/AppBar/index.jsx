import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Favorites', value: 'favorites' },
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchAppBar = ({
  searchWord,
  setSearchWord,
  activeView,
  setActiveView,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'radial-gradient(circle at 65% 15%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 40% 33%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 9% 92%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 84% 0%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 97% 94%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 13% 95%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 77% 8%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 58% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 76% 71%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 88% 74%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 74% 99%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 16% 56%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 25% 4%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 54% 83%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 70% 60%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 23% 73%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 63% 81%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 56% 58%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 64% 68%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 52% 48%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),linear-gradient(90deg, rgb(54, 51, 154),rgb(148, 25, 101))',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Music App
          </Typography>
          {activeView === 'home' && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.value}
                onClick={() => setActiveView(item.value)}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchAppBar
