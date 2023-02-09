import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Inbox({ mails }) {
  const { changeReadStatus, deleteMail, getMails } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      getMails();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClick = (mail) => {
    changeReadStatus(mail);
    navigate(`/full-mail/${mail.id}`, { state: { mail } });
  };

  return (
    <>
      <h1>Recieved Mails</h1>
      <ListGroup>
        {mails.map((mail) => (
          <ListGroup.Item
            key={mail.id}
            className="d-flex justify-content-between"
          >
            <p>
              <span
                style={{ width: "1rem", height: "1rem" }}
                className={`bg-primary me-2 ${
                  mail.read ? "d-none" : "d-inline-block"
                } rounded-circle`}
              />
              <span className="link text-primary" onClick={() => onClick(mail)}>
                {mail.sentBy}
              </span>
            </p>
            <div className="subject">{mail.subject.substring(0, 30)}...</div>

            <Button variant="danger" onClick={() => deleteMail(mail.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Inbox;
