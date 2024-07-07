import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple"> Kushal Goyal </span>
                        from India.
                        <br />I am currenty pursuing my degree in Computer
                        Science from Netaji Subhas University of Technology ,
                        New Delhi.
                        <br />
                        <br />I am a <span className="purple"> Full Stack Developer</span> with expertise in
                            Typescript, React, Node.js, PostgreSQL, and MongoDB
                        . I am experienced in
                         AWS, Docker, and CI/CD
                        , with a solid foundation in Data Structures,
                        Algorithms, Computer Network and DBMS.
                        <br />
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
