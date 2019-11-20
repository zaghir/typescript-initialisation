"use strict";
/** pour la compilation en a a le param --outFile pour regroupere tous les fichier dans un seul unique fichier .js
 * ===> tsc app.ts -- outFile app.js
*/
// namespace
/*
 c'est l'importation des fichiers proposé par typescript
*/
/// <reference path="./math/circleNamespace.ts" />
/// <reference path="./math/rectangleNamespace.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CircleMath = MyMath.Circle; // CircleMath c'esr un alias 
// l'utilsation des namespace permet d'eviter le globle scope par toutes les scope des variables creer 
// ca permet de structurer le code de l'application
console.log("MyMath.PI ==>", CircleMath.PI);
console.log("MyMath.calculateRectangle(3,2) ==>", MyMath.Rectangle.calculateRectangle(3, 2));
console.log("MyMath.calculateSufaceCerle(3) ==>", CircleMath.calculateSufaceCerle(3));
/*note module n'est pas trop declarative de ce qu'il a besoin pour fonctionner
  ajouter d'autre dependances par exemple
  javascript 6 propose deja de solution pour gerer ce probleme pour les dependance */
// module
// pas besoin de specifier l'extention car le compilateur le reconné  
var Circle = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(Circle.PI);
console.log(Circle.calculateSufaceCerle(2));
console.log(rectangle_1.calculateRectangle(2, 3));
/**il faut installer un gestionnaire de fichier si non le moteur ne peut gerer cette partie
 * et charger les modules CommonJS , AMD , loads ES6
 * un loader comme SystemJS
 *
  */
//# sourceMappingURL=namespanceAndModule.js.map