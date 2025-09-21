
//import ProductCard from "./ProductCard.jsx";
 import NavBar from "./NavBar.jsx"
 import Home from "./Home.jsx"
 import {Routes,Route} from 'react-router-dom'
 import SignUp from "./SignUp.jsx"
 import SignIn from "./SignIn.jsx"
function App() {
 

  return (
    
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
      
      

    
  )
}

export default App
