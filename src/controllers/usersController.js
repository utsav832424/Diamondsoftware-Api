import bcrypt from "bcryptjs";
import pool from "../../config/database";
import jwt from "jsonwebtoken";


const addUser = (req, res) => {
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
    pool.query(`INSERT INTO users(email, password) VALUES ('${body.email}','${body.password}')`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "user not added"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "user added",
            data: result
        })
    })
}
const login = (req, res) => {
    const body = req.body;
    pool.query(`select *from users where email='${body.email}'`, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.length==0) {
            return res.json({
                success: 0,
                message: "Email is invalid"
            })
        }
        const result = bcrypt.compareSync(body.password, results[0].password);
        if (result) {
            results[0].password = undefined;
            const jsontoken = jwt.sign({ result: results }, `'${process.env.KEY}'`, {
                expiresIn: "24h"
            })
            return res.status(200).json({
                success: 1,
                message: "Login Successfully",
                data: results,
                tokken: jsontoken
            })
        } else {
            return res.json({
                success: 0,
                message: "Invalid Email or password"
            })
        }
    });
}

const userController = { login, addUser };
export default userController;