import React, {useState} from 'react'
import './ContactTab.css'
import Resume from '../../Assets/XaviersResume2023.pdf'

export default function ContactTab() {
    const[mailTo, setMailTo] = useState('mailto:xavier.valtierra@icloud.com')
    const[emailBody, setEmailBody] = useState('')
    const[emailSubject, setEmailSubject] = useState('')
    const[buttonToggle, setButtonToggle] = useState('Contact Me')
    const[domLoaded, setDomLoaded]=useState(false)
    
    window.onload = ()=>{setDomLoaded(prev => prev = true)}
    
    const handleUrlEncode =()=>{
        const urlEncodedBody = emailBody.replaceAll(' ', '%20')
        setMailTo(prev=>prev = `mailto:xavier.valtierra@icloud.com?subject=${emailSubject}&body=${urlEncodedBody}`)
        handleClearInputs()
    };

    const handleClearInputs =()=>{
        setEmailSubject(prev => prev = '')
        setEmailBody(prev => prev = '')
    }
    
    const toggleButtonText = ()=>{
        if(buttonToggle === 'Contact Me'){
            setButtonToggle(prev=>prev='Close')
        } else if(buttonToggle === 'Close') {
            setButtonToggle(prev=>prev='Contact Me')
        }
    }
    

    const moveContactButton =()=>{
        const scrollPos = window.visualViewport
        const contactButton = document.getElementById('contactButton')
        if(scrollPos.pageTop >= 44 && scrollPos.width < 601){
            contactButton.style.top = '5px'
        }else if(scrollPos.pageTop < 44 && scrollPos.width < 601){
            contactButton.style.top = '45px'
        }
    }        
    if(domLoaded===true){
        moveContactButton()
    }

    
  return (
    
    <div className = 'contactTabContainer'> 
        <label className = 'contactButton' id = "contactButton" htmlFor='toggleContact' onClick={toggleButtonText}>{buttonToggle}</label>  
        <input type='checkbox' id = 'toggleContact'></input>
        <div className = 'contactButton' id = 'formDiv'>
            <h4 className = 'contactFormTitle'>Send me an Email</h4>
            <form action={mailTo}  method = 'get' encType='plain/text' className = 'contactForm'>
                <p id = 'subjectFormLabel' className = 'emailFormLabels'>Subject</p>
                <input name='subject' onChange={(e)=> setEmailSubject(prev => prev = e.target.value)} value ={emailSubject} className = 'emailInput' id = 'subjectInput' type='text'></input>
                <p id = 'bodyFormLabel' className = 'emailFormLabels'>Text</p>
                <textarea name ='body' onChange={(e)=> setEmailBody(prev => prev = e.target.value)} value ={emailBody} className = 'emailInput' id = 'bodyInput' type='text'></textarea>
                <a className='mailToLink' onClick={handleUrlEncode} href = {`${mailTo}`} >Send Email!</a>
                <a href = {Resume} target='_blank' rel = 'noreferrer' className='resumeButton'>Show Resume</a>
            </form>
        </div>
    </div>
  )
}
