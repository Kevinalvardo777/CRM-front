import React from 'react'
import Proptypes from "prop-types"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const PasswordReset = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Restablecer contraseña</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                        <Button type="submit">Ingrese</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher('login')}>Ingrese ahora</a>
                </Col>
            </Row>
        </Container>
    )
};

PasswordReset.propTypes = {
    handleOnChange: Proptypes.func.isRequired, 
    handleOnResetSubmit: Proptypes.func.isRequired,
    email: Proptypes.string.isRequired, 
}
