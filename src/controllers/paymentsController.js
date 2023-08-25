import moment from "moment";
import pool from "../../config/database";

const addPayment = (req,res)=>{
    const body = req.body;
    pool.query(`INSERT INTO payments( user_id, date, bankaccount, contact, amount, added_datetime) VALUES (${body.user_id},'${body.date}','${body.bankaccount}','${body.contact}',${body.amount},'${moment(new Date()).utcOffset('+0530').format('YYYY-MM-DD HH:mm')}')`,(err,result)=>{
        if(err){
            return res.status(500).json({
                success:0,
                message:"Payment not added"
            })
        }
        return res.status(200).json({
            success:1,
            message:"Payment uploaded",
            data:result
        })
    });
};

const getPayment = (req,res)=>{
    const body = req.params.id;
    pool.query(`SELECT * FROM payments WHERE user_id=${body}`,(err, result) => {
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

const updatePayment = (req,res)=>{
    const body = req.body;
    pool.query(`UPDATE payments SET date='${body.date}',bankaccount='${body.bankaccount}',contact='${body.contact}',amount='${body.amount}' WHERE id=${body.id}`,(err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Payment not updated"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Payment update successfully",
            data: result
        })
    });
}

const deletepayment = (req,res)=>{
    const body = req.params.id;
    pool.query(`DELETE FROM payments WHERE id=${body}`,(err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Payment not deleted"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Payment  deleted"
        })
    })
};

const paymentsController ={addPayment,getPayment,updatePayment,deletepayment};
export default paymentsController;