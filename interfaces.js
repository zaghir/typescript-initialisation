function getNamePerson(person) {
    console.log('person implement le contrat ', person);
}
function changeName(person) {
    person.firstName = 'Kinja';
}
var person3 = {
    firstName: "Redal",
    hobbies: ["Sports", "Technologie"],
    getNamePerson: function (lastName) {
        console.log("Hi, I am " + lastName);
    }
};
//getNamePerson({firstName:'Never' , age:45 }); // la propriété age n'est pas obligatoire
changeName(person3);
getNamePerson(person3);
person3.getNamePerson('Start');
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.getNamePerson = function (lastName) {
        console.log("Hello , I am ", lastName);
    };
    return Person1;
}());
var personTest = new Person1;
personTest.firstName = 'Recoba';
getNamePerson(personTest);
personTest.getNamePerson("Anything");
// on déclare la variable de type  fonction on peu
var myDoubleValueFunc;
// on defini le comportement
myDoubleValueFunc = function (number1, number2) {
    return (number1 + number2) / 2;
};
// on ne peut plus redifinir la methode car l'implementation de contrat exige des restriction d'utilisation
/*myDoubleValueFunc = function( number1 :number , number2:number , number3:number){
    return (number1 + number2 + number3)/2;
}*/
console.log(myDoubleValueFunc(20, 30));
var oldPerson = {
    age: 35,
    firstName: 'Skimo',
    getNamePerson: function (lastName) {
        console.log("oldPerson --> Hello ", lastName);
    }
};
console.log('oldPerson ==> ', oldPerson);
/**
 * important si vous regarder le code javascript generer , l'interface n'est pas compilé , elle est ignorée
 * c'est le compilateur qui ignore l'interface car javascript ne supporte pas la notion d'interface
 * l'interface est seulement un contrat utile au moment de la compilation
 * mais pas au moment de la creation de l'executable , ici c'est les fichiers .js
 */
