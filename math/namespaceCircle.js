var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calculateSufaceCerle(diameter) {
        return diameter * MyMath.PI;
    }
    MyMath.calculateSufaceCerle = calculateSufaceCerle;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=namespaceCircle.js.map