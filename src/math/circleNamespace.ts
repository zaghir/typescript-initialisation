// namespace utiliser qu'avec typescprit
namespace MyMath{
    export namespace Circle{
        export const PI = 3.14 ;
        export function calculateSufaceCerle(diameter :number):number{
            return diameter * PI;
        }
    }
}