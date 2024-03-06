import EmployModel from "../models/Employ";

const insertEmploy = async (req, res) => {
    try {
        const Employ = new EmployModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            is_admin: 0
        })
        const employData = await Employ.save();
        if (employData) {
            res.render('register', { message: 'your register has benn successfull, please varified your email' })
        } else {
            res.render('register', { message: 'your register has benn failed' })
        }
    } catch (error) {
        console.log(error.message);
    }
}
