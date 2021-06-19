import { Auth } from 'aws-amplify'; 
const router = require('express').Router();

// Calling amplify code to talk to cognito.
// cognito will create an user and return it.
router.post('/login', async (req, res) => {
    await signIn(req.body.username, req.body.password);
});

router.post('/user/create', async (req, res) => {
    await signUp(req.body.username, req.body.password,req.body.email);
});


router.post('/logout', async (req, res) => {
    await signUp(req.body.username, req.body.password,req.body.email);
});


// To create an user
async function signUp(username, password, email) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
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