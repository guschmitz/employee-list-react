const EMPLOYEE = '_EMPLOYEE';

const ACTIONS = {
    LIST: 'EMPLOYEE_LIST',
    SAVE: 'EMPLOYEE_ADD',
    DEL: 'EMPLOYEE_REMOVE',
}

const INITIAL_STATE = {
    employees: []
}

export const employeeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIONS.LIST:
            return {...state, employees: action.employees}
        case ACTIONS.SAVE:
            return {...state, employees: [...state.employees, action.employee]}
        case ACTIONS.DEL:
            const id = action.id;
            const employees = state.employees.filter(employee => employee.id !== id)
            return {...state, employees: employees}
        default:
            return state;
    }
}

export function list() {
    return dispatch => {
        const employees = localStorage.getItem(EMPLOYEE);
        if(!employees) {
            return [];
        }
        return JSON.parse(employees);
    }
}

export function save (employee) {
    return dispatch => {        
        let employees = localStorage.getItem(EMPLOYEE);
        
        if(!employees) {
            employees = [];
        } else {
            employees = JSON.parse(employees);
        }

        const index = this.findIndex(employee.surname)
        if(index === null) {
            employees.push(employee);            
        } else {            
            employees[index] = employee;
        }
        
        localStorage.setItem(EMPLOYEE, JSON.stringify(employees));  
    }
}

export function del (surname) {
    return dispatch => {
        const index = this.findIndex(surname);
        if(index !== null) {
            const employees = this.returnEmployees();            
            employees.splice(index, 1);
            localStorage.setItem(EMPLOYEE, JSON.stringify(employees));
            return employees
        }
    }
}