import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from "react-bootstrap"
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm"
import { shortText } from "../../utils/validation"


const initialFormData = {
    subject: "",
    issueDate: "",
    detail: ""
}

const initialErrorData = {
    subject: false,
    issueDate: false ,
    detail: false
}

export const AddTicketPage = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [formDataError, setFormDataError] = useState(initialErrorData);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, 
            [name]: value
        })
        console.log(name, value);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        setFormDataError(initialErrorData);
        
        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialErrorData,
            subject: !isSubjectValid
         })

        console.log("Form submit request received", formData);
    }

    useEffect(() => {
            
    }, [formData, formDataError])

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Nuevo ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm  
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit}
                        formData={formData}
                        formDataError={formDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}
