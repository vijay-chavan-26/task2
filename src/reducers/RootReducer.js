import { setShow, setLogin, setRemoveModal, setUpdateModal } from "./ShowModals";
import { combineReducers } from "redux";
import { handleOperations } from "./EmployeeReducer";

const RootReducer = combineReducers({
    setShow,
    setRemoveModal,
    setUpdateModal,
    setLogin,
    handleOperations
})

export default RootReducer