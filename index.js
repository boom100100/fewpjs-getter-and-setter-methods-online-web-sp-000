// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return this.diameter * Math.PI;
  }
  
  get area(){
    this.radius * this.radius * Math.PI;
  }
  /*get radius(){
    return this.radius;
  }
  set radius(radius){
    this.radius = radius;
  }*/
}