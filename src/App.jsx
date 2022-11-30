
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, New, Bottoms, Sale, Collections, Accessories,Tops} from './pages';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="hbs-clone/" element={ <Home/>
       } />
         <Route path="hbs-clone/new" element={ <New/>
       } />
        <Route path="hbs-clone/tops" element={ <Tops/>
       } />
        <Route path="hbs-clone/bottoms" element={ <Bottoms/>
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
