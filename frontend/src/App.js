import {Route, Routes} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Register from './pages/Register'


function App() {

  
  const [token, setToken] = useState();
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      setToken(sessionStorage.getItem('token'))
    }
  },[])
  
  if(!token){
    return <Login/>
  }else{
    return (
      <div>
        <Header/>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/profile" element = {<Profile/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/login/forgot' element = {<Forgot/>}/>
            <Route path = '/register' element = {<Register/>}/>
          </Routes>
      </div>
    );
  }

  

  // setToken(previousState => {
  //   return{...previousState, token: }
  // })


  // if(!token){
  //   return <Login/>
  // }

  // return (
  //   <div>
  //     <Header/>
  //       <Routes>
  //         <Route path = "/" element = {<Home/>}/>
  //         <Route path = "/profile" element = {<Profile/>}/>
  //         <Route path = '/login' element = {<Login/>}/>
  //         <Route path = '/login/forgot' element = {<Forgot/>}/>
  //         <Route path = '/register' element = {<Register/>}/>
  //       </Routes>
  //   </div>
  // );
}

export default App;
