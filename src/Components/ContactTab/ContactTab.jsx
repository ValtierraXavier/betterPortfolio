import React, {useState} from 'react'
import './ContactTab.css'
import Resume from '../../Assets/XavierVResume.pdf'

export default function ContactTab() {
    const[mailTo, setMailTo] = useState('mailto:xavier.valtierra@icloud.com')
    const[contactOpen, setContactOpen] = useState('close')
    const[contactForm, setContactForm] = useState({
        subject: '',
        body: ''
    })   
    const cont = document.getElementById('contactContainer')
    
    
    
    // moves the contact tab to the top of the page when at the top.
    const moveContactButton = ()=>{
        const contactButton = document.getElementById('contactContainer')
        // const contactButton = document.getElementById('contact')
        const scrollPos =  window.visualViewport
        if(scrollPos.pageTop >= 44 && scrollPos.width<900 && contactOpen === 'close'){
            contactButton.style.top = '5px'
        }else if(scrollPos.pageTop < 44 && scrollPos.width<900 && contactOpen === 'close'){
            contactButton.style.top = '45px'
        }
    }
    // detects scroll and executes function
    window.onscroll = ()=>{
        moveContactButton()
    }
    
    const openContact = () => {
        setContactOpen(prev => prev = 'open')
        if(window.innerWidth > 900){
            cont.style.left = '67.5dvw'
        }else{
            cont.style.left = '1dvw'
            cont.style.top = '3dvh'
            cont.style.height = '40dvh'
            if(window.innerHeight <= 400){
                cont.style.height = '98dvh'
                cont.style.top = '.5dvh'
            }else{
                cont.style.top = '6dvh'
            }
        }
    }
    const closeContact = () => {
        setContactOpen(prev => prev = 'close')
        if(window.innerWidth > 900){
            cont.style.left = '91dvw'
        }else{
            cont.style.top = '45px'
            if(window.innerHeight <= 400){
                cont.style.height = '2rem'
            }else{
                cont.style.height = '2rem'
                cont.style.top = '6dvh'
            }
        }
    }

    // //encode url for mailto email handling
    const sendEmail =()=>{
        const urlEncodedBody = contactForm.body.replaceAll(' ', '%20')
        setMailTo(prev => prev = `mailto:xavier.valtierra@icloud.com?subject=${contactForm.subject}&body=${urlEncodedBody}`)
        handleClearInputs()
    };
    // clear inputs after submit.
    const handleClearInputs =()=>{
        setContactForm(prev => prev = {
            subject: '',
            body:''
        })
    }
    //closes the contact div when there is a click outside its window. 
    document.addEventListener('click',(e) => {
        if(cont && contactOpen === 'open'){
            const formDim = cont.getBoundingClientRect()
            if(e.clientX > formDim.right || e.clientX < formDim.left ||e.clientY > formDim.bottom || e.clientY < formDim.top){
                closeContact()
                handleClearInputs()
            }
        }
    })
    //handles changes in form. updates state to keep changes
    const handleChange = (e) => {
        e.preventDefault()
        let formInput = {
            ...contactForm,
            [e.target.name]: e.target.value
        }
        setContactForm(prev => prev = formInput)
    }
    
    return (  
        <div className='contactContainer' id='contactContainer'>
        
        {contactOpen === 'close'?
            <div className='button' id='openbutton' onClick={openContact}>Contact Me</div>
            :
            <div className = 'area' id = 'formDiv'> 
                <div id='closebutton' onClick={closeContact}>Close</div>
                <form action = {mailTo}  method = 'get' encType = 'plain/text' className = 'form' >
                    <h3 className = 'contactFormTitle' id ='label form'>Send me an email</h3>
                    <label id = 'label subject' className = 'emailFormLabels'>Subject</label>
                    <input name = 'subject' onChange = {handleChange} value ={contactForm.subject} className = 'emailInput' id = 'subject' type='text'></input>
                    <label id = 'body label' className = 'emailFormLabels'>Text</label>
                    <textarea name = 'body' onChange = {handleChange} value = {contactForm.body} className = 'emailInput' id = 'body' type = 'text'></textarea>
                    <div className='formButtonsDiv'>
                        <a className='formButtons' id='send link' onClick = {sendEmail} href = {`${mailTo}`} >Send Email!</a>
                        <a className='formButtons'href = {Resume} target='_blank' rel = 'noreferrer' id='resume link'>Show Resume</a>
                    </div>
                </form>
            </div>
        }
        </div>
    )
}