import React from 'react'
import { Jumbotron, Form, Button, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import "./add-ticket-form-style.css"

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, formData, formDataError }) => {
    console.log(formData);
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Agregar Ticket</h1>
            <hr />
             <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Título</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            //type="email"
                            name="subject"
                            value={formData.subject}
                            //minLength="3"
                            maxLength="100"
                            onChange={handleOnChange}
                            placeholder="Ingrese el título"
                            //required
                        />
                        <Form.Text className="text-danger">
                            {formDataError.subject && "Titulo es obligatorio"
                        }</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Fecha del error</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            type="date"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleOnChange}
                            placeholder="Ingrese la fecha"
                            required
                        />
                    </Col>
                   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Detalles</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            as="textarea"
                            name="detail"
                            rows="5"
                            value={formData.detail}
                            onChange={handleOnChange}
                            placeholder="Ingrese los detalles"
                            required
                        />
                    </Col>   
                </Form.Group>
                <Button type="submit" variant="info" block>Ingrese</Button>
            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}