// Write your solution in this file!
const employee = {
    name : 'Greg',
    streetAddress: '1 Pine',


}

function updateEmployeeWithKeyAndValue(obj, key, value){
    let employeeClone = {...obj, }
    
    employeeClone[key] = value;
    
    return employeeClone

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

    obj[key] = value;
    return obj;

}

function deleteFromEmployeeByKey(employee, key){
    let newObj = {...employee};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;
}


