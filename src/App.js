import react,{Component} from 'react';
import NavbarUpper from './Components/NavbarUpper/NavbarUpper';
import NavbarLower from './Components/NavbarLower/NavbarLower';
import Slide from './Components/Header/Slide/Slide';
import Footer from './Components/Footer/Footer';

//import { BrowserRouter,Switch,Route} from 'react-router-dom';
class App extends Component {
  render(){
    return(
          
<div>
      <NavbarUpper/>
      <NavbarLower/>
      <Slide/>
      <div >about</div>
      <div>about</div>
      <div>about</div>
      
      <div>about</div>
      <div>about</div>
      <div>about</div>
      
      <div>about</div>
      <div>about</div>
      <div>about</div>
      
      <div>about</div>
      <div>about</div>
      <div>about</div>
      <Footer/>
           
</div>

    );  
  }
}

export default App;
