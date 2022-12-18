import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateModalClose, handleUpdateEmployee } from "../actions/Operation";

const UpdateModal = () => {
  const [employee, setEmployee] = useState({
    EmpId: "",
    EmpName: "",
    EmpDept: "",
    EmpSal: "",
  });
  const dispatch = useDispatch();
  //   const empList = useSelector((state) => state.handleOperations.empList);
  const show = useSelector((state) => state.setUpdateModal);

  const handleUpdateInput = (e) => {
    const { name, value } = e.target;

    setEmployee((employee) => {
      return { ...employee, [name]: value };
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => dispatch(handleUpdateModalClose())}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update New Employee</Modal.Title>
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
                name="EmpId"
                value={employee.EmpId}
                onChange={handleUpdateInput}
                placeholder="001"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Name :</Form.Label>
              <Form.Control
                type="text"
                name="EmpName"
                value={employee.EmpName}
                onChange={handleUpdateInput}
                placeholder="Vijay chavan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Department :</Form.Label>
              <Form.Control
                type="text"
                name="EmpDept"
                value={employee.EmpDept}
                onChange={handleUpdateInput}
                placeholder="Frontend Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Salary :</Form.Label>
              <Form.Control
                type="text"
                name="EmpSal"
                value={employee.EmpSal}
                onChange={handleUpdateInput}
                placeholder="1,000,000"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              if (
                employee.EmpId.trim() === "" ||
                employee.EmpName.trim() === "" ||
                employee.EmpDept.trim() === "" ||
                employee.EmpSal.trim() === ""
              ) {
                alert("Please fill all fields...");
                return;
              }

              dispatch(handleUpdateEmployee(employee));
              dispatch(handleUpdateModalClose());
              setEmployee({ EmpName: "", EmpDept: "", EmpSal: "" });
            }}
          >
            Update Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateModal;
