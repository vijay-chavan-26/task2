import { ADD_EMP, UPDATE_EMP, REMOVE_EMP, REMOVE_ALL_EMP } from "../actions/Operation";

const getLocalData = () =>{
  let list = localStorage.getItem("employeeList")
  if(list === null){
    return [];
  }
  else{
    return JSON.parse(list)
  }
}

const empInitialState = {
  empList: getLocalData(),
};

export const handleOperations = (state = empInitialState, action) => {
  switch (action.type) {
    case ADD_EMP:
      const { EmpName, EmpDept, EmpSal } = action.newEmp;
      const list = {
        EmpId: action.id,
        EmpName,
        EmpDept,
        EmpSal,
      };
      return {
        ...state,
        empList: [
          ...state.empList,
          list
        ],
      };

      case UPDATE_EMP : 
      const {EmpId: id, EmpName: name, EmpDept: dept, EmpSal: sal } = action.newEmp;
      let newList = state.empList.map((emp)=>{
        if(emp.EmpId === id){
          return {
            ...emp,
            EmpName: name,
            EmpDept: dept,
            EmpSal: sal
          }
        }
        return emp
      })
      return{
        ...state,
        empList: newList 
      }

      case REMOVE_EMP : 
      let updateList = state.empList.filter((emp)=>emp.EmpId !== action.id)

      return{
        ...state,
        empList: updateList  
      }

      case REMOVE_ALL_EMP : 

      return{
        ...state,
        empList: []  
      }
    default:
      return state;
  }
};
