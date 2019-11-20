// namespace utiliser qu'avec typescprit
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function calculateSufaceCerle(diameter) {
            return diameter * Circle.PI;
        }
        Circle.calculateSufaceCerle = calculateSufaceCerle;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
//# sourceMappingURL=circleNamespace.js.map