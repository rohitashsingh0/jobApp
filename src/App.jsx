import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AddJobs from "./pages/AddJobs";
import Jobs from "./pages/Jobs";
import ViewSingleJob from "./components/ViewSingleJob";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditJobs from "./pages/EditJobs";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<ViewSingleJob />} />
        <Route path="/add-job" element={<AddJobs />} />
        <Route path="/edit-job/:id" element={<EditJobs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
