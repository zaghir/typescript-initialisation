interface NamedPerson {
    // dans l'interface on defini la structure de contrat qui va etre utiliser
    // la classe ou l'objet qui va utiliser ce contrat doit respecter la meme structure pour declarer
    // les propriétés ou les methodes
    firstName: string;
    // ? ==> pour dire que c'est une propriété facultatif n'est pas obligatoire
    age?: number;
    [propName: string]: any ;
    // creer une methode qui sera redifini dans les methodes ou class ou object
    getNamePerson(lastName: string):void ;

}

function getNamePerson (person:NamedPerson ) :void{
    console.log('person implement le contrat ' , person);
}

function changeName(person:NamedPerson):void{
    person.firstName = 'Kinja';
}
const person3 : NamedPerson ={
    firstName:"Redal",
    hobbies:["Sports" , "Technologie"] ,
    getNamePerson(lastName:string){
        console.log("Hi, I am " + lastName) ;
    }
};

//getNamePerson({firstName:'Never' , age:45 }); // la propriété age n'est pas obligatoire
changeName(person3);
getNamePerson(person3);
person3.getNamePerson('Start');

class Person1 implements NamedPerson {
    firstName: string;
    getNamePerson(lastName: string):void{
        console.log("Hello , I am " , lastName)
    }
}

const personTest = new Person1 ;
personTest.firstName ='Recoba' ;
getNamePerson(personTest);
personTest.getNamePerson("Anything");

// Function Types
// pour declarer une interface de type fonction
interface DoubleValueFunc{
    (number1:number , number2:number) : number ;
}
// on déclare la variable de type  fonction on peu
let myDoubleValueFunc : DoubleValueFunc ;
// on defini le comportement
myDoubleValueFunc = function( number1 :number , number2:number){
    return (number1 + number2)/2;
}
// on ne peut plus redifinir la methode car l'implementation de contrat exige des restriction d'utilisation
/*myDoubleValueFunc = function( number1 :number , number2:number , number3:number){
    return (number1 + number2 + number3)/2;
}*/
console.log(myDoubleValueFunc(20,30));

// interface Inheritance
interface AgePerson extends NamedPerson {
    age:number;
}
const oldPerson : AgePerson = {
    age:35,
    firstName:'Skimo',
    getNamePerson(lastName:string){
        console.log("oldPerson --> Hello " ,lastName  );
    }
}
console.log('oldPerson ==> ' , oldPerson);

/**
 * important si vous regarder le code javascript generer , l'interface n'est pas compilé , elle est ignorée
 * c'est le compilateur qui ignore l'interface car javascript ne supporte pas la notion d'interface
 * l'interface est seulement un contrat utile au moment de la compilation
 * mais pas au moment de la creation de l'executable , ici c'est les fichiers .js
 */
