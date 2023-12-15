import './App.css';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import AnimateCard from './components/AnimateCard';
import Cards from './components/Cards';
import FooterCard from './components/FooterCard';
import Footer from './components/Footer';
import LastFooter from './components/LastFooter';
function App() {
  
  return (
    <div className='bg-[#F8F7F4]'>
    
    <Header/>
    <Main/>
    <AnimateCard/>
    <Cards/>
    <div className='bg-[#FFDA79] py-[100px]'>
    <div className='text-center'>
      <h1 className='text-6xl font-serif'>Find your next</h1>
      <h1 className='text-6xl font-serif pb-5'>designer today</h1>
      <p className='text-xl pb-2'>The world’s leading brands use Dribbble to hire creative talent.</p>
      <p className='text-xl pb-2'> Browse millions of top-rated portfolios to find your perfect</p>
      <p className='text-xl'>creative match.</p>
      </div>
      <div className='flex justify-center items-center space-x-4'>
      <button className="bg-[#0D0C22] text-white px-7 py-4 text-[15px] rounded-full font-semibold hover:bg-[#565564] mt-10 mb-10 ">
        Get starting now
      </button>

     <button className="bg-white text-black px-7 py-4 text-[15px] rounded-full font-semibold hover:text-[#565564] mt-10 mb-10 ">
        Learn about hiring
      </button>
      </div>

      <div className='flex justify-center items-center text-xl'>

        <h1 className='mr-1'>Are you a designer?</h1>
        <a href="/" className='underline'>Join Dribble</a>
      </div>
    </div>
    <FooterCard/>
    <Footer/>
    <LastFooter/>
    </div>
  );
}

export default App;
