import React from 'react'
import Navbar from './Components/Navbar';
import Mainbody from './Components/Mainbody';
import Footer from './Components/Footer';

const user="Utkarsh Savarn";

const App = () => {
  
  return (
  
    
    
    
  
   <div className=' flex-col  flex min-h-screen bg-black '>
    <Navbar name={user} />
    
    <main className=' flex-grow'>
      <Mainbody name={user}/>
    </main>
  
    <Footer/>
    
   </div>
    
    
  
  );
};

export default App
