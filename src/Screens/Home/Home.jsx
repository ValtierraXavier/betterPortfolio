import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home(){
    const [word, setWord] = useState('')
    let sentence;
    let speed = 50
    let spelledWord = ""
    const sentenceArr = [
        
        "Hi! My name is Xavier!", 
    "Welcome to my Portfolio!",
    "I hope you'll like it here.", 
    "Look at me! Im a dev!",
    "Well...Hello there gorgeous",
    "Hire me!!"
    
    ]
const intervalTiming = (sentenceArr.length) * 5500
    
    const spellSpeed = (ms)=>{
        return new Promise(
            resolve => {setTimeout(()=>{resolve('')}, ms)}
            )}
    const selectSpeed = (ms)=>{
        return new Promise(
            resolve => {setTimeout(()=>{resolve('')}, ms)}
            )}
    

            
            const spellIt = async (words) => {
                let spelledWordArr = []
                for(let i = 0; i < words.length; i++){
                    sentence = words[i]
                    for(let j = 0; j < sentence.length; j++){
                        await spellSpeed(speed)
                        spelledWordArr.push(sentence[j])
                        spelledWord = spelledWordArr.toString().replace(/,/g,"")
                        setWord(prev => prev = spelledWord )
                    }
                    await selectSpeed(2000)
                    spelledWordArr=[]
                }
            }
    
            useEffect(()=>{
        spellIt(sentenceArr)
        setInterval(()=> {spellIt(sentenceArr)},intervalTiming)
                },[])
                
   
    return(
        <div className='pageContainer' id ='homePageContainer'>
            <img src='https://i.imgur.com/sMWNJ4C.jpg' height={240} alt = 'self Portrait' className = 'iconDiv'></img>
            <div className='content' id='content1' >{word}</div>
        </div>
    );
}