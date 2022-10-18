/* 
AUTH SETUP

    1. CREATE firebase project
    2. enable web
    3. enable signIn method
    4. install firebase: nmp i firebase
    5. get firebase config inside the: firebase.config.js
    6. export app from firebase.config.js
    
*/

/* 

    1. create userContext (auth Context): userContext---> components name
       userContext provides authContext

    2. create authContext 
    3. set AuthContext.Provider
    4. make sure yu set the children
    5. export authContext to be used inside useContext hook
    6. get form data
    7. getAuth in the useContext
    8. 

*/

/* 
HOSTING FIREBASE
--------------------------------

    //one time each computer
    1. npm install -g firebase-tools
    2. firebase login

    //for each project one time
    3.firebase init
    make sure for : for public directory : you select build 
    single page application: y/n --> y

    //for every deploy
    4. npm run build
    5. firebase deploy

*/