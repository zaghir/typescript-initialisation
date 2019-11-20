// string
let myName ='Youssef';
/**
 * en javascript les variables sont de type dynamique , une seule variable peut avoir plusieurs type de données
 * en typescript les variales sont de type static , elles acceptent un seul type de donnée
 * on cet exemple on va avoir le message d'erreur error TS2322: Type '35' is not assignable to type 'string'
 * probleme de type de données car la variable myName est de type string car elle est initialisé par une valeur de type string
 */
//myName = 35 ;

// number
let myAge = 35 ;
// myAge= 'Youssef';  // probléme à la diffence de type de variable string # number

// boolean
let isAcived = true;
//isAcived = 1 ; // probléme à la diffence de type de variable boolean # number

/** assign types ==> assigner ou attribuer differents types au variable
 * , on recupére le comportement des types dynamiques de variables de javascript
 * si on n' a pas affecter une valeur à la variable le compilateur typescript le concider comme de type any
 * ce type est de type any en typescript
 */
let myRealAge ;
myRealAge = 35 ; // ici est accepté comme un number
myRealAge = '35' ; // ici est accepté comme un string

/**
 * typescprit est un langage typé qui permet de detecter les problemes au moment de la compilation
 * donc chaque variable doit avoir un type
 *    string
 *    number
 *    boolean
 *    any
 */
let myRealAge2: number ;
myRealAge2 = 35 ;

// array 
let voitures = ['MERCEDES', 'BMW', 'MAZERATI'];
// initialiser le tableau par des numéro
// voitures =[1 , 2 , 3] ; // problème de type de tableau  Type 'number' is not assignable to type 'string'.
console.log(typeof voitures); // on recuper un resultat = object

// pour résoudre le problème dans ce cas on utilise la déclaration implicite
let voitures1: any[] = ['MERCEDES', 'BMW', 'MAZERATI'];
voitures1 =[1 , 2 , 3] ; // le tableau accepte diffèrent type de valeur


/**
 * tuples
 * si on veut creer un type de variable avec une structure defini on peut utiliser un tuple
 * type {[number,string]}
 */
let voitureTuple :[number, string] = [1, 'BMW'];
console.log('voitureTuple ==>' , voitureTuple);

/**
 * enum creer un enumerateur
 */
enum Fruit{
    Banane, //0 le compilateur assigne des nombres incrementé commence par 0
    Orange = 200, //1   on peut changer la valeur retour
    Pomme ,  // 201 le compilateur fait la suite  
    Kiwi= 3 ,    //3
    Poire // le compilateur n'accepte pas des valeur de type string
}
let myFruit : Fruit = Fruit.Kiwi;
console.log('Banane',Fruit.Banane , 'Orange',Fruit.Orange ,'pomme' , Fruit.Pomme ,'kiwi',Fruit.Kiwi ,'poire',Fruit.Poire);

/*
 any
 */
let voitureAny  = "Alfa romeo" ;
console.log('Voiture: ' , voitureAny) ;
// typescript a créé la voiture de type string
// la réaffectation de la variable par un autre type n'est pas accepté
/*voitureAny ={
    marque:"MERCEDES",
    moteur:"DIESEL"
};*/
console.log('voitureAny: ' , voitureAny) ;
// pour résoudre ce problème en change le type de la variable voiture par any
let voitureAny2:any  = "Alfa romeo" ;
console.log('voitureAny2: ' , voitureAny2) ;
voitureAny2 ={
    marque:"MERCEDES",
    moteur:"DIESEL"
};
console.log('voitureAny2: ' , voitureAny2) ;

// functions
function returnName() :string{
    return'Ralf'
}

//void
function sayHello():void{
    console.log("Hello! ")
}

// arguments types
function multiply(value1 , value2) :number{
    return value1*value2;
}
/* les arguments de la fonction multiply ne sont pas typé donc ils sont de type any
* si on execute la fonction on rerupere une valeur NaN => not a number
* c'est logilt 1 *'Ralf' erreur*/
console.log(multiply(1,'Ralf'));

/* pour resoudre ce probleme on va typé les paramere
* le compilateur detecte l'erreur dés la compilation et non au moment de l'execution*/
function multiplyType(value1:number , value2:number) :number{
    return value1*value2;
}
function multiplyType10(value1:number , value2:number) :number{
    return value1*value2*10;
}
console.log(multiply(1,1));

// function as type
let fnMultiply  ; // type any
fnMultiply = sayHello; //
fnMultiply();
fnMultiply = multiplyType ; // ref vers la function
console.log('----'+fnMultiply(5,2));

/* fnMultiply est de type any elle accepte tous les type
 * pour que fnMultiply soit un type function
 * on lui affect au debut un interface fonctionnel avec les memes parametre de la function
 * le comportement est defini dans la function
  */
