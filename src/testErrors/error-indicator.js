import React from 'react';
// Components
import Typography from '@mui/material/Typography';

// Assets
import Warning from '../assets/images/warning.svg';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <Warning className="warning" />
    <Typography component="h4">BOOM!</Typography>
    <Typography component="p">Something has gone terribly wrong</Typography>
  </div>
);

export default ErrorIndicator;
