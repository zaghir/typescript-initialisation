// string
var myName = 'Youssef';
/**
 * en javascript les variables sont dynamique , une seule variable peut avoir plusieurs type de données
 * en typescript les variales sont static , elle accepte un seul type de donnée
 * on cet exemple on va avoir le message d'erreur error TS2322: Type '35' is not assignable to type 'string'
 * probleme de type de données car la variable myName est de type string car elle est initialisé par une valeur de type string
 */
//myName = 35 ;
// number
var myAge = 35;
// myAge= 'Youssef';  // probléme à la diffence de type de variable string # number
// boolean
var isAcived = true;
//isAcived = 1 ; // probléme à la diffence de type de variable boolean # number
/** assign types ==> assigner ou attribuer differents types au variable
 * , on recupére le comportement des types dynamiques de variables de javascript
 * si on n' a pas affecter une valeur à la variable le compilateur typescript le concider comme de type any
 * ce type est de type any en typescript
 */
var myRealAge;
myRealAge = 35; // ici est accpeté comme un number
myRealAge = '35'; // ici est accpeté comme un string
/**
 * typescprit est un langage typé qui permet de detecter les problemes au moment de la compilation
 * donc chaque variable doit avoir un type
 *    string
 *    number
 *    boolean
 *    any
 */
var myRealAge2;
myRealAge2 = 35;
// array 
var voitures = ['MERCEDES', 'BMW', 'MAZERATI'];
// initialiser le tableau par des numéro
// voitures =[1 , 2 , 3] ; // problème de type de tableau  Type 'number' is not assignable to type 'string'.
console.log(typeof voitures); // on recuper un resultat = object
// pour résoudre le problème dans ce cas on utilise la déclaration implicite
var voitures1 = ['MERCEDES', 'BMW', 'MAZERATI'];
voitures1 = [1, 2, 3]; // le tableau accepte diffèrent type de valeur
/**
 * tuples
 * si on veut creer un type de variable avec une structure defini on peut utiliser un tuple
 * @type {[number,string]}
 */
var voitureTuple = [1, 'BMW'];
console.log('voitureTuple ==>', voitureTuple);
/**
 * enum creer un enumerateur
 */
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Banane"] = 0] = "Banane";
    Fruit[Fruit["Orange"] = 200] = "Orange";
    Fruit[Fruit["Pomme"] = 201] = "Pomme";
    Fruit[Fruit["Kiwi"] = 3] = "Kiwi";
    Fruit[Fruit["Poire"] = 4] = "Poire";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.Kiwi;
console.log('Banane', Fruit.Banane, 'Orange', Fruit.Orange, 'pomme', Fruit.Pomme, 'kiwi', Fruit.Kiwi, 'poire', Fruit.Poire);
/*
 any
 */
var voitureAny = "Alfa romeo";
console.log('Voiture: ', voitureAny);
// typescript a créé la voiture de type string
// la réaffectation de la variable par un autre type n'est pas accepté
/*voitureAny ={
    marque:"MERCEDES",
    moteur:"DIESEL"
};*/
console.log('voitureAny: ', voitureAny);
// pour résoudre ce problème en change le type de la variable voiture par any
var voitureAny2 = "Alfa romeo";
console.log('voitureAny2: ', voitureAny2);
voitureAny2 = {
    marque: "MERCEDES",
    moteur: "DIESEL"
};
console.log('voitureAny2: ', voitureAny2);
// functions
function returnName() {
    return 'Ralf';
}
//void
function sayHello() {
    console.log("Hello! ");
}
// arguments types
function multiply(value1, value2) {
    return value1 * value2;
}
/* les arguments de la fonction multiply ne sont pas type donc il sont de type any
* si on execute la fonction on rerupere une valeur NaN => not a number
* c'est logilt 1 *'Ralf' erreur*/
console.log(multiply(1, 'Ralf'));
/* pour resoudre ce probleme on va typé les paramere
* le compilateur detecte l'erreur dés la compilation et non au moment de l'execution*/
function multiplyType(value1, value2) {
    return value1 * value2;
}
function multiplyType10(value1, value2) {
    return value1 * value2 * 10;
}
console.log(multiply(1, 1));
// function as type
var fnMultiply; // type any
fnMultiply = sayHello; //
fnMultiply();
fnMultiply = multiplyType; // ref vers la function
console.log('----' + fnMultiply(5, 2));
/* fnMultiply est de type any elle accepte tous les type
 * pour que fnMultiply soit un type function
 * on lui affect au debut un interface fonctionnel avec les memes parametre de la function
 * le comportement est defini dans la function
  */
