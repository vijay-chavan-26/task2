import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRemoveEmployee,
  handleRemoveModalClose,
} from "../actions/Operation";

const RemoveModal = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.setRemoveModal);

  const handleRemoveInput = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => dispatch(handleRemoveModalClose())}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Id :</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={id}
                onChange={handleRemoveInput}
                placeholder="001"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              if (id.trim() === "") {
                alert("Please Enter id to remove...");
                return;
              }

              dispatch(handleRemoveEmployee(id));
              dispatch(handleRemoveModalClose());

              setId("")
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveModal;
