var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// quand on compile  on utilise  tsc -w  ==> -w  en mode watchdog
// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels=99;  le compilateur detecte maxLevels est une constant donc elle est on mode readonly
// Block scope
function reset() {
    //console.log(variable);  la variable=> variable je ne peux pas acceder à celle déclarer hors la methode reset()
    // pour le faire il faut passer en parametre la valeur de la variable
    // on ne change pas la valeur de la variable meme si elle est declarer avec le meme nom
    //c'est le comportement de Block scope
    var variable = null;
    console.log("variable declaré dans reset() ==>", variable);
}
reset();
console.log("variable hors methode ==>", variable);
// Arrow functions  fonctions flèche
console.log("ARROW FUNCTION");
// ecrire une methode addNumbers avec l'encienne methode
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log("addNumbers(1,2) ==> ", addNumbers(1, 2));
console.log("addNumbers(7,3) ==> ", addNumbers(7, 3));
// ecrire une methode multiplyNumbers avec la nouvelle methode Arraw function
// si on a dans le comportement de la methode une seule instruction on peut l'ecrire sur une ligne
// le compilateur determin le type de retour qui est ici de type number, si non on passe par l'interface fonctionnelle deja determiné avant 
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
// ici la comportement de la methode exectute plusieurs instructions donc on met le comportement dans une block mustash
var addNumbers2 = function (number1, number2) {
    var a = 10;
    return number1 + number2 + a;
};
console.log("multiplyNumbers(2,3)==> ", multiplyNumbers(2, 3));
console.log("addNumbers2(2,3)==> ", addNumbers2(2, 3));
/* function Arrow  with no arguements ici on a une fonction fléché sans arguments*/
var helloRalf = function () {
    console.log("helloRalf() ==> Hello Ralf!");
};
helloRalf();
// si on a un seul argument c'est possible de ne pas mettre les ()
// et recuperer directement la valeur de la variable la methode , mais il est toujous bien de type la variable
var greetFriend = function (friend) { return console.log("greetFriend() ==> ", friend); };
greetFriend("TITI");
// Default Parameters
console.log("DEFAUTL PRAMANETERS");
/*
* on a ajouter une valeur par defaut = 10 au parametere de la methode
* au moment ou on appelle à la methode sans parametre la valeur 10 sera prise
* la valeur de end = start-2 , cette syntaxe sera accepter par le compilateur
* si seulement le param end est declaré apres le param start si non c'est une erreur de compilation
* */
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 2; }
    console.log("start au début ==> ", start);
    while (start > 0) {
        start--;
    }
    console.log("start apres ==>", start, "end ==>", end);
};
countdown();
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 100, 60, 78];
console.log(Math.max(1, 100, 60, 78));
// ... c'est la fonction Spread de Es6  elle permet de dispreser ou eclater les elements de tableau
// console.log(Math.max(numbers)) ;   ca ne marche pas le compilateur ne peut pas itérer dans un iterator 
// sans passer par une boocle  on utilise un Spread avec les 3 points ...
// c'est le compilateur qui itere en arriere plan 
console.log(Math.max.apply(Math, numbers));
console.log.apply(console, __spreadArrays(["...numbers ==> "], numbers));
/*la fonction Rest premet de recuprer un ensembre de parametre envoyer à la methode
et de creer un tableau a partir des valeurs envoyer*/
var makeArray = function (name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    return args;
};
// le premier parametre est le nom , puis avec la fonction rest ==> ...{Var} on crée un tableau
console.log("makeArray ==>", makeArray("Ralf", 1, 25, 6, 2));
// destructuring   la fonction d'eclatement ou destruction
console.log("DESTRUCTRING");
var myCars = ["BMW", "ALFA", "AUDI", "MERCEDES"];
// si on veut récuperer le nom de la voiture dans une variable
var voiture1 = myCars[0];
var voiture2 = myCars[1];
console.log(voiture1, voiture2);
// avec ES6 on a la possibilité d' eclater les valeurs de tableau sur des variables
// --> for destructuring an array we should use [] 
var bmw = myCars[0], alfa = myCars[1], audi = myCars[2];
console.log("voiture1 ==>", bmw, "voiture2 ==>", alfa, "voiture 3 ==> ", audi);
// destructuring for Object
var person = { nom: "Ralf", prenom: "SNK", adress: "rue 123" };
// si on veux recuperer les params de l'objet et les assignés dans des variables ;
var nomP = person.nom, prenomP = person.prenom, adressP = person.adress;
console.log("nomP = ", nomP, "prenomP = ", prenomP, "adressP = ", adressP);
//on va utiliser la fonction de destructuring pour recuprer les valeurs dans les variables
// il faut avoir le meme nom des propriétés qu'on veux recuperer depuis l'objet
// --> for destructuring an object we should use {} 
var nom = person.nom, prenom = person.prenom, adress = person.adress;
console.log("nom = ", nom, "prenom = ", prenom, "adress = ", adress);
// il est possible de changer le nom des variables
var nomS = person.nom, prenomS = person.prenom, adressS = person.adress;
console.log("nom = ", nomS, "prenom = ", prenomS, "adress = ", adressS);
// Template Literals  c'est une fonction etendue de type string
// utilisation de backtick ==> ``  pour creer une string sur plusieurs lignes
// et injecter une variable dans le text par ${nomVariable} sans l'utilisation de la concatenation
var telephone = "XIAOMI REDMI NOTE4";
var monTelephone = "Mon telephone est " + telephone + " \nc'est une marque chinoise\n qui propose des produits de bonne qualit\u00E9 ";
console.log("monTelephone ==> ", monTelephone);
var exerciceES = "// Exercise 1 - Maybe use an Arrow Function?\nvar double = function(value) {\n    return value * 2;\n};\nconsole.log(double(10));\n\n// Exercise 2 - If only we could provide some default values...\nvar greet = function (name) {\n    if (name === undefined) { name = \"Max\"; }\n    console.log(\"Hello, \" + name);\n};\ngreet();\ngreet(\"Anna\");\n\n// Exercise 3 - Isn't there a shorter way to get all these Values?\nvar numbers = [-3, 33, 38, 5];\nconsole.log(Math.min.apply(Math, numbers));\n\n// Exercise 4 - I have to think about Exercise 3 ...\nvar newArray = [55, 20];\nArray.prototype.push.apply(newArray, numbers);\nconsole.log(newArray);\n\n// Exercise 5 - That's a well-constructed array.\nvar testResults = [3.89, 2.99, 1.38];\nvar result1 = testResults[0];\nvar result2 = testResults[1];\nvar result3 = testResults[2];\nconsole.log(result1, result2, result3);\n\n// Exercise 6 - And a well-constructed object!\nvar scientist = {firstName: \"Will\", experience: 12};\nvar firstName = scientist.firstName;\nvar experience = scientist.experience;\nconsole.log(firstName, experience);";
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = 'Ralf'; }
    console.log("Hello " + name);
};
greet();
greet("TITI");
// Exercise - Spread Operator 
var numbersExercice = [-3, 33, 38, 5];
console.log('Min des valeurs ', Math.min.apply(Math, numbersExercice));
// Exercise - Spread Operator 
var newArrayExercie = [66, 2];
newArrayExercie.push.apply(newArrayExercie, newArrayExercie);
console.log(newArrayExercie);
// Exercise - Destructuring Arrays  
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise - Destructuring Object  
var scientist = { firstName: "Will", experience: 12 };
var firstNameExercice = scientist.firstName, experienceExercie = scientist.experience;
console.log(firstNameExercice, experienceExercie);
//# sourceMappingURL=es6Function.js.map