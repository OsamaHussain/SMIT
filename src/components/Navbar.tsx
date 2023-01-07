import { Button } from '@mui/material';
// import logo from '../images/logo.png';
import React from 'react'
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='navbar'>
            {/* Saylani LOOG */}
            <img  id="Image" src="/static/images/logo.png" alt="Saylani"  width={'200px'} height={'50px'}/>

            {/* Navigation Menu */}
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Service" />
                <Tab label="Media" />
                <Tab label="News" />
                <Tab label="Contact us" />
                </Tabs>
            </Box>

            {/* Apply Button */}
            <Button variant="contained" color="primary" sx={{width:150}}>Apply Now</Button>
        </div>
    )
}

export default Navbar;