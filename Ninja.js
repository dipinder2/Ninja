class Ninja{
	constructor(name, health, speed=3,strength=3){
		this.name=name;
		this.health = health;
		this.speed=speed;
		this.strength=strength;
	}
	sayName(){
		console.log('Hi my name is ',this.name)
	}
	showStats(){
		console.log(`${this.name} 
			has ${this.strength} strength, 
			${this.speed} speed and 
			${this.health} health.`);
	}
	drinkSake(){
		this.health+=10;
	}
}