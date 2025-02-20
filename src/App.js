import {Routes, Route, Link} from 'react-router-dom'


import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";

function App() {


   return (
      <div style={{ padding: '100px' }}>

         <nav>
            <ul>

               <li>
                  <Link to="/">Home</Link>
               </li>

               <li>
                  <Link to="/news">News</Link>
               </li>

               <li>
                  <Link to="/contact">Contact</Link>
               </li>

             </ul>
         </nav>

         <Routes>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/news' element ={<NewsPage/>}/>
            <Route path='/contact' element ={<ContactPage/>}/>
         </Routes>


      </div>
   )
}

export default App;
