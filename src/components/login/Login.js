import React from 'react'
import Proptypes from "prop-types"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Ingrese su correo electrónico"
                                required

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Ingrese la contraseña"
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Ingrese</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("reset")}>Olvidó su contraseña?</a>
                </Col>
            </Row>
        </Container>
    )
};

Login.propTypes = {
    handleOnChange: Proptypes.func.isRequired, 
    handleOnSubmit: Proptypes.func.isRequired,
    formSwitcher: Proptypes.func.isRequired,
    email: Proptypes.string.isRequired, 
    password: Proptypes.string.isRequired
}
