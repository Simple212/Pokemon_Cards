import {React,useState, CSSProperties} from 'react';
import ReactDOM from 'react-dom/client';
import { usePromiseTracker } from "react-promise-tracker";
import './index.css';
import App from "./App"
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'react-loader-spinner';


const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
     return (
      promiseInProgress && 
     <h2 className='b text-white tc'>Loading.....</h2>
    );  
   }

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
          <App />
          <LoadingIndicator/>
  </div>
)
