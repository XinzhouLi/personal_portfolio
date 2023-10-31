import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import linkedin_logo from '../assets/img/linkedin_logo.svg'
import githubLogo from '../assets/img/github_logo.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-content-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-center">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/xinzhou-li-34040522b/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin_logo} alt="linkedinlogo"/>
                            </a>
                            <a href="https://github.com/XinzhouLi" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="githublogo"/>
                            </a>
                            <p>CopyRight 2023. All Right Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}