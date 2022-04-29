import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PCIcon from '../../assets/images/PCIcon';
import PSNIcon from '../../assets/images/PSNIcon';
import XBoxIcon from '../../assets/images/XBoxIcon';
import { PLATFORM } from '../../utils/consts';
import './PlatformButton.css'


const gamingPlatformList = [{
  id: 0,
  name: 'Xbox',

}, {
  id: 1,
  name: 'PC',

}, {
  id: 2,
  name: 'PSN',

}];


