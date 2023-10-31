import {Col, Row} from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";

export const ExperienceItems = ({title, description, company, position, time}) => {





    return (
        <div className="experience-card">
            <Row>
                <Col sm={10} md={10}>
                    {title}

                </Col>
                <Col sm={2} md={2}>
                    {position}
                </Col>
            </Row>
            <Row>
                <Col sm={10} md={10}>
                    {company}

                </Col>
                <Col sm={2} md={2}>
                    {time}
                </Col>
            </Row>
            <Row>
                <Col>
                    {description}
                </Col>
            </Row>
        </div>
    )
}