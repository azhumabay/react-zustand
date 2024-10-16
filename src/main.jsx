import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import ThemeProvider from "./hoc/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={AppRouter} />
  </ThemeProvider>
);
