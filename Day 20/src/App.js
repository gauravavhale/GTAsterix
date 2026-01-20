import { Toaster } from "react-hot-toast";
import AppRoutes from "./app/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
