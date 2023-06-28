import React,{useEffect, useState} from 'react'
import './About.css'


export default function About() {
const pageContent = [
  "   Im a warehouse worker turned full MERN stack developer! ", 
  "I've always had a passion for electronics and tech. ", 
  "As a child, I was always pulling my toys apart. ", 
  "I NEEDED to know how they ticked! ",
  "Fast forward about 20 years and I finally took the plunge to starting a part of the career I've always wanted. ",
  "   At present, I can create websites and databases but what I really want to do in the future is work on robots/electronics. ",
  "In the meantime I really enjoy creating intuitive, functional websites for people to enjoy. ",
  "Theres a real beauty in watching your code turn into something useful and beautiful that anyone anywhere can see and interact with. "
]

const skillSet = ["HTML","CSS","JavaScript","Python","React","MongoDB","SQL Database","GitHub","Postman"]

const htmlModalInfo = {
  title: "HTML",
  snippet:'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425'
}
const cssModalInfo = {
  title: "CSS",
  snippet:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png'
}
const javascriptModalInfo = {
  title: "JavaScript",
  snippet:'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433'
}
const pythonModalInfo = {
  title: "Python",
  snippet:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. It is often described as a "batteries included" language due to its comprehensive standard library.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png'
}
const reactModalInfo = {
  title: "React",
  snippet:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
}
const mongodbModalInfo = {
  title: "MongoDB (NoSQL)",
  snippet:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/640px-MongoDB_Logo.png'
}
const sqlModalInfo = {
  title: "SQL Database",
  snippet:'Structured Query Language (SQL)  S-Q-L, sometimes "sequel" (for historical reasons), is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',
  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png'
}
const gitModalInfo = {
  title: "GitHub",
  snippet:'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different computers).',
  icon:'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'
}
const postmanModalInfo = {
  title: "Postman",
  snippet:"Postman is an API Platform for developers to design, build, test and iterate their APIs.[1] As of February 2023, Postman reports having more than 25 million[2] registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.",
  icon:'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png'
}

const [typed, setTyped] = useState("")
const [typed2, setTyped2] = useState("")
const [skillsModal, setSkillsModal] =  useState({})
const skillThing = document.getElementById('skillsModalWindow') 


const selectionSpeed = (ms) => {
  return new Promise(
    resolve => {setTimeout(()=>{resolve()}, ms)}
    )}
const typingSpeed = (ms) => {
  return new Promise(
    resolve => {setTimeout(()=>{resolve()}, ms)}
    )}
    
    const typeItOut = async () => {
      let selection
      let selection2
      let sentence
      let sentence2
      let sentenceArr = []
      let sentenceArr2 = []
      for(let k = 0; k < pageContent.length; k++){
        selection = pageContent[k]
        for(let l = 0; l < selection.length || selection.length == undefined; l++){
          if(k <= 4){
            setTyped2(prev => prev = '')
            await typingSpeed(5)
            sentenceArr.push(selection[l])
            sentence = sentenceArr.toString().replace(/,/g,"")
            setTyped(prev => prev = sentence)
          } 
          if(k>=5){
            selection2 = pageContent[k]  
            await typingSpeed(5)
            sentenceArr2.push(selection2[l])
            sentence2 = sentenceArr2.toString().replace(/,/g,"")
            setTyped2(prev => prev = sentence2)
            }
        }
        await selectionSpeed(120)
        
      }
  }
  const openModal =(el, rec) => {
    skillThing.style.height = 'fit-content'
    skillThing.style.left = `${(rec.left + 22)}px`
    skillThing.style.top = `${(rec.top +55)}px`
    skillThing.style.display = 'inline'
    if(el == 'HTML'){
      setSkillsModal(prev => prev = htmlModalInfo)
    }else if(el == 'CSS'){
      setSkillsModal(prev => prev = cssModalInfo)
    }else if(el == 'JavaScript'){
      setSkillsModal(prev => prev = javascriptModalInfo)
    }else if(el == 'Python'){
      setSkillsModal(prev => prev = pythonModalInfo)
    }else if(el == 'React'){
      setSkillsModal(prev => prev = reactModalInfo)
    }else if(el == 'MongoDB'){
      setSkillsModal(prev => prev = mongodbModalInfo)
    }else if(el == 'SQL Database'){
      setSkillsModal(prev => prev = sqlModalInfo)
    }else if(el == 'GitHub'){
      setSkillsModal(prev => prev = gitModalInfo)
    }else if(el == 'Postman'){
      setSkillsModal(prev => prev = postmanModalInfo)
    }
  }
  
  const closeModal = async () => {
    skillThing.style.height = '0rem'
    skillThing.style.display = 'none'
    setSkillsModal(prev => prev = {})
  }
  
  function highLight(e){
    e.target.style.color = 'rgb(162, 218, 245)'
    const value = (e.target.innerHTML)
    const rect = e.target.getBoundingClientRect()
    openModal(value, rect)
  }
   function unHighLight(e){
    e.target.style.color = 'rgb(0, 0, 0)'
    closeModal()
  }

  useEffect(()=>{
    typeItOut()
  },[])

  return (
    <div className='aboutPageContainer' id = 'aboutPageContainer'>
    <h1
      className='content'>Who am I?
    </h1>
    <div className='aboutMeDiv'>
      <p className = 'aboutMe' id = 'aboutMe'>{typed}</p>
      <p className = 'aboutMe' id = 'aboutMe2 '>{typed2}</p>
    </div>
    <p className id = 'canUse'>I can use:</p>
      <div className='skillListWithModal'>
    {skillSet.map((element, index)=>{
      return(
        <div className = 'skillsListItem' id = {`skill${index+1}`} onMouseEnter={highLight} onMouseLeave={unHighLight}>{element}</div>
      )
    })
  }
      <div className='skillsModalWindow' id = 'skillsModalWindow' >
        <div className='skillsModalTitle' id = 'skillsModalTitle' >{skillsModal.title}</div>
        <div className='skillsModalSnippet' id = 'skillsModalSnippet' >{skillsModal.snippet}</div>
        <img height = '50px' src = {skillsModal.icon} className='skillsModalIcon' id = 'skillsModalIcon' ></img>
      </div>
      </div>
    </div>
  )
}
