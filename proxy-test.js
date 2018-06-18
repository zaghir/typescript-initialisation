var environement = "TMS";
var TagAdobe = /** @class */ (function () {
    function TagAdobe() {
        this.urlAdobe = "http://adobeTag";
    }
    TagAdobe.prototype.btn1Tag = function (id) {
        console.log("TagAdobe btn1Tag ", id, "biblio: ", this.urlAdobe);
    };
    TagAdobe.prototype.btn2Tag = function (id) {
        console.log("TagAdobe btn2Tag ", id, "biblio: ", this.urlAdobe);
    };
    return TagAdobe;
}());
var TagTms = /** @class */ (function () {
    function TagTms() {
        this.urlTms = "http://tmsTag";
    }
    TagTms.prototype.btn1Tag = function (id) {
        console.log("TagTms btn1Tag ", id, "biblio: ", this.urlTms);
    };
    TagTms.prototype.btn2Tag = function (id) {
        console.log("TagTms btn2Tag ", id, "biblio: ", this.urlTms);
    };
    return TagTms;
}());
var TagProxy = /** @class */ (function () {
    function TagProxy() {
        this.tagTms = new TagTms();
        this.tagAdobe = new TagAdobe();
    }
    TagProxy.prototype.btn1Tag = function (id) {
        // if la biblo utilise une 
        if (environement === "TMS") {
            this.tagTms.btn1Tag(id);
        }
        else {
            this.tagAdobe.btn1Tag(id);
        }
    };
    TagProxy.prototype.btn2Tag = function (id) {
        this.tagTms.btn1Tag(id);
    };
    return TagProxy;
}());
var App = /** @class */ (function () {
    function App() {
        this.tag = new TagProxy();
    }
    App.prototype.test = function () {
        this.tag.btn1Tag('11111');
    };
    return App;
}());
var app = new App();
app.test();
console.log("----");
