import {ProjectCards} from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import colorSharp from "../assets/img/color-sharp2.png"
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Nav from "react-bootstrap/Nav";



export const Projects = ()=>{
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at culpa error facere facilis fugiat minima officiis repellendus vero. Accusamus aperiam architecto beatae dicta distinctio eius magni repudiandae ullam voluptatibus.</p>
                        <Tab.Container id="projects-tabs"  defaultActiveKey="first">
                            {/*tab header*/}
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Web Applications
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        DeepLearning projects<
                                        /Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Mobile Applications
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>

                                    {
                                        projects.map((project, index)=>{
                                            return(
                                               <ProjectCards
                                               key={index}
                                               {...project}/>
                                            )
                                            }
                                        )
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum dolorem doloribus eveniet ex, labore magnam nostrum, omnis possimus quis tempore temporibus tenetur veniam vero voluptatum? Adipisci, amet at aut ex incidunt iste nesciunt possimus quaerat totam unde! Aperiam, eum?
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur cum debitis eligendi eum fuga illum incidunt iste laboriosam molestiae neque nesciunt nihil odio placeat porro quam qui quidem quisquam saepe, similique soluta, velit voluptas? Autem culpa, ducimus esse hic impedit, inventore nisi nulla numquam perferendis quae quas reprehenderit sunt suscipit tempora vero? Aliquam asperiores assumenda dicta dignissimos dolore dolorum eius excepturi facere facilis id laudantium minus mollitia praesentium provident sit totam ullam vitae, voluptates. Enim eveniet iusto quam similique?
                                    </p>
                                 </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="background color sharp" className="background-image-right"/>
        </section>
    )


}