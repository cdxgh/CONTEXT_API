import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterProvider } from "./Context/Counter";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
