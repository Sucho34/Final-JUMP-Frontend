import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap"
import '../CSS/ReviewModal.css'
import StarReview from "./StarReview";

const ReviewModal = ({ show, close }) => {

    return(
        <Modal show={show} onHide={close} size="lg">
        <Modal.Header>
          <Modal.Title>Will be restaurant name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <input type="text" placeholder="Tell us what you think!"/>
           <StarReview/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
    )
}

export default ReviewModal