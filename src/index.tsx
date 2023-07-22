import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/route";
import { RouterProvider } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

// Socket IO
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";
export const socket = socketIOClient(ENDPOINT);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
