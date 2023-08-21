import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login , logout, selectUser} from "./features/userSlice";
import Profile from "./components/Profile";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    //Findes out whether the user is signed in 
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        //user logged in
        dispatch(login({     //store in redux user 
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else
      {
        //user logged out
        dispatch(logout());
      }
    })
    //to  cleanup
    return unsubscribe;
  },[dispatch])
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/" element={<Login />} />
            
            ) : (
            <><Route path="/" element={<HomeScreen />} /><Route path="/profile" element={<Profile />} /></>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
