import React from 'react';
import {render} from "react-dom";
import App from "./App";
import PostProvider from "./PostProvider";

render(
  <React.StrictMode>
      <PostProvider>
        <App />
      </PostProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
