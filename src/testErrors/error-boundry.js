import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import ErrorIndicator from './error-indicator';

class ErrorBoudry extends React.Component {
  constructor(props) {
     super(props);
     this.state = { hasError: false };
   }
static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
     // You can also log the error to an error reporting service
     this.setState({
           error: error,
           errorInfo: errorInfo
         })
   }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorIndicator />;

    return children;
  }
}

ErrorBoudry.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoudry;
