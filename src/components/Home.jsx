import { useState, useContext, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../context/AppContext"
import Inbox from "./Inbox";
import SentInbox from "./SentInbox";
import EmailForm from "./EmailForm";
import Sidebar from "./Sidebar";

function Home() {
const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [showSentMails, setShowSentMails] = useState(false)
  const { mails,user } = useContext(AppContext)

  useEffect(() => {
    if (!user) {
        navigate('/')
    }
},[])

  return (
    <main>
      <h1 className="mb-4">Welcome to your Mail Box</h1>
      
      <div>
        <Row className='vh-100'>
          <Col md={4} className=' shadow-lg bg-dark bg-gradient'>
            <Sidebar setShow={setShow} showSent={setShowSentMails} />
          </Col>
          <Col md={8}>
            <EmailForm setShow={setShow} show={show} />
            {
            showSentMails ? <SentInbox /> : <Inbox mails={mails}  />
            }
          </Col>
        </Row>
      </div>

    </main>
  )
}

export default Home