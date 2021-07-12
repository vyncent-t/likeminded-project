// // rec.session.save can be us
// const router = require('express').Router();
// const { UserTable, PlanTable, EventTable, CliqueTable} = require('../../models');

// // router.post('/', async (req, res) => {
// //   try {
// //     const userData = await User.create(req.body);
// //     req.session.save(() => {
// //       req.session.user_id = userData.id;
// //       req.session.logged_in = true;
// //       res.status(200).json(userData);
// //     });
// //   } catch (err) {
// //     res.status(400).json(err);
// //   }
// // });

// // We need to delete this method because we are not 
// // saving the user authentication information on our db.
// // we are using cognito to that.
// // router.post('/login', async (req, res) => {
// //   try {
// //     const userData = await UserTable.findOne({ where: { email: req.body.email } });
// //     if (!userData) {
// //       res
// //         .status(400)
// //         .json({ message: 'Incorrect email or password, please try again' });
// //       return;
// //     }
// //     const validPassword = await userData.checkPassword(req.body.password);
// //     if (!validPassword) {
// //       res
// //         .status(400)
// //         .json({ message: 'Incorrect email or password, please try again' });
// //       return;
// //     }
// //     req.session.save(() => {
// //       req.session.user_id = userData.id;
// //       req.session.logged_in = true;
// //       res.json({ user: userData, message: 'You are now logged in!' });
// //     });
// //   } catch (err) {
// //     res.status(400).json(err);
// //   }
// // });
// // router.post('/logout', (req, res) => {
// //   if (req.session.logged_in) {
// //     req.session.destroy(() => {
// //       res.status(204).end();
// //     });
// //   } else {
// //     res.status(404).end();
// //   }
// // });
// module.exports = router;





