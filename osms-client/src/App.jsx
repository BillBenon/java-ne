import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
      <ToastContainer />
    </div>
  );
}

export default App;
