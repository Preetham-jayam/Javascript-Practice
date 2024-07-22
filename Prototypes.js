
var Employee=function(id,name){
    if(!id || !name)
        {
            throw new Error("Employee id and name are must");
        }
        this.is=id;
        this.name=name;
}

Employee.prototype.setSalary=function(salary){
    this.salary=salary;
}

Employee.prototype.getId=function(){
    return this.id;
}
Employee.prototype.getName=function(){
    return this.name;
}
Employee.prototype.getSalary=function(){
    return this.salary;
}


var Manager=function(params){
    Employee.apply(this,arguments);
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager;

Manager.prototype.setDepartment=function(name){
    this.department=name;
}

Manager.prototype.getDepartment=function(){
    return this.department;
}

const employee=new Employee(1,"Preetham");
employee.setSalary(1000);
console.log(employee.getSalary());

const manager=new Manager(2,"Jayam");
manager.setDepartment("HR");
console.log(manager.getDepartment());