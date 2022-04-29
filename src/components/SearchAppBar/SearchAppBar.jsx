import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import SearchIcon from '@mui/icons-material/Search';
import PlatformButton from '../PlatformButton/PlatformButton';
import { createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import './SearchSection.module.scss';



const onKeyDown = (e, onEnter) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        // enter
        onEnter(e);
    }
};
  const SearchBar = ({
    value,
    onChange,
    onEnter,
}) => {

console.log(onKeyDown);

 const classes = createTheme()
    return (
        <Box className={classes.root}>
                <Container maxWidth="md">
                    <Toolbar disableGutters>

                        <div>

                        <Box className={classes.modalFormUser }>
                        <label> Enter your Fortnite ID </label>

                            <InputBase
                                value={value}
                                type="search"
                                onChange={e => onChange(e.target.value)}
                                onKeyDown={event => onKeyDown(event, onEnter)}


                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput }}
                                inputProps={{ 'aria-label': 'search' }} />
                        </Box>
                        </div>
                   </Toolbar>
                </Container>

        </Box>
    );

}


export default SearchBar;