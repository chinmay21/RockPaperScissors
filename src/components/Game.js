import React, { useEffect, useCallback, useState } from 'react'
import "./Game.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaperImg from "../assets/paper.png";
import RockImg from "../assets/rock.png";
import ScissorsImg from "../assets/scissors.png";
import 'animate.css';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState();
  const [playerWinCount, setPlayerWinCount] = useState(0);
  const [computerWinCount, setComputerWinCount] = useState(0);
  const [userImg, setUserImg] = useState();
  const [computerImg, setComputerImg] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState();

  const choices = ['rock', 'paper', 'scissors']

  const randomChoice = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }, [choices]);

  const winner = useCallback((player, computer) => {
    if (player === computer) {
      return 'Draw!!';
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'You Win!';
    } else {
      return 'You Lose!!';
    }
  }, []);
  
  const clickHandler = useCallback((event) => {
    const playerSelection = event.currentTarget.value;
    setPlayerChoice(playerSelection);
    const computerSelection = randomChoice();
    setComputerChoice(computerSelection);
    const gameResult = (winner(playerSelection, computerSelection));
    setResult(gameResult); 
      if (gameResult === 'You Win!') {
        toast.success('YOU WIN!!');
        setPlayerWinCount(prevCount => prevCount + 1);
      } else if (gameResult === 'You Lose!!') {
        toast.error('YOU LOSE!!');
        setComputerWinCount(prevCount => prevCount + 1);
      } else if (gameResult === 'Draw!!') {
        toast('DRAW!!');
      }   
    setIsSelected(true);
    setAnimationTrigger(perv => !perv); 
  }, [randomChoice, winner]);

  useEffect(() => {
    console.log('Player Choice:', playerChoice);
    console.log('Computer Choice:', computerChoice);
    console.log('Result:', result);
    console.log('WinCount:', playerWinCount, computerWinCount);
  }, [playerChoice, computerChoice, result, playerWinCount, computerWinCount]);

  useEffect(() => {
    if(playerChoice === 'rock') {
      setUserImg(RockImg);
    }
    else if (playerChoice === 'scissors') {
      setUserImg(ScissorsImg);
    }
    else if (playerChoice === 'paper') {
      setUserImg(PaperImg);
    }
  },[playerChoice])

  useEffect(() => {
    if(computerChoice === 'rock') {
      setComputerImg(RockImg);
    }
    else if (computerChoice === 'scissors') {
      setComputerImg(ScissorsImg);
    }
    else if (computerChoice === 'paper') {
      setComputerImg(PaperImg);
    }
  },[computerChoice])

  return (
    <div className='background w-[100vw] h-[100vh] flex flex-col items-center justify-between relative'>
    <ToastContainer className='toast-conatiner'/>
      <div className='flex w-[50%] justify-between py-[30px]'>
       <div className='flex gap-x-1 text-4xl uppercase font-semibold text-red-700'>
          Player -
          <span>{playerWinCount}</span>
       </div> 
       <div className='flex gap-x-1 text-4xl uppercase font-semibold  text-red-700'>
          Computer -
          <span>{computerWinCount}</span>
       </div>
      </div>
      <div className='flex w-[35%] justify-between'>
        <span>{isSelected && <img key={`${userImg}-${animationTrigger}`} className='animate__animated animate__tada animate__fast' src={userImg} loading='lazy' alt='USER CHOICE' width={150} height={150}/>}</span>
        <span>{isSelected && <img key={`${computerImg}-${animationTrigger}`} className='animate__animated animate__tada animate__fast' src={computerImg} loading='lazy' alt='COMPUTER CHOICE' width={150} height={150}/>}</span>
      </div>

      <div className='flex w-[50%] h-[150px] justify-evenly items-center py-[52px] pb-[30px] bg-slate-600 mb-5 rounded-lg'>
        <button className='button' id='scissors' value="scissors" onClick={clickHandler}>
          <img src={ScissorsImg} height={100} width={100} loading='lazy' alt='Scissors'></img>
        </button>

        <button className='button' id='rock' value="rock" onClick={clickHandler}>
          <img src={RockImg} height={100} width={100} alt='Rock'></img>
        </button>

        <button className='button' id='paper' value="paper" onClick={clickHandler}>
        <img src={PaperImg} height={100} width={100} alt='Paper'></img>
        </button>
      </div>

    </div>
  )
}

export default Game