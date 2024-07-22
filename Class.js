//Design a class for employee which takes id and name in during construction of object and has a salary propety

class Employee{
    constructor(id,name){
        if(!id || !name)
        {
            throw new Error("Employee id and name are must");
        }
        this.is=id;
        this.name=name;
    }

    setSalary(salary){
        this.salary=salary;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
};

class Manager extends Employee{
    setDepartment(name){
        this.department=name;
    }

    getDepartment(){
        return this.department;
    }
}

const employee=new Employee(1,"Preetham");
employee.setSalary(1000);
console.log(employee.getSalary());

const manager=new Manager(2,"Jayam");
manager.setDepartment("HR");
console.log(manager.getDepartment());