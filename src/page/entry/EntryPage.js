import React, { useState } from 'react';
import { Jumbotron } from "react-bootstrap";
import './entryStyle.css';
import { Login } from "./../../components/login/Login"
import { PasswordReset } from '../../components/password-reset/PasswordReset';

export const EntryPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login")

    const handleOnChange = e => {
        const { name, value } = e.target;
        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;

                default: 
                    break;
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !password){
            return alert("llene los datos")
        }

        // call api in the future
        console.log(email, password);
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        
        if (!email){
            return alert("llene los datos")
        }

        // call api in the future
        console.log(email);
    };

    const formSwitcher = frmtype => {
        setFormLoad(frmtype);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {formLoad === 'login' && 
                    <Login 
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                        password={password}
                    />
                }
                {formLoad === 'reset' && 
                    <PasswordReset 
                        handleOnChange={handleOnChange} 
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                    />
                }
                
            </Jumbotron>
        </div>
    )
}
