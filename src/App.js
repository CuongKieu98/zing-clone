import "./App.scss";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { publicRoutes } from "./routes";

const router = createBrowserRouter(publicRoutes);

function App() {
  return (
    <div data-theme="blue" className="theme-dynamic-zma">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
