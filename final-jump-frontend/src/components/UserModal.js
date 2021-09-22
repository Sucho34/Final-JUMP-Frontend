import React, { Component, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormText, Modal } from "react-bootstrap";
import '../CSS/UserModal.css';
import axios from "axios";

const UserModal = ({ show, close }) => {
     const url = "localhost:8080/api/user"
     const [data, setData] = useState({
         name:"",
         username:"",
         password:"",
         //role:""                         is this needed? Are new users allowed to choose their role?

     })

     function submit(e) {
         e.preventDefault();
         axios.post(url, {
             name: data.name,
             username: data.username,
             password: data.password
         })
         .then(response => {
             console.log(response.data)
         })
     }

     function handle(e) {
         const newdata = { ...data }
         newdata[e.target.id] = e.target.value
         setData(newdata)
         console.log(newdata)
     }


    return(
        <Modal show={show} onHide={close} size="lg">
        <Modal.Header>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(e) => submit(e)}>
                <FormGroup>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl onChange={(e) => handle(e)} id="name" value={data.name} type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl  onChange={(e) => handle(e)} id="username" value={data.username} type="email" placeholder="Enter email" />
                    <FormText>
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl  onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Enter a password" />
                </FormGroup>
                {/* <FormGroup>
                    <FormLabel>Role</FormLabel>
                    <FormControl onChange={(e) => handle(e)} id="role" value={data.role} type="text" placeholder="Enter your role" />
                </FormGroup> */}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={close}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      
    )
}

export default UserModal