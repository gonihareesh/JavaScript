class Student{
constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
study(){
    console.log(`${this.name} is studying`);
}
}
const stu=new Student("sandeep",28,"male");
const stu1=new Student("charan",27,"male");
const stu2=new Student("vikram",23,"male");
const stu3=new Student("tirupati",29,"male");
console.log(stu.name+" "+stu.age+" "+stu.gender);
console.log(stu1.name+" "+stu1.age+" "+stu1.gender);
console.log(stu2.name+" "+stu2.age+" "+stu2.gender);
console.log(stu3.name+" "+stu3.age+" "+stu3.gender);
stu.study();