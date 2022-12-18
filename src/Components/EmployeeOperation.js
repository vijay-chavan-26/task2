import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleShow,
  handleLogout,
  handleRemoveModalShow,
  handleRemoveAllEmployee,
  handleUpdateModalShow,
} from "../actions/Operation";
import AddModal from "./AddModal";
import EmployeeTable from "./EmployeeTable";
import RemoveModal from "./RemoveModal";
import UpdateModal from "./UpdateModal";

const EmployeeOperation = () => {
    const empList = useSelector((state) => state.handleOperations.empList);
  const dispatch = useDispatch();

  useEffect(() =>{
    console.log("changed")
    localStorage.setItem("employeeList", JSON.stringify(empList))
  }, [empList])

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <h2>Employee</h2>
        <Button
          variant="outline-primary"
          onClick={() => {
            dispatch(handleLogout());
          }}
        >
          Logout
        </Button>
      </div>

      <div className="operation-btns mt-5 d-flex justify-content-evenly">
        <Button
          variant="outline-primary"
          onClick={() => dispatch(handleShow())}
        >
          Add
        </Button>
        <Button variant="outline-success" onClick={() => dispatch(handleUpdateModalShow())}>Update</Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch(handleRemoveModalShow());
          }}
        >
          Remove
        </Button>
        <Button variant="danger" onClick={() => {
            dispatch(handleRemoveAllEmployee());
          }}>Remove All</Button>
      </div>

      <EmployeeTable />
      <AddModal />
      <RemoveModal />
      <UpdateModal />
    </div>
  );
};

export default EmployeeOperation;
