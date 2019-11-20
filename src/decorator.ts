// https://www.typescriptlang.org/docs/handbook/decorators.html

// le decorator permet d'ajouter un comportement à l'objet
// le decorator c'est simplement une fonction , et on l'attache à la class
// le decorator c'est une fonction ajouté en typescript ,javascript n'a pas cette fonction (elle sera en ES7)pour injecter des nouveaux comportements
// le decorator recuper le contructor de la class
// on attache le decorator à une class par le signe @ seulement
function logger(constructorFn: Function){
    console.log("logger ==> " , constructorFn);
}
// pour utliser la fonction decorator dans typescript ,il faut ajouter dans le fichier tsconfig.json l'option experimentalDecorators = true si non on recuppere le message d'erreur suivant :
// Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
@logger
class Person3{
    // constructor
    constructor(){
        console.log("message à partir de constructor");
    }
}

// creation d'un comportement parametrer (true , false) pour logger
// Factory
function logging(value: boolean){
    // on cree aussi un decorator avec une factory methode car on defini dans le test quelle methode utilisé pour décorer la class
    return value ? logger : null ;
}
//@logging(true)  // false pour desactiver la fonction logger
class Voiture{

}

// Advanced decorator
function printable(constructorFn: Function){
    // chaque objet qui utilise le decorator printable récuperer le comportement printable
    // dans le constructor recuperer on defini dans le prototype la methode print
    // defini un comportement dans le prototype il sera interpreter par javascript aussi
    constructorFn.prototype.print = function(){
        console.log(this) ;
    }
}
//@logging(true)   // on peut ajouter plusieurs decorateur sur une class
@printable
class Plant1 {
    name=" Mars "
}
const plant22 = new Plant1() ;
(<any>plant22).print() ; // on recupere la methode print defini dans le prototype


// Method Decorator
// on defini un nouveau comportement pour indiquer au compilateur que avec ce decorator on active ou desactive la redefinition d'une methode
function editable(value:boolean){
    // redefirir la fonction qui va activer ou desactiver l'option de redefinition d'une methode
    return function(traget: any , propName:string , discriptor:PropertyDescriptor){
        discriptor.writable = value ;
    }
}
// Property Decorator
function overwritable(value:boolean){
    // la difference avec le decorator de methods c'est que le complateur ne peut pas inject ProprectyDescriptor
    // donc il faut creer un
    // le compilateur scan le code source et a chaque fois qu'il trouve une propiété il regarde si elle n'est pas décorer
    // si c'est le cas il recupere le decorator et se debroulle pour injecter les objets que le decorator  besoin de puis le context
    return function(traget: any , propName:string ){
        const nenDescriptor : PropertyDescriptor = {
            writable: value
        }
    }
}

// Parameter Decorator
function printInfo(target:any , methodName:string ,paramIndex:number){
    console.log("Target: " , target) ;
    console.log("methodName: " , methodName) ;
    console.log("paramIndex: " , paramIndex) ;

    /* dans notre exemple ici :
    * Target:      {printStudentNumbers: ƒ .....
     methodName:  printStudentNumbers  , savoir le nom de la methode
     paramIndex:  1  le premier parameter = 0 et le 2eme  = 1
     c'est le compilateur qui set tous ces valeurs
     */
}

class Project {
    //@overwritable(false)
    projectName: string ;
    constructor(name:string){
        this.projectName =  name ;
    }
    //@editable(false)
    calcBuget(){
        console.log(5000) ;
    }
}

const project = new Project("projet Typescript");
project.calcBuget();  // il va afficher 5000
project.calcBuget = function(){ // le compilateur detecte que cette mehode ne peut pas etre redefini car on a specifier ==> @editable(false)
    console.log(1000) ; // donc le compilateur annul cette redefinition de la methode
}
project.calcBuget();

//Parameter Decorator
class Course{
    name: string ;
    constructor(name:string){
        this.name = name ;
    }

    printStudentNumbers(mode:string , @printInfo printAll: boolean){
        if(printAll){
            console.log("printAll == true "+500000);
        } else {
            console.log("printAll == false "+2000)
        }
    }
}

const course = new Course("Course de typescript") ;
course.printStudentNumbers("anythinks" , true) ;
course.printStudentNumbers("anythinks" , false) ;