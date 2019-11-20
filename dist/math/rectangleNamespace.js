// namespace utiliser qu'avec typescprit
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function calculateRectangle(width, lenght) {
            return width * lenght;
        }
        Rectangle.calculateRectangle = calculateRectangle;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
//# sourceMappingURL=rectangleNamespace.js.map