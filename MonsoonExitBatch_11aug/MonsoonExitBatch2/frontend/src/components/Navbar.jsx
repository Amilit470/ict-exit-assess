//Write your missing code here
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/Addbox'
import HomeIcon from '@mui/icons-material/Home'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box >
         <AppBar >
              <Toolbar >
                <Typography variant='h5' sx={{ flexGrow: 1 }}>EmployeeApp</Typography>&nbsp;
                <Button variant='contained'color='error'>
                    <Link to ={'/'} style={{textDecoration:'none',color:'white'}}>
                    <HomeIcon/>
                    </Link>
                    </Button>&nbsp;
                <Button variant='contained'color='error'>
               <Link to={'/add'} style={{textDecoration:'none',color:'white'}}>
                    <AddBoxIcon/>
                    </Link>
                    </Button>
             </Toolbar>
            </AppBar>
        </Box>
        <br /><br />
    </div>
  )
}

export default Navbar


