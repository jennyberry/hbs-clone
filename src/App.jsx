
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, New, Clothes, Sale, Collections, Accessories} from './pages';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="hbs-clone/" element={ <Home/>
       } />
         <Route path="hbs-clone/new" element={ <New/>
       } />
        <Route path="hbs-clone/clothes" element={ <Clothes/>
       } />
        <Route path="hbs-clone/accessories" element={ <Accessories/>
       } />
        <Route path="hbs-clone/collections" element={ <Collections/>
       } />
        <Route path="hbs-clone/sale" element={ <Sale/>
       } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
