export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SHOW_REMOVE_MODAL = "SHOW_REMOVE_MODAL";
export const CLOSE_REMOVE_MODAL = "CLOSE_REMOVE_MODAL";
export const SHOW_UPDATE_MODAL = "SHOW_UPDATE_MODAL";
export const CLOSE_UPDATE_MODAL = "CLOSE_UPDATE_MODAL";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const ADD_EMP = "ADD_EMP";
export const UPDATE_EMP = "UPDATE_EMP";
export const REMOVE_EMP = "REMOVE_EMP";
export const REMOVE_ALL_EMP = "REMOVE_ALL_EMP";

export const handleShow = () =>{
    return{
        type: SHOW_MODAL
    }
}

export const handleClose = () =>{
    return{
        type: CLOSE_MODAL
    }
}

export const handleRemoveModalShow = () =>{
    return{
        type: SHOW_REMOVE_MODAL
    }
}

export const handleRemoveModalClose = () =>{
    return{
        type: CLOSE_REMOVE_MODAL
    }
}

export const handleUpdateModalShow = () =>{
    return{
        type: SHOW_UPDATE_MODAL
    }
}

export const handleUpdateModalClose = () =>{
    return{
        type: CLOSE_UPDATE_MODAL
    }
}

export const handleLogin = () =>{
    return{
        type: LOGGED_IN
    }
}

export const handleLogout = () =>{
    return{
        type: LOGGED_OUT
    }
}

export const handleAddEmployee = (newEmp, id) =>{
    return{
        type: ADD_EMP,
        newEmp,
        id
    }
}

export const handleUpdateEmployee = (newEmp) =>{
    return{
        type: UPDATE_EMP,
        newEmp
    }
}

export const handleRemoveEmployee = (id) =>{
    return{
        type: REMOVE_EMP,
        id
    }
}

export const handleRemoveAllEmployee = (id) =>{
    return{
        type: REMOVE_ALL_EMP,
        id
    }
}