import { createBrowserRouter, Navigate } from "react-router-dom";
import { APP_PATH } from "../const";
import {
  CompletedPage,
  HomePage,
  IncompletePage,
  NotFoundPage,
} from "../pages";
import { Layout } from "../Layout";

const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: APP_PATH.COMPLETED, element: <CompletedPage /> },
      { path: APP_PATH.INCOMPLETE, element: <IncompletePage /> },
    ],
  },
  { path: APP_PATH.ERROR, element: <NotFoundPage /> },
  { path: "*", element: <Navigate to={APP_PATH.ERROR} replace /> },
]);

export default AppRouter;
