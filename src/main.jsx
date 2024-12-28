import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TitleColorContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </StrictMode>
);
