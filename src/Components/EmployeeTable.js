import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const EmployeeTable = () => {
  const empList = useSelector((state) => state.handleOperations.empList);
  
  return (
    <>
      <Table striped bordered hover variant="dark mt-5 mx-0">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Department</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp, id) => {
            return (
              <tr key={id}>
                <td>{emp.EmpId}</td>
                <td>{emp.EmpName}</td>
                <td>{emp.EmpDept}</td>
                <td>{emp.EmpSal}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeTable;
