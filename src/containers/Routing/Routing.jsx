import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import Login from "../Login/Login.jsx";

const Routing = () => {
 return <>
    <Routes>
      <Route path="/create/event" element={<CreateEvent/>}/>
      <Route path="/" element={<EventsList />} />
      
       {/* Temporary */}
       <Route path="/login" element={<Login />} />
       <Route path="/reset" element={<ResetPassword />} />
    </Routes>
 </>
}

export default Routing;