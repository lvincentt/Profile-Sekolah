import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "./components/Toast";

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
