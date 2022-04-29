import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import PCIcon from '../../assets/images/PCIcon';
import PSNIcon from '../../assets/images/PSNIcon';
import XBoxIcon from '../../assets/images/XBoxIcon';
import { PLATFORM } from '../../utils/consts';
import './PlatformButton.css'


 makeStyles = classes(theme => ({
    icon: {
        width: theme.spacing(7),
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        color: theme.palette.common.black
    },
}));

const iconMapper = {
    [PLATFORM.PSN]: <PSNIcon />,
    [PLATFORM.XBOX]: <XBoxIcon />,
    [PLATFORM.PC]: <PCIcon />
};

const PlatformButton = ({ onSelect, selected = PLATFORM.PSN }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleSelect = (platform) => {
        setAnchorEl(null);
        onSelect(platform);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'platform-popover' : undefined;

    const selectedIcon = iconMapper[selected] || <PSNIcon />;

    return (
        <div>
            <IconButton onClick={handleOpen} className={classes.icon}>
                { selectedIcon }
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <IconButton
                    onClick={() => handleSelect(PLATFORM.PSN)}
                    aria-label="ps"
                >
                    <PSNIcon />
                </IconButton>
                <IconButton
                    onClick={() => handleSelect(PLATFORM.XBOX)}
                    aria-label="xbox"
                >
                    <XBoxIcon/>
                </IconButton>
                <IconButton
                    onClick={() => handleSelect(PLATFORM.PC)}
                    aria-label="pc"
                >
                    <PCIcon />
                </IconButton>
            </Popover>
        </div>
    );
};

export default PlatformButton;