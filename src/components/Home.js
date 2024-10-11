import React from 'react'
import "./Home.css";
import GroupImg from "../assets/img.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/game");    
    console.log("the function is called");
  }

  return (
        <div className='bg flex flex-col items-center justify-between h-[100vh] w-[100vw]'>
            <div className=''>
                <h1 className='font-bold mt-[50px] text-[50px] uppercase text-amber-200'>Rock Paper Scissors</h1>
            </div>
            <img src={GroupImg} height={900} width={900} loading='lazy' alt='RockPaperScissors' className='-translate-y-[40px]'/>
            <button onClick={clickHandler} className='border-none mb-[100px] uppercase shadow-lg py-2 px-3 bg-green-400 w-[350px] font-semibold text-xl rounded-lg text-yellow-50 btn'>
              Play
            </button>
        </div>
  )
}

export default Home