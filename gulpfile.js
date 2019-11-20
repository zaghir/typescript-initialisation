var gulp = require("gulp");
var ts = require('gulp-typescript');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript" , function(){
    // ts()  c'est la fonction ts pour la compilation 
    // tsProject object deja créé  
    // gulp.dest generer les fichier dans un endroit defini 
    return tsProject.src()
        .pipe( ts(tsProject))
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch" , function(){
    gulp.watch("*.ts" , ["typescript"]);
});

gulp.task("default" ,["watch"]);


// dans package.json il faut ajouter "build":"gulp" dans scripts si ce n'est pas fait 
// pour lancer avec gulp ==> npm run build
//https://www.typescriptlang.org/docs/handbook/gulp.html
 