import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Forgot from './pages/Forgot'

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/login/forgot' element = {<Forgot/>}/>
        </Routes>
    </div>
  );
}

export default App;
