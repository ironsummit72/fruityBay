import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Header,Home,Footer,Underdevelopment} from './export';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Underdevelopment/>}/>
      <Route path='/contact' element={<Underdevelopment/>}/>
      <Route path='/github' element={<Underdevelopment/>}/>
   </Routes>
 
   </BrowserRouter>
  );
}

export default App;