var fnMultiply2; // ici on typé la varible
fnMultiply2 = multiplyType; // ici on specifi l'implementation de comportement par la function
console.log('comportement avec  multiplyType', fnMultiply2(2, 5));
fnMultiply2 = multiplyType10; // c'est transparant car on passe par une interface fonctionnel pour la definition de la varible
console.log('comportement avec  multiplyType10', fnMultiply2(2, 5));
//object
var userData = {
    name: 'Youssef',
    age: 40
};
/*on peut definir l'objet avec sa partie declarative ou type definition {name:string , age:number}
et par sa valeur apres le signe egale  = {cc:'' ,bb:'' }
 */
// userData ={
//     a:'toto'
//     b:45
// };
/* si on assige a l'objet userData des propriété qui differe de sa definition
* le comilateur nous dit que c'est pas compatible */
// complex object
var complex = {
    data: [100, 50.5, 10],
    output: function (all) {
        console.log('all---> ', all);
        return this.data;
    }
};
console.log('object complex ==>', complex, 'output function ==> ', complex.output(true));
complex = {
    data: [200, 20.5, 2],
    output: function (all) {
        var _this = this;
        console.log('all--->', all);
        this.data.forEach(function (e, index) { _this.data[index] = e * 10; });
        return this.data;
    }
};
console.log('object complex ==>', complex, 'output function ==> ', complex.output(true));
var complex2;
complex2 = {
    data: [1, 1.5, 2],
    output: function (all) {
        console.log('all--->', all);
        return this.data;
    }
};
// union types
// definier une variable avec un ensemble de type
var myRealAgeNow = 40; // on accepte le type number ou string
myRealAgeNow = '40';
//myRealAgeNow = true ; les valeurs de type boolean ne seront pas acceptés ,
// check type
var testTypeValue = 30;
if (typeof testTypeValue == 'number') {
    console.log("testTypeValue is a number ");
}
// never
/* type never permet de dire au compliateur que une fonction ne renvoie jamais une valeur
* never est plus puissante que void , au moment ou la fonction peut envoyer une exception
* avec void le compilateur catch cette exception mais avec never la fonction ne renvoie jamais une valeur*/
function neverReturns() {
    throw new Error('An error!');
}
// nullable type
/* pour que le compilateur accepte la valeur null
 il faut configuer dans le fichier tsconfig.ts l'objet compilerOptions.strictNullChecks = false
 si non il faut specifier pendant la déclaration de la variable une union des type ex : canBeNull : number | null
*/
var canBeNull = 7; // on accepte le type numbre et null
canBeNull = null;
var canAlsoBeNull; // la variable  n'est pas typé donc elle a une valeur undefined
console.log("canAlsoBeNull", canAlsoBeNull);
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    desposit: function (value) {
        return this.money += value;
    }
};
var myself = {
    name: "Ralf",
    bankAcount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAcount.desposit(3000);
console.log(myself);
// compiler is more smart
function controlMe(isTrue, somthingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    /*on a activer l'option  strictNullChecks :true
     * le compilateur detecte que cette variable renvoie un null si le test if(isTrue) et faut
      * la variable sera pas assigné dans la fonction renvoie un null*/
    result = 33; // pour evité le probleme
    /* on a ajouter aussi dans le fichier tsconfig.ts le parametre noUnusedParameters: true
    * le compilateur detecte que la variable somthingElse est nul part utilisé
    * donc il affichie un probleme de compilation */
    var som = somthingElse;
    /*ces parametres de compilateur permet d'avoir un code propre*/
    return result;
}
//# sourceMappingURL=script.js.map