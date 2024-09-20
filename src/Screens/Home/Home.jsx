import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home(){

    const [word, setWord] = useState()
    let sentence = '';
    let speed = 50
    const sentenceArr = [        
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
    
            
            
    const spellIt = async (sentArr) => {
        
        if(document.visibilityState==='visible'){
            for(let i= 0; i<sentArr.length ;i++){
            sentence = sentArr[i].split("")
            let spelt = ''
            for(let j=0;j <sentence.length; j++) {
                const letter = sentence[j]
                await spellSpeed(speed)
                spelt += letter
                setWord(prev => prev = spelt)
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