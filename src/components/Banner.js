import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export const Banner = () =>  {
    return(
        <section className="banner" id="home">
            <Container>
               <Row className="align-items-center">
                   <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                       <h1>

                       </h1>
                   </Col>
               </Row>
            </Container>


        </section>




    )
}