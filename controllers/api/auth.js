import { Auth } from 'aws-amplify'; 
const router = require('express').Router();

// Calling amplify code to talk to cognito.
// cognito will create an user and return it.
router.post('/login', async (req, res) => { // express route, when browser sees login, this function is called
    await signIn(req.body.username, req.body.password);
});

router.post('/user/create', async (req, res) => { // when the browser sends this URL, it calls this function
    await signUp(req.body.username, req.body.password,req.body.email);
});


router.post('/logout', async (req, res) => { // when browser sends this URL, calls this function 
    await signUp(req.body.username, req.body.password,req.body.email);
});


// To create an user
async function signUp(username, password, email) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // email is optional
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


// To login 
async function signIn() {
    try {
        // we call AWS Cognito.
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

// To logout
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}