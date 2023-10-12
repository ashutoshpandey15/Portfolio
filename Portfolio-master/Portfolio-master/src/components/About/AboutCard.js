import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Pandey </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a final year student pursuing Computer Engineering at AISSMS IOIT.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Bingo, bango, bongo; bish, bash, bosh."{" "}
          </p>
          <footer className="blockquote-footer">SAS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
