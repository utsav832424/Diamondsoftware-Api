import pool from "../../config/database";
import moment from "moment";

const addContact = (req, res) => {
    const body = req.body;
    pool.query(`INSERT INTO contact(user_id,name, currentamount, mobileno, email, added_datetime) VALUES (${body.user_id},'${body.name}',${body.currentamount},'${body.mobileno}','${body.email}','${moment(new Date()).utcOffset('+0530').format('YYYY-MM-DD HH:mm')}')`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "data not uploaded"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "data upload successfully",
            data: result
        })
    });
}
const getContact = (req, res) => {
    const body = req.params.id;
    pool.query(`SELECT * FROM contact WHERE user_id=${body}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "data not Found"
            });
        }
        return res.status(200).json({
            success: 1,
            data: result
        })
    });
}

const updateContact = (req, res) => {
    const body = req.body;
    pool.query(`UPDATE contact SET name='${body.name}',currentamount=${body.currentamount},mobileno=${body.mobileno},email='${body.email}' WHERE id=${body.id}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "data not uploaded"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "data update successfully",
            data: result
        })
    });
}
const deleteContact = (req, res) => {
    const body = req.params.id;
    pool.query(`DELETE FROM contact WHERE id=${body}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "data not deleted"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "data  deleted"
        })
    });
}
const contactController = { addContact, getContact, updateContact, deleteContact }
export default contactController;