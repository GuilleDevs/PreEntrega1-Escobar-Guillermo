import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavbarComponents/NavbarComponent';
import './index.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  return <div>
    <NavBarComponent />
    <ItemListContainer greeting="Bienvenido a mi e-commerce"/>
  </div>
}

export default App
