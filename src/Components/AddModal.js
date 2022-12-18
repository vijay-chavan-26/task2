import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleAddEmployee, handleClose } from "../actions/Operation";

var id = 1;
const AddModal = () => {
  const [employee, setEmployee] = useState({
    EmpId: "",
    EmpName: "",
    EmpDept: "",
    EmpSal: "",
  });
  const dispatch = useDispatch();
  const empList = useSelector((state) => state.handleOperations.empList);
  const show = useSelector((state) => state.setShow);

  useEffect(() => {
    if (empList.length === 0) {
      id = 1;
    }
  }, [empList]);

  const handleAddInput = (e) => {
    const { name, value } = e.target;

    setEmployee((employee) => {
      return { ...employee, [name]: value };
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => dispatch(handleClose())}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Name :</Form.Label>
              <Form.Control
                type="text"
                name="EmpName"
                value={employee.EmpName}
                onChange={handleAddInput}
                placeholder="Vijay chavan"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Department :</Form.Label>
              <Form.Control
                type="text"
                name="EmpDept"
                value={employee.EmpDept}
                onChange={handleAddInput}
                placeholder="Frontend Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Salary :</Form.Label>
              <Form.Control
                type="text"
                name="EmpSal"
                value={employee.EmpSal}
                onChange={handleAddInput}
                placeholder="1,000,000"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              if (
                employee.EmpName.trim() === "" ||
                employee.EmpDept.trim() === "" ||
                employee.EmpSal.trim() === ""
              ) {
                alert("Please fill all fields...");
                return;
              }

              dispatch(handleAddEmployee(employee, "" + id++));
              dispatch(handleClose());
              setEmployee({ EmpName: "", EmpDept: "", EmpSal: "" });
            }}
          >
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
