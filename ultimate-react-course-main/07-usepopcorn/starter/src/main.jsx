import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./starRating";

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <StarRating maxRating={10} color="yellow" size={20} className="star" />
    <App />
  </React.StrictMode>
);
