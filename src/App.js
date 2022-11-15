import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes";
import { useSelector } from "react-redux";

import { actionSelector } from "./redux/selectors/selector";
import { useEffect } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setDataTheme } from "./redux/actions/actions";
import themes from "./assets/theme";

const router = createBrowserRouter(publicRoutes);

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(actionSelector).themesReducer;

  useEffect(() => {
    const dataTheme = localStorage.getItem("theme");
    if (_.isNull(dataTheme)) {
      dispatch(
        setDataTheme({
          id: "zma",
          background: themes.zmaBg,
          img: themes.zma,
          title: "Zing Music Awards",
          class: "theme-dynamic-zma",
          datatheme: "blue",
        })
      );
    } else {
      dispatch(setDataTheme(JSON.parse(dataTheme)));
    }
  }, [dispatch]);

  return (
    <div
      data-theme={theme.theme.datatheme}
      className={theme.theme.class}
      style={{
        backgroundImage: `url(${theme.theme.background})`,
        backgroundSize: "1920px auto",
        backgroundRepeat: "repeat",
        backgroundColor: "var(--layout-bg)",
      }}
    >
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
