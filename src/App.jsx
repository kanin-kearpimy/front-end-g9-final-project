import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddActivity from "./components/feat-addActivity/AddActivity";
import EditActivity from "./components/feat-editActivity/EditActivity";
import PageNotFound from "./components/feat-error/PageNotFound";
import ChangePasswordAccount from "./components/feat-login-register/ChangePasswordAccount";
import ForgetPassword from "./components/feat-login-register/ForgetPassword";
import Register from "./components/feat-login-register/Register";
import SubmitEmail from "./components/feat-login-register/SubmitEmail";
import SuccessPassWord from "./components/feat-login-register/SuccessPassWord";
import Welcome from "./components/feat-login-register/Welcome";
import WelcomeToApplication from "./components/feat-login-register/WelcomeToApplication";
import Pet from "./components/feat-pet/Pet";
import AllActivity from "./components/feat-activity/AllActivity";
import ChangeEmail from "./components/feat-profile/ChangeEmail";
import ChangePasswordProfile from "./components/feat-profile/ChangePasswordProfile";
import Contact from "./components/feat-profile/Contact";
import EditProfile from "./components/feat-profile/EditProfile";
import Privacy from "./components/feat-profile/Privacy";
import Profile from "./components/feat-profile/Profile";
import Notification from "./components/feat-profile/Notification";
import Login from "./components/feat-login-register/Login";
import Logout from "./components/feat-login-register/Logout";
import Security from "./components/feat-profile/Security";
import Calendar from "./components/feat-calendar/Calendar";
import Home from "./components/feat-dashboard/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/logout", element: <Logout /> },
    { path: "/change-password-account", element: <ChangePasswordAccount /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/submit-email", element: <SubmitEmail /> },
    { path: "/success-password", element: <SuccessPassWord /> },
    { path: "/welcome-to-application", element: <WelcomeToApplication /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/pet", element: <Pet /> },
    { path: "/profile", element: <Profile /> },
    { path: "/edit-profile", element: <EditProfile /> },
    { path: "/notification", element: <Notification /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/security", element: <Security /> },
    { path: "/changeemail", element: <ChangeEmail /> },
    { path: "/changepassword", element: <ChangePasswordProfile /> },
    { path: "/contact", element: <Contact /> },
    { path: "/all-activity", element: <AllActivity /> },
    { path: "/add-activity", element: <AddActivity /> },
    { path: "/edit-activity/:activityId", element: <EditActivity /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
