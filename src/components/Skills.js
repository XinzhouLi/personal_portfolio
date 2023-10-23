import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import skills_logo from "../assets/img/meter1.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                description of skills
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-silder" draggable={true} swipeable={true}>
                                <div className="item">
                                    <img src={skills_logo}   alt="Python"/>
                                    <h5>
                                        Web Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={skills_logo}   alt="Python"/>
                                    <h5>
                                        Deep Learning Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={skills_logo}   alt="Python"/>
                                    <h5>
                                        Mobile Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={skills_logo}   alt="Python"/>
                                    <h5>
                                        Full-Stack Development
                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="color" className="background-image-left"/>
        </section>

    )
}