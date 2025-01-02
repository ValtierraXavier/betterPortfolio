import React,{useEffect, useState} from 'react'
import './About.css'


export default function About() {
//content to 'type out' line by line. 
// work on this statement. make it more consice.
const pageContent = [
  "I am a full (MERN) stack developer looking for front/backend roles. ",
  "Check out my projects below!"
]

//skillset dataset for the skillsModal. 
const skillSet =
                [{
                  title: "HTML",
                  snippet:'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425'
                },
                {
                  title: "CSS",
                  snippet:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png'
                },
                {
                  title: "JavaScript",
                  snippet:'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433'
                },
                {
                  title: "Python",
                  snippet:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. It is often described as a "batteries included" language due to its comprehensive standard library.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png'
                },
                {
                  title: "React",
                  snippet:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
                },
                {
                  title: "MongoDB (NoSQL)",
                  snippet:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/640px-MongoDB_Logo.png'
                },
                {
                  title: "SQL Database",
                  snippet:'Structured Query Language (SQL)  S-Q-L, sometimes "sequel" (for historical reasons), is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png'
                },
                {
                  title: "GitHub",
                  snippet:'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different computers).',
                  icon:'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'
                },
                {
                  title: "Postman",
                  snippet:"Postman is an API Platform for developers to design, build, test and iterate their APIs.[1] As of February 2023, Postman reports having more than 25 million[2] registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.",
                  icon:'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png'
                }]

const [typed, setTyped] = useState("")
const [skillsModal, setSkillsModal] =  useState({})
const skillThing = document.getElementById('skillsModalWindow') 
const whoAmI = [..."Who Am I"]
const techSkills = [..."Technical Skills"]

//sets the timing for the snetence selection using a promise
const selectionSpeed = (ms) => {
  return new Promise(
    resolve => {setTimeout(()=>{resolve()}, ms)}
   )}
    
//sets the timing for speed of the typing using a promise
const typingSpeed = (ms) => {
  return new Promise(
    resolve1 => {setTimeout(()=>{resolve1()}, ms)}
  )}

//timing for the fake cursor to blink.
const blinker = (ms) => {
  return new Promise(
    resolve1 => {setTimeout(()=>{resolve1()}, ms)}
  )}

  // selects a sentence from pageContent, splits it, then iterates through each character. Displays as a typing effect.     
  const typeItOut = async () => {
  let typt =''
  // iterates through pageContent and sets selection to the current sentence
  for(let c of pageContent){
    // iterates through each character of the selected sentence and appends it to typt to create the typing effect.
    for(let s of c){
        await typingSpeed(10)
        .then(typt += s)
        .then(setTyped(prev => prev = typt))
        .catch(e => console.log(e))    
    }
    await selectionSpeed(120)    
  }
}

//Opens SkillSetModal with referenced data triggered by mouseEnter
const openModal =(el, rec) => {
  //used to find outter dimensions of element to render skills modal within viewport (WIP)
  // const pageCont = document.getElementById('aboutPageContainer').getBoundingClientRect()
  // const modalRect = skillThing.getBoundingClientRect()
  skillThing.style.display = 'inline'
  skillThing.style.height = 'fit-content'
  skillThing.style.left = `${(rec.left -37)}px`
  skillThing.style.top = `${(rec.bottom)}px`
  //Finds an object by title and sets the modal data to that object.
  let modalInfo = skillSet.find((mI)=> mI.title === el) 
  setSkillsModal(prev => prev = modalInfo)
}
// closes the skillset modal triggered by mouseLeave event
const closeModal = async () => {
  skillThing.style.display = 'none'
  setSkillsModal(prev => prev = {})
}

// highlights the skill then sets the paramters for opening the modal directly under the skill.
function highLight(e){
  const value = (e.target.innerHTML)
  const rect = e.target.getBoundingClientRect()
  openModal(value, rect)
}
//closes the modal
  function unHighLight(e){
  closeModal()
}


const [showFakeCursor, setShowFakeCursor] = useState(0)
const blinkOn = async()=>{
  setShowFakeCursor(prev => prev = 1)
  try{
    await blinker(1000)
    blinkOff()
  }catch(error){console.log(error)}
}
const blinkOff = async()=>{
  setShowFakeCursor(prev => prev = 0)
  try{
    await blinker(1000)
    blinkOn()
  }catch(error){console.log(error)}

}  

useEffect(()=>{
  typeItOut()
  blinkOff()
},[])
 

  

  return (
    <div className= 'aboutPageContainer' id = 'aboutPageContainer'>
      <div className ='aboutContentContainer'>
      {whoAmI.map((element, index)=> {
        return(
            <h1 key={`wai${index}`} data-index = {index} className= 'whoami' id = 'aboutContent'>
              {element}
            </h1>
        )
      })
    }
    </div>

    <div className= 'aboutMeDiv'>
      <p className = 'aboutMe' id = 'aboutMe'>{`${typed}${showFakeCursor?'|':''}`}</p>
    </div>
    <div className = 'techSkillsContainer' >
      {techSkills.map((element, index)=>{
        return(
          <h1 key = {`cu${index}`} data-index = {index} className = 'techs' id = {`canUse${index}`}>{element}</h1>
        )
      })}
    </div>
      <div className='skillListWithModal'>
        {skillSet.map((element, index)=>{
          return(
            <div key = {`sLMC${index}`} className = 'skillsListMapContainer'>
              <div key = {`sLI${index}`} className = 'skillsListItem'  id = 'skillsList' onMouseEnter={highLight} onMouseLeave={unHighLight}>{element.title}</div>
                <div key = {`sMW${index}`} className='skillsModalWindow' id = 'skillsModalWindow' >
                  <div key = {`sMT${index}`} className='skillsModalTitle' id = 'skillsModalTitle' >{skillsModal.title}</div>
                  <div key = {`sMS${index}`} className='skillsModalSnippet' id = 'skillsModalSnippet' >{skillsModal.snippet}</div>
                  <img key = {`sMI${index}`} height = '50px' src = {skillsModal.icon} className='skillsModalIcon' id = 'skillsModalIcon' ></img>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )}