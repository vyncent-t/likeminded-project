//const aws = require('aws-amplify');
const router = require('express').Router();

// Calling amplify code to talk to cognito.
// cognito will create an user and return it.
router.post('/login', async (req, res) => { // express route, when browser sees login, this function is called
    const data = await signIn(req.body.username, req.body.password);
    res.send(data);

});

router.post('/create', async (req, res) => { // when the browser sends this URL, it calls this function
    const data = await signUp(req.body.username, req.body.password, req.body.email);
    res.send(data);
});

router.post('/logout', async (req, res) => { // when browser sends this URL, calls this function 
    const data = await signOut();
    res.send(data);
});


// To create an user
async function signUp(username, password, email) {
    try {
        return 'you called singUp';
        const { user } = await aws.Auth.signUp({
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
async function signIn(username, password) {
    try {
        return 'you called signIn';
        const user = await aws.Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

// To logout
async function signOut() {
    try {
        return 'you called signOut';
        await aws.Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

module.exports = router;