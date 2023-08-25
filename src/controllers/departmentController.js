import moment from "moment";
import pool from "../../config/database";

const addDepartment = (req, res) => {
    const body = req.body;
    pool.query(`INSERT INTO department(class, added_datetime) VALUES ('${body.class}','${moment(new Date()).utcOffset('+530').format('YYYY-MM-DD HH:mm')}')`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Department not added"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "Department uploaded",
            data: result
        })
    });
};

const getDepartment = (req, res) => {
    pool.query(`SELECT * FROM department`, (err, result) => {
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

const updateDepartment = (req, res) => {
    const body = req.body;
    pool.query(`UPDATE department SET class='${body.class}' WHERE id=${body.id}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Department not updated"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Department update successfully",
            data: result
        })
    })
};

const deleteDepartment = (req, res) => {
    const body = req.params.id;
    pool.query(`DELETE FROM department WHERE id=${body}`,(err, result) => {
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
};

const departmentController = { addDepartment, getDepartment, updateDepartment, deleteDepartment };
export default departmentController;