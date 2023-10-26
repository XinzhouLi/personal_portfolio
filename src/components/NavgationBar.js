import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";

import logo from '../assets/img/logo.svg'
import linkedin_logo from '../assets/img/linkedin_logo.svg'
import githubLogo from '../assets/img/github_logo.svg'




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

                        <Nav.Link href="#skills"
                                  className={activeLink === 'skill' ? 'active navbar-link':'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('skill')}>
                            Skills
                        </Nav.Link>

                        <Nav.Link href="#projects"
                                  className={activeLink === 'project' ? 'active navbar-link':'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('project')}>
                            Projects
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/xinzhou-li-34040522b/" target="_blank">
                               <img src={linkedin_logo} alt="linkedinlogo"/>
                            </a>
                            <a href="https://github.com/XinzhouLi" target="_blank">
                               <img src={githubLogo} alt="githublogo"/>
                            </a>
                            <button className="connect" onClick={()=>{window.location.href='#connect'}}>
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
