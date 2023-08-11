import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BasicInfo from './Components/AddProperty/Add-Basic-info/BasicInfo';
import PropertyDetails from './Components/AddProperty/Add-property-details/PropertyDetails';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<BasicInfo />} />
      <Route path='/propertydetails' element={<PropertyDetails />} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
