var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // dans la signature de constructeur on peut ajouter des propriétés à la classe sans les definir avant
    // il faut seulement les declaré 
    function Person(name, userName) {
        this.userName = userName;
        this.name = name;
    }
    // si on ne specifie pas la visibilité pour la methode sa sera par defaut public , c'est le cas ici
    Person.prototype.printAge = function () {
        console.log("age = " + this.age + " . ");
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log("type = " + this.type + " .");
    };
    return Person;
}());
// compilation ==> tsc -watch
// npm start
var person1 = new Person("Ralf", "SNK");
console.log(person1);
person1.printAge();
// Inheritance
var Ralf = /** @class */ (function (_super) {
    __extends(Ralf, _super);
    // la classe person a un constructeur avec paramétés
    // pour créer une classe qui herite de la classe Person
    // cette classe doit faire apple au constructeur de Person pour assigner les valeurs est creer un nouveau objet
    // on crée une variable d'instance à partir du constructor 
    function Ralf(username) {
        var _this = _super.call(this, "Ralf", username) || this;
        _this.age = 36; // on peut acceder car la propriété a une porté protected 
        return _this;
        // console.log(this.type);  // error de compilation car le type a une porté private , pas visible pour les autres 
        // on herite tout a partir de la classe mere , a part les propriétés et méthodes private 
        // on peut surcharger les methodes qui sont declarés dans la classe mere 
    }
    return Ralf;
}(Person));
var ralf = new Ralf("ralf");
console.log(ralf);
// Getters & Setter
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        // pour controller les valeurs des propriétes de la classe , on passe par la methode set ou get
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant);
plant.species = "LUNA";
console.log("plant.species = " + plant.species);
plant.species = "MARS";
console.log("plant.species = " + plant.species);
// Static Properties & Methodes
// quand on a pas besoin d'instancier un objet pour utiliser ses propriétés ou methodes
// on les declares avec une visibilité static
// exemple d'utilisation helpers   Factory 
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calculerSeufaceCercle = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log("2*Helpers.PI  = " + 2 * Helpers.PI);
console.log("calculerSeufaceCercle(2) = " + Helpers.calculerSeufaceCercle(2));
// Abstract Classes
// les classes abstract ne peuvent pas etre instancier directement 
// elle founi une configation au classe qui herite de la classe abstract 
var Projet = /** @class */ (function () {
    function Projet() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Projet.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Projet;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // il faut redefinir la methode changeName() qui est une methode abstrate de la classe Projet
    // le comportement de cette methde est override redefini dans chaque classe qui herite de la classe abstract
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Projet));
var project1 = new ITProject();
console.log("projet1 ==>", project1);
project1.changeName("Projet Typescript version Alpha");
console.log("projet1 ==>", project1);
// private constructors   and singleton
var OnlyOneInstanceOfObject = /** @class */ (function () {
    // readonly permet de dire au compilateur que la variable name est on mode lecture seule
    // il n y a pas de setter 
    // si non c'est possible de declarer la proprite name avec un scope prive et definir seulement un getter pas de setter
    function OnlyOneInstanceOfObject(name) {
        this.name = name;
    }
    OnlyOneInstanceOfObject.getInstance = function (name) {
        if (!OnlyOneInstanceOfObject.instance) {
            OnlyOneInstanceOfObject.instance = new OnlyOneInstanceOfObject(name); //'The Only One Instance'
        }
        return OnlyOneInstanceOfObject.instance;
    };
    return OnlyOneInstanceOfObject;
}());
// on ne peut pas instancié un objet a partir d'un constructeur prive
//let wrong = new OnlyOneInstanceOfObject('The Only one') ;
// on fait appel à la methode static de la classe pour recuperer une instance
// si l'objet est deja crée on recupere l'instance si non on crée une nouvelle c'est le patern singleton
var right = OnlyOneInstanceOfObject.getInstance('The Only One Instance');
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectange = /** @class */ (function (_super) {
    __extends(Rectange, _super);
    function Rectange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectange.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectange;
}(BaseObject));
var rectangle = new Rectange();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3 
var PersonExe = /** @class */ (function () {
    function PersonExe() {
        this._firstName = "";
    }
    Object.defineProperty(PersonExe.prototype, "firstName", {
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
    return PersonExe;
}());
var person2 = new PersonExe();
console.log(person2.firstName);
person2.firstName = "MA";
console.log(person2.firstName);
person2.firstName = "Mario";
console.log(person2.firstName);
// dans es5 les get et set sont supporter es3 non
// pour compiler dans la version ES5 ==> tsc fichier.ts -t ES5 
// si non dans le CLI tsc scriptObjetc.ts -t ES5
//# sourceMappingURL=scriptObject.js.map