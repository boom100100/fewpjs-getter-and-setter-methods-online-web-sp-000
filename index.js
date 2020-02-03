// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return diameter() * Math.PI;
  }
  /*get radius(){
    return this.radius;
  }
  set radius(radius){
    this.radius = radius;
  }*/
}