import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home(){

    const [word, setWord] = useState()
    const timeCheck = () =>{
        return new Date().getTime({timeStyle: 'short'})
    }
    const sentenceArr = [   
        `the time is ${timeCheck()}`,     
        "Hi! I'm Xavier", 
        "Welcome to my Portfolio!",
        "I hope you'll like it here.", 
        "This Portfolio makes API calls!",
        "Drop some feedback on a project.",
        "Lets get to work!"
    ]
    const intervalTiming = (sentenceArr.length) * 3400
    
    const spellSpeed = (ms)=>{
        return new Promise(
            resolve => {setTimeout(()=>{resolve('')}, ms)}
            )}
    const selectSpeed = (ms)=>{
        return new Promise(
            resolve => {setTimeout(()=>{resolve('')}, ms)}
            )}
    
            
            
    const spellIt = async () => {
        if(document.visibilityState==='visible'){
            for(let s of sentenceArr){
                let spelt = ''
                for(let c of s) {
                    await spellSpeed(50)
                    .then((res) => spelt += c)
                    .then((res) => setWord(prev => prev = spelt))
                    .catch(e => console.log(e))
                }
                await selectSpeed(2000)        
            }}else if(document.visibilityState==='hidden'){
                setWord(prev => prev = '')
                return
            }
    }
        
    useEffect(()=>{
        spellIt(sentenceArr)
        setInterval(()=> {spellIt(sentenceArr)},intervalTiming)
    },[])
                
   
    return(
        <div className='pageContainer' id ='homePageContainer'>
            <div className = 'blurbContainer' >
                <div className='typedBlurb' id='content1' >{word}</div>
            </div>
        </div>
    );
}