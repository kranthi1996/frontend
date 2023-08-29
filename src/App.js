import './App.css';
import Header from './header/index';
import Search from './search/index';
import PropertySection from "./property_section/index";
import FooterCom from './footer/index';
function App() {
  return (
    <div className="App">
       <Header/> 
       <Search/>
       <PropertySection/>
       <FooterCom/>
    </div>
  );
}

export default App;
