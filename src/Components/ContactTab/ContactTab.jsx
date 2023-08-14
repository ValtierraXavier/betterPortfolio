import React, {useEffect, useState} from 'react'
import './ContactTab.css'
import Resume from '../../Assets/XaviersResume.pdf'

export default function ContactTab() {
    const[mailTo, setMailTo] = useState('mailto:xavier.valtierra@icloud.com')
    const[emailBody, setEmailBody] = useState('')
    const[emailSubject, setEmailSubject] = useState('')
    const[buttonToggle, setButtonToggle] = useState('Contact Me')
    
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
    
    
  return (
    
    <div className = 'contactTabContainer'>
        
        {/* <div className = 'contactButton' id = 'contactButton'>Contact Me</div>   */}
        <label className = 'contactButton' id = "contactButton" for='toggleContact' onClick={toggleButtonText}>{buttonToggle}</label>  
        <input type='checkbox' id = 'toggleContact'></input>
        <div className = 'contactButton' id = 'formDiv'>
            <h3 className = 'contactFormTitle'>Send me an Email</h3>
            <form action={mailTo}  method = 'get' encType='plain/text' className = 'contactForm'>
                <p id = 'subjectFormLabel' className = 'emailFormLabels'>Subject</p>
                <input name='subject' onChange={(e)=> setEmailSubject(prev => prev = e.target.value)} value ={emailSubject} className = 'emailInput' id = 'subjectInput' type='text'></input>
                <p id = 'bodyFormLabel' className = 'emailFormLabels'>Text</p>
                <textarea name ='body' onChange={(e)=> setEmailBody(prev => prev = e.target.value)} value ={emailBody} className = 'emailInput' id = 'bodyInput' type='text'></textarea>
                <a className='mailToLink' onClick={handleUrlEncode} href = {`${mailTo}`} >Send Email!</a>
            </form>
            <a href = {Resume} target='_blank' rel = 'noreferrer' className='resumeButton'>Show Resume</a>
        </div>
    </div>
  )
}