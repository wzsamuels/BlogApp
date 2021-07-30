import React from 'react';
import {render} from "react-dom";
import App from "./App";
import PostProvider from "./PostProvider";
import {CssBaseline} from "@material-ui/core";

render(
  <React.StrictMode>
    <CssBaseline />
      <PostProvider>
        <App />
      </PostProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
