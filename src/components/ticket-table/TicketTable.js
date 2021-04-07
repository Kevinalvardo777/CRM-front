import React from 'react'
import { Table } from "react-bootstrap"

export const TicketTable = ({tickets}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Temas</th>
                    <th>Estado</th>
                    <th>Fecha inicio</th>
                </tr>
            </thead>
            <tbody>
                { tickets.length ? 
                tickets.map((row, i) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                    )): 
                    <tr>
                        <td colSpan="4" className="text-center" >No ticket show{" "}</td>
                    </tr>
                }
               
            </tbody>
        </Table>
    )
}
