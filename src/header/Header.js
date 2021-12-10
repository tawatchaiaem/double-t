import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./Header.css";

const Header = () => {
  return (
    <>
      {/** Header */}
      <Row xl={12} md={12} className="Header-row-top">
        <Col xl={1} md={12}></Col>
        <Col xl={10} md={12}>
          <Navbar
            className="header-top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                double.t.farm2021@gmail.com
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features"></Nav.Link>
                </Nav>
                {/* <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                </Nav> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col xl={1} md={12}></Col>
      </Row>
      <Row xl={12} md={12} className="Header-row-buttom">
        <Col xl={1} md={12}></Col>
        <Col xl={10} md={12}>
          <Navbar bg="light" expand="lg" className="nav-buttom">
            <Container fluid>
              {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="navbarScroll"/>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 navbar-center"
                  style={{ maxHeight: "100px" }}
                  navbarScroll 
                >
                <div>
                    
                </div>
                  <Nav.Link href="#action1">หน้าแรก</Nav.Link>
                  <Nav.Link href="#action2">ชวนผักลงสวน</Nav.Link>
                  <Nav.Link href="#action3">ชวนผักลงเมนู</Nav.Link>
                  <Nav.Link href="#action3">เกี่ยวกับเรา</Nav.Link>
                  {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link> */}
                </Nav>
                {/* <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col xl={1} md={12}></Col>
      </Row>
    </>
  );
};

export default Header;
