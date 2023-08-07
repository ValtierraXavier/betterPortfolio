import React, {useEffect, useState} from 'react'
import './ContactTab.css'
import { render } from '@testing-library/react'


export default function ContactTab() {
    const[emailBody, setEmailBody] = useState('')
    const[mailTo, setMailTo] = useState('mailto:xavier.valtierra@icloud.com')
    let urlEncodedBody
    const[emailSubject, setEmailSubject] = useState('')
    console.log(mailTo)
    
    const handleUrlEncode =()=>{
        const bodyArr = [...emailBody]
        const halfEncoded = bodyArr.toString().replace(/ /g, '%20')
        urlEncodedBody = halfEncoded.replace(/,/g, '')
        setMailTo(prev =>prev = `mailto:xavier.valtierra@icloud.com?subject=${emailSubject}&body=${urlEncodedBody}`)
    };

    
    
    
  return (
    
    <div className = 'contactTabContainer'>
    
        <div className = 'contactButton' id = 'contactDiv'>Contact Me</div>    
        <div className = 'contactButton' id = 'formDiv'>
            <h3 className = 'contactFormTitle'>Send me an Email</h3>
            <form action={mailTo}  method = 'get' encType='plain/text' className = 'contactForm'>
                <p id = 'subjectFormLabel' className = 'emailFormLabels'>Subject</p>
                <input name='subject' onChange={(e)=> setEmailSubject(prev => prev = e.target.value)} className = 'emailInput' id = 'subjectInput' type='text'></input>
                <p id = 'bodyFormLabel' className = 'emailFormLabels'>Text</p>
                <textarea name ='body' onChange={(e)=> setEmailBody(prev => prev = e.target.value)} className = 'emailInput' id = 'bodyInput' type='text'></textarea>
                <a className='mailToLink' onClick={handleUrlEncode} href = {`${mailTo}`} >Send Email!</a>
            </form>
        </div>
    </div>
  )
}
