import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import {useEffect, useState} from "react";
export const Banner = () =>  {
    const toRotate = [" Deep Learning Developer", " Full-stack Developer"]
    let [wordIndex,setWordIndex] = useState(0)
    let [charIndex, setCharIndex] = useState(1)
    const [isTyping, setIsTyping] = useState(true)
    const [text, setText] = useState('')
    const [typingDelta, setTypingDelta]=useState(0)
    const period = 2000

    useEffect(
        () =>{
            let fullText = toRotate[wordIndex]
            let updateText = ''
            if (isTyping){
                setTypingDelta(300 - Math.random()*100)
                updateText = fullText.substring(0, charIndex)
                setCharIndex(charIndex + 1)
            }
            else if(!isTyping){
                setTypingDelta(prevState => prevState/2)
                setCharIndex(charIndex - 1)
                updateText = fullText.substring(0,charIndex)
            }
            const timeOut = setTimeout(
                ()=>{
                    setText(updateText)
                },typingDelta
            );

            if(charIndex === fullText.length && isTyping){
                setIsTyping(false)
                setCharIndex(charIndex - 1)
            }
            else if(charIndex === 0 && !isTyping){
                setWordIndex((wordIndex + 1)%toRotate.length)
                setCharIndex(1)
                setIsTyping(true)
            }
            console.log(updateText, charIndex, wordIndex, isTyping, typingDelta)



        return()=>{
            clearTimeout(timeOut)
        }

        },[text]
    )

    return(
        <section className="banner" id="home">
            <Container>
               <Row className="align-items-center">
                   <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                       <h1>
                           Hi am Xinzhou Li, <br/>

                           <span className='wrap'>{text}</span>
                       </h1>
                       <p>
                           Introduction about me
                       </p>
                       <button >
                           Let's connect!
                           <ArrowRightCircle/>
                       </button>
                   </Col>
                   <Col xs={12} md={6} xl={5}>
                       <img src={headerImg} alt="Header"/>
                   </Col>
               </Row>
            </Container>


        </section>




    )
}