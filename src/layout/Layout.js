import react from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from "../header/Header";

const Layout = () => {
    return (
        <>
            {/** Header */}
            <Row xl={12} md={12}>
                <Col xl={12} md={12}>
                    <Header></Header>
                </Col>
            </Row>
            {/** Header */}
        </>
    )
}

export default Layout