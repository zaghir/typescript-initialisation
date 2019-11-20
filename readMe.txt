Typescript 
====================
http://www.typescriptlang.org/

Il y un live editor dans ==> Playground

Installation 
=====================
installer nodeJS 
installer typescript 
   npm -g install typescript

installer un liteServer pour faciliter le dev
=====================================================
npm install lite-server --save-dev

demarer lite-server
=====================================================
npm start 

dans le fichier html on importe toujours les fichiers .js pas .ts car typescript est incompréhensible par le navigateur 

pour compiler les fichier .ts
==============================
tsc script.ts

creer un fichier de configuration et compilation des fichiers .ts
==================================
tsc --init


compilation en mode suveillé 
=========================================
// quand on compile  on utilise  tsc -w  ==> -w  en mode watchdog
tsc -w


config/tsconfig.json
============================================
tsc --p config/tsconfig.json    ou   tsc -p config/tsconfig.json
si on a changé le placement de fichier tsconfig.json qui se trouve par defaut dans la racine du projet 
on doit specifier l'emplacement de fichier de configuration à typescript , ici le fichier tsconfig se trouve dans le dossier config

gulp   Task runner 
===========================================
npm install --save-dev typescript gulp@4.0.0 gulp-typescript
pour lancer le runner gulp 
npm run build
