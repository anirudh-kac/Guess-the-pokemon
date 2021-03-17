import React , {useState} from 'react';

import axios from "axios";
import useToggle from "./hooks/useToggle";


function Game() {
    
    const [score,setScore] = useState(0);
    const [submitted,toggleSubmitted] = useToggle(false);
    const [start , toggleStart]  = useToggle(true);
    const [display , toggleDisplay] = useToggle(false);
    const [data, setData] = useState({});
    const [input , setInput] = useState("");
    const [displayName , setDisplayName] = useState("Pokemon");

    const getRandom =()=>{
        const rand = Math.floor(Math.random()*500);
        const url = `https://pokeapi.co/api/v2/pokemon/${rand}/`
        const res = axios.get(url).then(res => {
            const data = {
                image : res.data.sprites.front_default,
                name : res.data.name
            }
            console.log(data);
            setData(data);
        })
    }

    const initialize = ()=>{
        getRandom();
        toggleStart();
        setDisplayName("Pokemon");
    }

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = ()=>{
        toggleSubmitted();
        const enteredValue = input;
        setDisplayName(data.name);
        toggleDisplay();
        if(input === data.name){
            setScore(score+1);
        }else{
            setScore(0);
        }
        setInput("");
    }

    const nextPoke = () =>{
        toggleDisplay();
        toggleSubmitted();
        setInput("");
        getRandom();
        setDisplayName("Pokemon");
    }

    return (
        <div className = "Game">
            <h1 className = "Game-title">Guess The Pokemon</h1>
            <div className = "Game-scores">
                <h2 className = "Game-score">Total Score : {score}</h2>


                {
                    start ? <button onClick = {initialize}>Start</button> :

                    <>
                        <img src = {data.image} alt = "pokemon" className = {display ? "img" : "img blurred"}/>
                        <h3>{displayName}</h3>

                        
                        {submitted ? <button onClick = {nextPoke}>Next</button>:
                            <>
                            <input value = {input} type = "text" onChange = {handleChange}/> <button onClick = {handleSubmit} >Submit </button>
                            </>
                        }

                        {/* <button onClick = {getRandom}>Echo</button> */}
                    </>
                }
                
            </div>
        </div>
    )
}

export default Game;
