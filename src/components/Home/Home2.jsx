import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                        LET ME INTRODUCE <span className="purple"> Myself </span>
                        </h1>
                        <p className="home-about-body">
                            <p style={{ fontSize: "2em" }}>
                                I'm an {"  "}{" "}
                                <span
                                    className="purple"
                                    style={{ fontWeight: "bold" }}
                                >
                                    {" "}
                                    Engineer{" "}
                                </span>
                            </p>
                            <br />
                            I am a Full Stack Web Developer skilled in{" "}
                            <b className="purple">
                                Typescript, JavaScript
                            </b>
                            , and experienced with
                            <b className="purple">
                                {" "}
                                React, Node.js, Express.js, PostgreSQL, MongoDB,
                                Docker, and ORMs
                            </b>
                            .
                            <br />
                            <br />
                            Passionate about{" "}
                            <b className="purple">web development</b> and{" "}
                            <b className="purple">cloud computing</b>.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>CONNECT WITH ME</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/KushalGoyal09"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Kushal__Goyal"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/kushal-goyal/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:goyalkushal04@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillMail />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                  <p style={{color:'whitesmoke'}}>
                    goyalkushal04@gmail.com
                  </p>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
