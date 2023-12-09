class Animal{
alive=true;
eat(){
    console.log("This "+this.nameOfAnimal+" is eating");
}
sleep(){
    console.log("This "+this.nameOfAnimal+" is sleeping");
}
}
class Dog extends Animal{
    nameOfAnimal="dog";
    
    run(){
        console.log("This "+this.nameOfAnimal+" is running");
    }
}
class Cat extends Animal{
    nameOfAnimal="cat";
    
    run(){
        console.log("This "+this.nameOfAnimal+" is running");
    }
}
class Fish extends Animal{
    nameOfAnimal="fish";
   
    swim(){
        console.log("This "+this.nameOfAnimal+" is swimming");
    }
}
const dog=new Dog();
const cat=new Cat();
const fish=new Fish();
console.log(dog.alive);
dog.eat();
dog.sleep();
dog.run();
console.log(cat.alive);
cat.eat();
cat.sleep();
cat.run();
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();