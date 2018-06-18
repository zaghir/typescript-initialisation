var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// le decorator permet d'ajouter un comportement à l'objet
// le decorator c'est simplement une fonction , et on l'attache à la class
// le decorator c'est une fonction ajouté en typescript ,javascript n'a pas cette fonction (elle sera en ES7)pour injecter des nouveaux comportements
// le decorator recuper le contructor de la class
// on attache le decorator à une class par le signe @ seulement
function logger(constructorFn) {
    console.log("logger ==> ", constructorFn);
}
// pour utliser la fonction decorator dans typescript ,il faut ajouter dans le fichier tsconfig.json l'option experimentalDecorators = true si non on recuppere le message d'erreur suivant :
// Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
var Person3 = /** @class */ (function () {
    // constructor
    function Person3() {
        console.log("message à partir de constructor");
    }
    Person3 = __decorate([
        logger
    ], Person3);
    return Person3;
}());
// creation d'un comportement parametrer (true , false) pour logger
// Factory
function logging(value) {
    // on cree aussi un decorator avec une factory methode car on defini dans le test quelle methode utilisé pour décorer la class
    return value ? logger : null;
}
//@logging(true)  // false pour desactiver la fonction logger
var Voiture = /** @class */ (function () {
    function Voiture() {
    }
    return Voiture;
}());
// Advanced decorator
function printable(constructorFn) {
    // chaque objet qui utilise le decorator printable récuperer le comportement printable
    // dans le constructor recuperer on defini dans le prototype la methode print
    // defini un comportement dans le prototype il sera interpreter par javascript aussi
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant1 = /** @class */ (function () {
    function Plant1() {
        this.name = " Mars ";
    }
    Plant1 = __decorate([
        logging(true) // on peut ajouter plusieurs decorateur sur une class
        ,
        printable
    ], Plant1);
    return Plant1;
}());
var plant22 = new Plant1();
plant22.print(); // on recupere la methode print defini dans le prototype
// Method Decorator
// on defini un nouveau comportement pour indiquer au compilateur que avec ce decorator on active ou desactive la redeficntion d'une methode
function editable(value) {
    // redefirir la fonction qui va activer ou desactiver l'option de redefinition d'une methode
    return function (traget, propName, discriptor) {
        discriptor.writable = value;
    };
}
// Property Decorator
function overwritable(value) {
    // la difference avec le decorator de methods c'est que le complateur ne peut pas inject ProprectyDescriptor
    // donc il faut creer un
    // le compilateur scan le code source et a chaqua fois qu'il trouve une propiété il regarde si elle n'est pas décorer
    // si c'est le cas il recupere le decorator et se debroulle pour injecter les objets que le decorator  besoin de puis le context
    return function (traget, propName) {
        var nenDescriptor = {
            writable: value
        };
    };
}
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    //@editable(false)
    Project.prototype.calcBuget = function () {
        console.log(5000);
    };
    return Project;
}());
var project = new Project("projet Typescript");
project.calcBuget(); // il va afficher 5000
project.calcBuget = function () {
    console.log(1000); // donc le compilateur annul cette redefinition de la methode
};
project.calcBuget();
//Parameter Decorator
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log("printAll == true " + 500000);
        }
        else {
            console.log("printAll == false " + 2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers");
    return Course;
}());
var course = new Course("Course de typescript");
course.printStudentNumbers("anythinks", true);
course.printStudentNumbers("anythinks", false);
