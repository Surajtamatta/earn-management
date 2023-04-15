
import Home from './Pages/Main';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import {Routes,Route} from "react-router-dom";
import GlobalStyle from './style/GlobalStyle';
import Main from "./Pages/Main"

const App=()=> {
  return (
    <>
    <GlobalStyle/>
      <Routes>
          <Route path='./' element={<Home/>}/>
          <Route path='./Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Main/>
    </>
  );
}

export default App;
