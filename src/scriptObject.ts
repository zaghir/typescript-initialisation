class Person{
    // si on ne specifi pas la visiblité de la propiété defini  dans la classe , la propriété aura une visiblité public par defaut
    name:string;
    // visibilté de type privé , la propriété sera utiliser seulement dans la classe
    private type:string ;
    // visibilé de type protected la propriété sera vibile pour cette classe et toutes les classe qui herite de cette classe
    protected age:number;

    // dans la signature de constructeur on peut ajouter des propriétés à la classe sans les definir avant
    // il faut seulement les declaré 
    constructor(name:string , public userName:string){
        this.name = name ;
    }
    // si on ne specifie pas la visibilité pour la methode sa sera par defaut public , c'est le cas ici
    printAge(){
        console.log(`age = ${this.age} . `);
        this.setType("Old Guy");
    }

    private setType(type: string ){
        this.type = type ;
        console.log(`type = ${this.type} .`);
    }
}
// compilation ==> tsc -watch
// npm start
const person1 = new Person("Ralf","SNK");
console.log(person1);
person1.printAge();

// Inheritance
class Ralf extends Person{
    // la classe person a un constructeur avec paramétés
    // pour créer une classe qui herite de la classe Person
    // cette classe doit faire apple au constructeur de Person pour assigner les valeurs est creer un nouveau objet
    // on crée une variable d'instance à partir du constructor 
    constructor(username:string){
        super("Ralf" ,username);
        this.age = 36 ;  // on peut acceder car la propriété a une porté protected 
        // console.log(this.type);  // error de compilation car le type a une porté private , pas visible pour les autres 
        // on herite tout a partir de la classe mere , a part les propriétés et méthodes private 
        // on peut surcharger les methodes qui sont declarés dans la classe mere 
    }
}
const ralf = new Ralf("ralf");
console.log(ralf);

// Getters & Setter
class Plant{
    private _species:string ;

    get species(){
        return this._species;
    }
    // pour controller les valeurs des propriétes de la classe , on passe par la methode set ou get
    set species(value:string){
        if(value.length > 3){
            this._species = value;
        }else{
            this._species ="Default";
        }
    }
}
let plant = new Plant();
console.log(plant) ;
plant.species = "LUNA";
console.log(`plant.species = ${plant.species}`);
plant.species = "MARS" ;
console.log(`plant.species = ${plant.species}`);

// Static Properties & Methodes
// quand on a pas besoin d'instancier un objet pour utiliser ses propriétés ou methodes
// on les declares avec une visibilité static
// exemple d'utilisation helpers   Factory 
class Helpers{
    static PI :number = 3.14;
    static calculerSeufaceCercle(diameter:number) :number{
        return this.PI * diameter;
    }
}
console.log(`2*Helpers.PI  = ${2*Helpers.PI}`);
console.log(`calculerSeufaceCercle(2) = ${Helpers.calculerSeufaceCercle(2)}`);

// Abstract Classes
// les classes abstract ne peuvent pas etre instancier directement 
// elle founi une configation au classe qui herite de la classe abstract 
abstract class Projet{
    projectName : string ="Default";
    budget: number = 1000;
    // methode abstract  avec le keyword abstract  ,
    // c'est methode doit etre  override (redifini) dans les classes filles si non error de compilation 
    abstract changeName(name:string) :void ;

    calcBudget(){
        return this.budget * 2;
    }
}
class ITProject extends Projet{
    // il faut redefinir la methode changeName() qui est une methode abstrate de la classe Projet
    // le comportement de cette methde est override redefini dans chaque classe qui herite de la classe abstract
    changeName(name:string) :void{
        this.projectName = name;
    }
}
let  project1 = new ITProject();
console.log("projet1 ==>" , project1) ;
project1.changeName("Projet Typescript version Alpha");
console.log("projet1 ==>" , project1) ;

// private constructors   and singleton
class OnlyOneInstanceOfObject{
    private static instance :OnlyOneInstanceOfObject ;

    // readonly permet de dire au compilateur que la variable name est on mode lecture seule
    // il n y a pas de setter 
    // si non c'est possible de declarer la proprite name avec un scope prive et definir seulement un getter pas de setter
    private constructor(public readonly name: string){ }
    public static getInstance(name: string ):OnlyOneInstanceOfObject{
        if(!OnlyOneInstanceOfObject.instance){
            OnlyOneInstanceOfObject.instance = new OnlyOneInstanceOfObject(name); //'The Only One Instance'
        }
        return OnlyOneInstanceOfObject.instance;
    }
}
// on ne peut pas instancié un objet a partir d'un constructeur prive
//let wrong = new OnlyOneInstanceOfObject('The Only one') ;
// on fait appel à la methode static de la classe pour recuperer une instance
// si l'objet est deja crée on recupere l'instance si non on crée une nouvelle c'est le patern singleton
let right = OnlyOneInstanceOfObject.getInstance('The Only One Instance');
// right.name = "Mario" ;  error  ===>  Cannot assign to 'name' because it is a read-only

/**
 * // Exercise 1 - How was your TypeScript Class?
 function Car(name) {
    this.name = name; 
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
 var car = new Car("BMW");
 car.honk();
 console.log(car.acceleration);
 car.accelerate(10);
 console.log(car.acceleration);

 // Exercise 2 - Two objects, based on each other ...
 var baseObject = {
    width: 0,
    length: 0
};
 var rectangle = Object.create(baseObject);
 rectangle.width = 5;
 rectangle.length = 2;
 rectangle.calcSize = function() {
    return this.width * this.length;
};
 console.log(rectangle.calcSize());

 // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
 var person = {
    _firstName: ""
};
 Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
 console.log(person.firstName);
 person.firstName = "Ma";
 console.log(person.firstName);
 person.firstName = "Maximilian";
 console.log(person.firstName);
 */
// Exercise 1 - How was your TypeScript Class?
class Car{
    name:string;
    acceleration: number =0;
    public constructor(name:string){
        this.name = name ;
    }
    public honk():void{
        console.log("Toooooooooot!");
    }
    public accelerate(speed :number):void{
        this.acceleration += speed ;
    }
}
let car = new Car("BMW") ;
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Inheritance Two objects, based on each other ...
class BaseObject  {    
    constructor(public width :number =0, public length: number = 0 ){}
}
class Rectange extends BaseObject{

    calcSize():number {
        return this.width * this.length;
    }

}
let rectangle = new Rectange();
rectangle.width = 5 ;
rectangle .length = 2 ;
console.log(rectangle.calcSize());

// Exercise 3 
class PersonExe {
    
    private _firstName: string = "" ;
    
    get firstName(){
        return this._firstName ;
    }
    set firstName(value: string){
        if(value.length > 3){
            this._firstName = value;
        }else{
            this._firstName = "" ;
        }
    }
}
let person2 = new PersonExe();
console.log(person2.firstName);
person2.firstName = "MA";
console.log(person2.firstName);
person2.firstName = "Mario";
console.log(person2.firstName);
// dans es5 les get et set sont supporter es3 non
// pour compiler dans la version ES5 ==> tsc fichier.ts -t ES5 
// si non dans le CLI tsc scriptObjetc.ts -t ES5
