import React from 'react';
import {render} from "react-dom";
import App from "./App";
import { CssBaseline } from '@material-ui/core';

render(
  <React.StrictMode>
    <CssBaseline/>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);
