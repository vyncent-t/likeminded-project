const aws = require('aws-amplify');
const router = require('express').Router();

// Calling amplify code to talk to cognito.
// cognito will create an user and return it.
router.post('/login', async (req, res) => { // express route, when browser sees login, this function is called
    signIn(req.body.username, req.body.password)
    .then((data)=> res.send(data))
    .catch((error)=> console.log(res.send(error)));
})

router.post('/create', async (req, res) => { // when the browser sends this URL, it calls this function
    signUp(req.body.username, req.body.password)
        .then((value)=> res.send(value))
        .catch((err)=>res.send(err));
});

router.post('/logout', async (req, res) => { // when browser sends this URL, calls this function 
    const data = await signOut();
    res.send(data);
});


// To create an user
async function signUp(username, password, email) {
    try {
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
function signIn(username, password) {
    return aws.Auth.signIn(username, password);
}

// To logout
async function signOut() {
    try {
        await aws.Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

module.exports = router;