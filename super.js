class Animal{
   constructor(name,age){
    this.name=name;
    this.age=age;

   }
    }
    class Dog extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }   
       
    }
    class Fish extends Animal{
        constructor(name,age,swim){
            super(name,age);
            this.swim=swim;
        }
    }
    const dog=new Dog("dog","5years",40);
    const fish=new Fish("fish","20days",70);
    console.log(fish.name);
    console.log(dog.runspeed);