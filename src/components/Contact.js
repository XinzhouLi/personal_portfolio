import {useState} from "react"
import {Col, Row, Container} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = ()=>{
    const initialForm ={
        firstName : '',
        lastName : '' ,
        email:'',
        phone:'',
        message:'',
    }
    const [formDetails, setFormDetails] = useState(initialForm)
    const [btnText, setBtnText] = useState('Send')
    const [status, setStatus] = useState({})

    function formUpdate(category, value) {
        // console.log(category, value, formDetails)
        setFormDetails({
            ...formDetails,
            [category] :  value,
            }
        )
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setBtnText("Sending...")
        let response = await fetch("http://localhost5000/contact",
            {method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
        setBtnText("Send")
        let result = response.json();
        setFormDetails(initialForm);
        if(result.code === '200'){
            setStatus({success:true, message:"Message send successfully."})
        }else {
            setStatus({success:false, message:"Something went worry please try later."})

        }
    }


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt=""/>
                    </Col>

                    <Col md={6}>
                        <h2>Get in Touch!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name"
                                           onChange={(e)=>
                                               formUpdate('firstName', e.target.value)
                                           }/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name"
                                           onChange={(e)=>
                                               formUpdate('lastName', e.target.value)
                                           }/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="E-mail"
                                           onChange={(e)=>
                                               formUpdate('email', e.target.value)
                                           }/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone Num"
                                           onChange={(e)=>
                                               formUpdate('phone', e.target.value)
                                           }/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows={12} value={formDetails.message} placeholder="Messages"
                                              onChange={(e)=>
                                                  formUpdate('message', e.target.value)
                                              }/>
                                    <button type={"submit"}> <span>{btnText}</span></button>
                                </Col>
                                <Col>
                                    {
                                        status.message &&
                                        <p className={status.sussess === false ? "danger" : "success"}>{status.message}</p>
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}