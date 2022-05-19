import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Home/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Appointment/Dashboard/Dashboard";
import MyAppointment from "./Pages/Appointment/Dashboard/MyAppointment";
import MyReview from "./Pages/Appointment/Dashboard/MyReview";
import MyHistory from "./Pages/Appointment/Dashboard/MyHistory";
import Users from "./Pages/Appointment/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Appointment/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Appointment/Dashboard/ManageDoctors";

function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="myhistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path="addDoctor" element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
          <Route path="manageDoctor" element={
            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
