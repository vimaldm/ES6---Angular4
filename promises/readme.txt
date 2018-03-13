1.Your project main directory

npm init

2.Install dependencies

npm install --save-dev babel
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-stage-0 //version of the build
npm install --save-dev nodemon

3.We should have in package.json after init execution

4.Create .babelrc file in root project directory

5.Create two directories:

src
index.js //main project file
dist
package.json
.babelrc

6.Commands:

npm run watch //watches changes in src directory and compiles in to dist

npm run build //compiles files from src directory to dist

npm run serve //watch + start node server using nodemon will watch everytime file changes

