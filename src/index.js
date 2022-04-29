
import React from 'react';
//routing
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//reducx
import { Provider } from 'react-redux';
import { store } from './Redux/configureStore';
//pages
import App from './App';
//styling
import './styles/index.css';
//context API
import { AuthContextProvider } from './context/AuthContext'
import reportWebVitals from './reportWebVitals';





ReactDOM.render(
  <Provider store={store}>
  <AuthContextProvider>
        <App />
   </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);

TraceKit.report.subscribe(function yourLogger(errorReport) {
  //send via ajax to server, or use console.error in development
  //to get you started see: https://gist.github.com/4491219
});

try {
  /*
   * your application code here
   *
   */
  throw new Error('oops');
} catch (e) {
  TraceKit.report(e); //error with stack trace gets normalized and sent to subscriber
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();