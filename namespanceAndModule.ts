// namespace
/// <reference path="./math/namespaceCircle.ts" />
/// <reference path="./math/namespaceRectangle.ts" />
/*
remplacer le namespace si desous par les deux fichier ou il est declaré le namespce MyMath ave cles differente fonctions
namespace MyMath{
    export const PI = 3.14 ;
    export function calculateSufaceCerle(diameter :number):number{
        return diameter * PI;
    }

    export function calculateRectangle(width:number , lenght:number){
        return width * lenght ;
    }
}*/
console.log("MyMath.PI ==>" ,MyMath.PI);
console.log("MyMath.calculateRectangle(3,2) ==>" ,MyMath.calculateRectangle(3,2));
console.log("MyMath.calculateSufaceCerle(3) ==>",MyMath.calculateSufaceCerle(3));
// module
import * as Circle from './math/circle';
import {calculateRectangle} from './math/rectangle';
console.log(Circle.PI )
console.log(Circle.calculateSufaceCerle(2));
console.log(calculateRectangle(2,3));

