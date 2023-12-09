class Car{
   static numberOfCars = 0;
   //numberOfCars=0;
constructor(model){
    this.model=model;
   // this.numberOfCars +=1;
    Car.numberOfCars +=1;
}
static race(){
    console.log("3...2...1...Go");
}

}
const car1=new Car("BMW");
const car2=new Car("Audi");
const car3=new Car("Ferrari");
const car4=new Car("Innova");

//console.log(car1.numberOfCars);
//console.log(car2.numberOfCars);
//console.log(car3.numberOfCars);
//console.log(car4.numberOfCars);

//it gives total number of cars count in this class
console.log(Car.numberOfCars);
Car.race();
