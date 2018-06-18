// Simple Generic
function echo(data) {
    return data;
}
// le probleme de any
// quand on demande au typescript une propriété ou une fonction sur la methode echo
// on recuper des methode comme .length sur type numerique alors qu'il ne faut pas avoir cette fonction sur ce type
// le type any donc est permesif
console.log(echo("Max"));
console.log(echo(35));
console.log(echo({ name: "Ralf", age: 35 }));
// quand j'utilise cette fonction je dis au typescript donne moi ce type T et je vais l'utiliser comme type
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(35)); // je ne peux pas avoir la fonction length car le compilateur detecte le type Generic
console.log(betterEcho(35)); // c'est la meme declaration
console.log(betterEcho({ name: "Ralf", age: 35 })); //
// Built-in Generics
// le type tableau peut accepter plusieurs type comme valeurs
// pour securiser un peu les valeurs du tableau
// on specifie le type explicitement et avec la genericité le compilateur accepte ou pas les veleurs qui vont etre saisient
var testResults1 = [1.26, 1.52];
testResults1.push(0.12);
//testResults1.push("15.2") ; // c'est valeur n est pas accepté car c'est un string
console.log("generics testResults ==> ", testResults1);
// Arrays avec un type generic
function printAll(args) {
    args.forEach(function (element) {
        console.log("element ==> ", element);
    });
}
// ca fonctionne si on a pas mis explisitement le type ==> <string>
printAll(["BMW", "AUDI", "MERCEDS", "ALFA"]);
// Generic Types
// variable de type generic
// tous ce qui entre : et = c'est la declaration de type ici c'est le bloc  <T>(data: T) => T
// je peux changer le type de fonction assigné à cette variable sans faire d'autres modifications exp ici betterEcho je peux utiliser echo
var echo2 = betterEcho;
console.log(echo2('creation d une variable de type generic'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10; // cette classe à un probléme , si je change  10 par "10" type string
simpleMath.multiplyValue = 10; //je recupper une valeur de type NaN not a number alors que le compilateur ne detecte pas l'erreur
console.log(simpleMath.calculate());
// pour resoudre ce probleme
var SimpleMathCorrection = /** @class */ (function () {
    function SimpleMathCorrection() {
    }
    SimpleMathCorrection.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // le plus pour dire au compilateur que c'est une variable de type numeric
    };
    return SimpleMathCorrection;
}());
var simpleMathCorrection = new SimpleMathCorrection(); // par le genericité plus la definition des types on ne peut plus typé par d'autre type boolean
// simpleMathCorrection.baseValue = 10 ;
simpleMathCorrection.baseValue = 10;
// on peut utiliser le type number et string  ==> extends number | string , avec le  + dans la methode le compilateur fait un transtipage vers de number
simpleMathCorrection.baseValue = "10";
simpleMathCorrection.multiplyValue = 10;
console.log(simpleMathCorrection.calculate());
