import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./MainOutlet";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserOutlet from "./components/UserOutlet";
import UserDashboard from "./components/UserDashboard";
import Chatscreen from "./components/Chatscreen";
import Profile from "./Pages/Profile";
import Resetpassword from "./Pages/Resetpassword";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainOutlet/>,
        errorElement:<>error page</>,
        children:[
            {index:true, element:<Login/>},
             {path:"login", element:<Login/>},
              {path:"signup", element:<Signup/>}
        ]
    },
    
    {
        path:"/user",
        element:<UserOutlet/>,
        children:[
            {index:true, element:<UserDashboard/>},
             {path:"chat", element:<Chatscreen/>},
             {path:"profile", element:<Profile/>},
            {path:"resetpassword", element:<Resetpassword/>}
        ]
    }
])
export default router
