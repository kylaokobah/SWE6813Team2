import React from 'react';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { blueGrey } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles';




const onKeyDown = (e, onEnter) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        // enter
        onEnter(e);
    }
};

function epicnameSearchSection() {


const SearchAppBar = ({
epicName,

}) => {


    return (
        <Box className={classes.root}>
            <AppBar className={classes.bar} position="static">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Fortnite Stats Tracker
                        </Typography>
                        <Button onSelect={onSelectPlatform} selected={selectedPlatform} />
                        <Box className={classes.search}>
                            <IconButton
                                className={classes.searchIcon}
                                onClick={onEnter}
                                aria-label="search"
                            >

                            </IconButton>
                            <InputBase
                                value={value}
                                type="search"
                                align= 'center'
                                onChange={e => onChange(e.target.value)}
                                onKeyDown={event => onKeyDown(event, onEnter)}
                                placeholder="        Enter Your Epic Username"

                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};


