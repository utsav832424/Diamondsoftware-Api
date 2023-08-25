import moment from "moment";
import pool from "../../config/database";

const addBanktransfer = (req, res) => {
    const body = req.body;
    pool.query(`insert into banktransfer(user_id,date,from1,to1,amount,notes,added_datetime) values(${body.user_id},'${body.date}','${body.from1}','${body.to1}',${body.amount},'${body.notes}','${moment(new Date()).utcOffset('+530').format('YYYY-MM-DD HH:mm')}')`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Transfer not added"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "Transfer uploaded",
            data: result
        })
    });
};

const getBanktransfer = (req,res)=>{
    const body = req.params.id;
    pool.query(`SELECT * FROM banktransfer WHERE user_id=${body}`,(err, result) => {
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
};

const updateBanktransfer = (req,res)=>{
    const body = req.body;
    pool.query(`UPDATE banktransfer SET date='${body.date}',from1='${body.from1}',to1='${body.to1}',amount=${body.amount},notes='${body.notes}' WHERE id=${body.id}`,(err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "banktranafer not updated"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "banktranafer update successfully",
            data: result
        })
    })
}

const deletebanktransfer = (req,res)=>{
    const body = req.params.id;
    pool.query(`DELETE FROM banktransfer WHERE id=${body}`,(err, result) => {
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

const bantransfercontroller = { addBanktransfer,getBanktransfer ,updateBanktransfer,deletebanktransfer};
export default bantransfercontroller;