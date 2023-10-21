import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";

import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'



export const NavBar =  () =>{
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, []);

    function onUpdateActiveLink(value) {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": "" } >
            <Container>

                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"
                                  className={activeLink === 'home' ? 'active navbar-link':'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>

                        <Nav.Link href="#skill"
                                  className={activeLink === 'skill' ? 'active navbar-link':'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('skill')}>
                            Skills
                        </Nav.Link>

                        <Nav.Link href="#project"
                                  className={activeLink === 'project' ? 'active navbar-link':'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('project')}>
                            Projects
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="/#">
                               <img src={navIcon1} alt="gitlogo"/>
                            </a>
                            <a href="/#">
                               <img src={navIcon2} alt="gitlogo"/>
                            </a>
                            <a href="/#">
                               <img src={navIcon3} alt="gitlogo"/>
                            </a>
                            <button className="connect" onClick={()=>{
                                console.log('go to connect')
                            }}>
                            <span>
                                Let's connect!
                            </span>
                            </button>

                        </div>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
