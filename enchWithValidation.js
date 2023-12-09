class Employee{
    constructor(){
        var name;
        var salary;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getSalary(){
        return this.salary;
    }
    setSalary(salary){
        if(salary<15000||salary>80000){
            console.log("invalid salary");
        }else{
            this.salary=salary;
        }
    }
}

const emp=new Employee();
emp.setName("rekha");
emp.setSalary(35000);
console.log("employee Name: "+emp.getName());
console.log("employee salary: "+emp.getSalary());