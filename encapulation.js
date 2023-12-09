class Student{
    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks=marks;
    }
}
const stu=new Student();
stu.setMarks(55);
stu.setName("Harshadeep");
console.log(stu.getName()+" "+stu.getMarks());