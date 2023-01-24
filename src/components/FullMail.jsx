import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";

import EmailForm from "./EmailForm";
import Sidebar from "./Sidebar";

function FullMail() {

  const [show, setShow] = useState(false)
  const [mail, setMail] = useState({})
  const location = useLocation()

  useEffect(() => {

    setMail(location.state.mail)
  },[location])

  return (
    <Row className='vh-100'>
    <Col md={4} className=' shadow-lg bg-dark bg-gradient'>
      <Sidebar setShow={setShow} />
      <EmailForm setShow={setShow} show={show} />
    </Col>
    <Col md={8} className="d-flex justify-content-center align-items-center">
    <Card className="border-sm text-black" style={{height : 'fit-content', width: '600px'}}>
      <Card.Body>
        
        {mail?.sentBy && <Card.Title className="border-bottom pb-2">{mail.sentBy}</Card.Title> }
        {mail?.sendTo && <Card.Title className="border-bottom pb-2">{mail.sendTo}</Card.Title> }
        <div className="border-bottom mb-2" dangerouslySetInnerHTML={{ __html: mail?.content }} />
        <Link to='/home'><Button variant="primary">Back</Button></Link>
      </Card.Body>
    </Card>
    </Col>
  </Row>    

  )
}

export default FullMail