
/*
#1
- npx tsc in scripts tends to  node package excuter    type script package
- The command npx tsc in a project will transpile TypeScript to JavaScript
*/



/*  
#2
*ES6 IMPORT ,EXPORT*

-import  'name'  from module;
-import {func1,func2}  from module;


- export const  func1=()=> {...}
- export default {object1, object2};

*/


/*
#3

Move index.js to src/index.ts
Initialize npm and add your details
        npm init -y
Add typescript, ts-node and @types/node definitions to dev dependencies.

        npm i --save-dev typescript
        npm i --save-dev ts-node 
        npm i --save-dev @types/node

Add the configuration file.

        npx tsc --init

Add a build script to your package.json file

        "build": "npx tsc"

Check the configuration file tsconfig.json and apply the following settings:

        "target": "es5",
        "lib": ["ES6"],
        "outDir": "./build",
        "strict": true,
        "noImplicitAny": true

and exclude checking of node modules by adding an "exclude" parameter after the "compilerOptions"

"   exclude": ["node_modules"]
Run the build script

        npm run build
Run the completed index file
        node build/.

*/



/*

//#4
types :: implict  ||   explicit

    - number
    - string 
    - boolean
    -any
    - unknown
    - never
    - void 
    - ------------------- -
    - "varName as  type" for casting 

    - enum Weekend {
            Friday,
            Saturday,
            Sunday
            }

*/


/*
//#5

const myFunc = async ():Promise<void> => { // do stuff };

*/


/*
//#6
***usin third party libs

  -npm i --save-dev @types/packageName

*/