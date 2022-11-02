import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes";

const router = createBrowserRouter(publicRoutes);

function App() {
  return (
    <div data-theme="blue" className="theme-dynamic-zma">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      ></ToastContainer>
    </div>
  );
}

export default App;
