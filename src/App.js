import Header from './Components/header.jsx';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
    <div className="title">
      <Header/>
    </div>
    <div className='content'>
       <Body/>
    </div>
    <div className='footer'>
       <Footer/>
    </div>
    
      
    </>
  );
}

export default App;
