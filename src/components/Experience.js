import Container from "react-bootstrap/Container";
import {Col, Row, Tab} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import Nav from "react-bootstrap/Nav";
import 'animate.css'
import {ExperienceItems} from "./ExperienceItems";
import projImg1 from "../assets/img/project-img1.png";
import {ProjectCards} from "./ProjectCards";
export const Experience = () => {


    const experiences = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ]
    const education = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ]
    const skills = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ]

    return (
        <section className="experience" id="experience">
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column align-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Skills</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    {
                                        experiences.map((project, index) => {
                                                return (
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}/>
                                                )
                                            }
                                        )
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">First tab content</Tab.Pane>
                                <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>

            <img src={colorSharp} alt="color" className="background-image-left"/>
        </section>

    )
}