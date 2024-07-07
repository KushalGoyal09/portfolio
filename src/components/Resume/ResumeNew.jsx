import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/kushal_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <div className="pdf-container">
                        <object
                            data={pdf}
                            type="application/pdf"
                            width="70%"
                            height="100%"
                        >
                            <p>
                                Check my{" "}
                                <a href="https://drive.google.com/file/d/1DXOBqsZ6eazgrx8aPsBVPWK-vg7Dlq90/view">
                                    resume
                                </a>
                            </p>
                        </object>
                    </div>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
