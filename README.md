# chest-app

To have all the correct node modules please following instructions below.

1.) starting from scratch 
- do a git clone from GitHub

2.) Git checkout Into "Dev" Branch on the repo

3.) Cd into the chessBoard-app
- this is inside the chest-app

4.) Once you are in the correct location on the application please install the following node packages in order.

    - npm install
    - npm install chess.js
    - npm install -D @types/chess.js
    - npm i react-router-dom socket.io-client

5.) Now you will need to replace the code inside the Node module chess.js with the most recent version of code from https://github.com/jhlywa/chess.js/blob/master/chess.js.

    1.) You will go into Chess.js thats in the Node Modulas and go to the file called "dist". 

    2.) Then go into "chess.js" and replace everything inside that file with the code you copied from the link. 
    
    3.) Now on the last line on the file chess.js add 
    " add export default Chess; "
6.) Next you need to cd into server/ 

7.) next you will have to install these Node Modulas inside the "server" file
    
    - npm init -y
    - npm i axios cors express socket.io dotenv
    - npm i -D nodemon

# To run the App

1.) Have two terminals open. One for the chessboard-app and one for the server

2.) Ensure you are in the chessboard-app terminal to do the " npm start "

3.) Next on the server terminal do "npm run dev"

4.) The Applicaiton should be running correctly.