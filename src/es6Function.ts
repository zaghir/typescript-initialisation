// quand on compile  on utilise  tsc -w  ==> -w  en mode watchdog
// let & const
console.log("LET & CONST")
let variable ="Test" ;
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels=99;  le compilateur detecte maxLevels est une constant donc elle est on mode readonly

// Block scope
function reset(){
    //console.log(variable);  la variable=> variable je ne peux pas acceder à celle déclarer hors la methode reset()
    // pour le faire il faut passer en parametre la valeur de la variable
    // on ne change pas la valeur de la variable meme si elle est declarer avec le meme nom
    //c'est le comportement de Block scope
    let variable = null ;
    console.log("variable declaré dans reset() ==>",variable);
}
reset();
console.log("variable hors methode ==>",variable);

// Arrow functions  fonctions flèche
console.log("ARROW FUNCTION");
// ecrire une methode addNumbers avec l'encienne methode
const addNumbers = function(number1:number , number2:number) :number{
    return number1+number2;
}
console.log("addNumbers(1,2) ==> ",addNumbers(1,2));
console.log("addNumbers(7,3) ==> ",addNumbers(7,3));
// ecrire une methode multiplyNumbers avec la nouvelle methode Arraw function
// si on a dans le comportement de la methode une seule instruction on peut l'ecrire sur une ligne
// le compilateur determin le type de retour qui est ici de type number, si non on passe par l'interface fonctionnelle deja determiné avant 
const multiplyNumbers = (number1:number , number2:number)=> number1*number2;
// ici la comportement de la methode exectute plusieurs instructions donc on met le comportement dans une block mustash
const addNumbers2 = (number1:number , number2:number)=>{
  const a:number = 10 ;
  return number1 + number2 +a ;
};
console.log("multiplyNumbers(2,3)==> ", multiplyNumbers(2,3));
console.log("addNumbers2(2,3)==> ", addNumbers2(2,3));
/* function Arrow  with no arguements ici on a une fonction fléché sans arguments*/
const helloRalf = ()=> {
  console.log("helloRalf() ==> Hello Ralf!")
};
helloRalf();
// si on a un seul argument c'est possible de ne pas mettre les ()
// et recuperer directement la valeur de la variable la methode , mais il est toujous bien de type la variable
const greetFriend = friend  => console.log("greetFriend() ==> ",friend) ;
greetFriend("TITI");

// Default Parameters
console.log("DEFAUTL PRAMANETERS") ;
/*
* on a ajouter une valeur par defaut = 10 au parametere de la methode
* au moment ou on appelle à la methode sans parametre la valeur 10 sera prise
* la valeur de end = start-2 , cette syntaxe sera accepter par le compilateur
* si seulement le param end est declaré apres le param start si non c'est une erreur de compilation
* */
const countdown  =(start:number = 10 ,end :number = start-2):void => {
    console.log("start au début ==> ",start) ;
    while(start> 0){
        start--;
    }
    console.log("start apres ==>" ,start ,"end ==>",end);
}
countdown();

// Rest & Spread
 console.log("REST & SPREAD") ;
 const numbers = [1,100,60,78] ;
 console.log(Math.max(1,100,60,78)) ;
 // ... c'est la fonction Spread de Es6  elle permet de dispreser ou eclater les elements de tableau
// console.log(Math.max(numbers)) ;   ca ne marche pas le compilateur ne peut pas itérer dans un iterator 
// sans passer par une boocle  on utilise un Spread avec les 3 points ...
// c'est le compilateur qui itere en arriere plan 
console.log(Math.max(...numbers));
console.log("...numbers ==> " ,...numbers);

/*la fonction Rest premet de recuprer un ensembre de parametre envoyer à la methode
et de creer un tableau a partir des valeurs envoyer*/
const makeArray = function(name:string , ...args:number[]){
    console.log(name);
    return args ;
}
// le premier parametre est le nom , puis avec la fonction rest ==> ...{Var} on crée un tableau
console.log("makeArray ==>" , makeArray("Ralf",1,25,6,2));

// destructuring   la fonction d'eclatement ou destruction
console.log("DESTRUCTRING");
const myCars =["BMW","ALFA","AUDI","MERCEDES"];
// si on veut récuperer le nom de la voiture dans une variable
let voiture1 = myCars[0];
let voiture2 = myCars[1];
console.log(voiture1,voiture2);
// avec ES6 on a la possibilité d' eclater les valeurs de tableau sur des variables
// --> for destructuring an array we should use [] 
const [bmw , alfa , audi] = myCars ;
console.log("voiture1 ==>" , bmw , "voiture2 ==>" , alfa , "voiture 3 ==> ", audi);

// destructuring for Object
const person = { nom:"Ralf", prenom:"SNK" , adress:"rue 123"} ;
// si on veux recuperer les params de l'objet et les assignés dans des variables ;
const nomP = person.nom , prenomP = person.prenom , adressP =person.adress;
console.log("nomP = ",nomP , "prenomP = ", prenomP , "adressP = " ,adressP);
//on va utiliser la fonction de destructuring pour recuprer les valeurs dans les variables
// il faut avoir le meme nom des propriétés qu'on veux recuperer depuis l'objet
// --> for destructuring an object we should use {} 
const {nom ,prenom ,adress} = person ;
console.log("nom = ",nom , "prenom = ", prenom , "adress = " ,adress);
// il est possible de changer le nom des variables
const {nom:nomS ,prenom:prenomS ,adress:adressS} = person ;
console.log("nom = ",nomS , "prenom = ", prenomS , "adress = " ,adressS);

// Template Literals  c'est une fonction etendue de type string
// utilisation de backtick ==> ``  pour creer une string sur plusieurs lignes
// et injecter une variable dans le text par ${nomVariable} sans l'utilisation de la concatenation
const telephone ="XIAOMI REDMI NOTE4" ;
const monTelephone = `Mon telephone est ${telephone} 
c'est une marque chinoise
 qui propose des produits de bonne qualité `;
console.log("monTelephone ==> " ,monTelephone)

const exerciceES = `// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
    return value * 2;
};
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);`;
const double =(value:number)=>  value*2 ;
console.log(double(10));
const greet = (name:string = 'Ralf'):void=>{
    console.log(`Hello ${name}`);
}
greet() ;
greet("TITI");

// Exercise - Spread Operator 
const numbersExercice =[-3 , 33 , 38 , 5 ] ;
console.log('Min des valeurs ' , Math.min(...numbersExercice));

// Exercise - Spread Operator 
const newArrayExercie = [66 ,2];
newArrayExercie.push(...newArrayExercie) ;
console.log(newArrayExercie);

// Exercise - Destructuring Arrays  
const testResults = [3.89 ,2.99,1.38];
const [result1 , result2 , result3] =testResults ;
console.log(result1 , result2 , result3) ;

// Exercise - Destructuring Object  
const scientist = {firstName: "Will", experience: 12};
const {firstName:firstNameExercice , experience :experienceExercie } =scientist ;
console.log(firstNameExercice , experienceExercie );