let fnMultiply2 :(a:number , b: number) => number ; // ici on typé la varible
fnMultiply2 = multiplyType ; // ici on specifi l'implementation de comportement par la function
console.log('comportement avec  multiplyType',fnMultiply2(2,5));
fnMultiply2 = multiplyType10 ; // c'est transparant car on passe par une interface fonctionnel pour la definition de la varible
console.log('comportement avec  multiplyType10',fnMultiply2(2,5));

//object
let userData : {name:string , age:number} ={
    name:'Youssef' ,
    age:40
}
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
let complex: { data :number[] , output:(all:boolean) => number[]} =
    {
        data : [100 , 50.5 , 10] ,
        output :function(all:boolean):number[]{
            console.log('all---> ' , all);
            return this.data ;
        }
    };
console.log('object complex ==>' , complex , 'output function ==> ', complex.output(true));
complex= {
    data : [200 , 20.5 , 2] ,
    output :function(all:boolean):number[]{
        console.log('all--->',all);
        this.data.forEach((e , index)=> { this.data[index] = e*10 ;});
        return this.data  ;
    }
}
console.log('object complex ==>' , complex , 'output function ==> ', complex.output(true));

// type alias
/* enregister un type dans un mots clé , l'utilisé comme type pour definir d'autre object
 * pour changer la definition on change selement sur l alias
 * pour appliquer la modification sur toutes les variables de ce type
 * il ya aussi les classe pour definir la structure de l'object */
type Complex = { data :number[] , output:(all:boolean) => number[]} ;
let complex2 : Complex ;
complex2 = {
    data : [1 , 1.5 , 2] ,
    output :function(all:boolean):number[]{
        console.log('all--->' ,all);
        return this.data ;
    }
};

// union types
// definier une variable avec un ensemble de type
let myRealAgeNow :number | string = 40 ;  // on accepte le type number ou string
myRealAgeNow = '40';
//myRealAgeNow = true ; les valeurs de type boolean ne seront pas acceptés ,

// check type
let testTypeValue = 30;
if(typeof testTypeValue == 'number' ){
    console.log("testTypeValue is a number ");
}

// never
/* type never permet de dire au compliateur que une fonction ne renvoie jamais une valeur
* never est plus puissante que void , au moment ou la fonction peut envoyer une exception
* avec void le compilateur catch cette exception mais avec never la fonction ne renvoie jamais une valeur*/
function neverReturns():never{
    throw new Error('An error!') ;
}

// nullable type
/* pour que le compilateur accepte la valeur null
 il faut configuer dans le fichier tsconfig.ts l'objet compilerOptions.strictNullChecks = false
 si non il faut specifier pendant la déclaration de la variable une union des type ex : canBeNull : number | null
*/
let canBeNull : number | null = 7 ; // on accepte le type numbre et null
canBeNull = null ;
let canAlsoBeNull; // la variable  n'est pas typé donc elle a une valeur undefined
console.log("canAlsoBeNull", canAlsoBeNull);
canAlsoBeNull = null ;  // le compilateur type cette variable avec le type null qui n 'a rien a voir avec le type any si on set canAlsoBeNull = 12 le compilateur sort error TS322 type 'number' is not assignable to type 'null'
let canThisBeAny : number | null = null ;
canThisBeAny = 12;

// exercice type bank
type Bankaccount = { money :number , desposit:(value:number)=>void} ;
type Myself = { name:string , bankAcount:Bankaccount , hobbies : string[]};

let bankAccount : Bankaccount = {
    money:2000 ,
    desposit:function(value:number):void{
        return this.money +=value;
    }
};

let myself :Myself = {
    name:"Ralf",
    bankAcount:bankAccount,
    hobbies:["Sports","Cooking"]
};

myself.bankAcount.desposit(3000);
console.log(myself);

// in the tsconfig.json ==>   "noEmitOnError": true 
/* should't have  .js file if we have an error by default Typescript creat .js file if we have or not a error after compilation  
on demande au compilateur meme si on a une erreur avec type script genere le fichier .js*/

// compiler is more smart
function controlMe(isTrue :boolean , somthingElse:boolean){
    let result :number ;
    if(isTrue){
        result = 12
    }
    /*on a activer l'option  strictNullChecks :true
     * le compilateur detecte que cette variable renvoie un null si le test if(isTrue) et faut
      * la variable sera pas assigné dans la fonction renvoie un null*/
    result = 33 ;  // pour evité le probleme
    /* on a ajouter aussi dans le fichier tsconfig.ts le parametre noUnusedParameters: true
    * le compilateur detecte que la variable somthingElse est nul part utilisé
    * donc il affichie un probleme de compilation */
    let som:boolean = somthingElse  ;
    /*ces parametres de compilateur permet d'avoir un code propre*/
    return result ;
}

