import pool from "../../config/database";
import moment from "moment";

const addExpense = (req,res)=>{
    const body = req.body;
    pool.query(`INSERT INTO expense(user_id, date, cashandbank, class, amount) VALUES (${body.user_id},'${moment(body.date,'DD-MM-YYYY').format('YYYY-MM-DD')}','${body.cashandbank}','${body.class}',${body.amount})`,(err,result)=>{
        if(err){
            return res.status(500).json({
                success:0,
                message:"expense not added"
            })
        }
        return res.status(200).json({
            success:1,
            message:"expense uploaded",
            data:result
        })
    });
};

const getExpense = (req, res) => {
    const body = req.params.id;
    pool.query(`SELECT * FROM expense WHERE user_id=${body}`, (err, result) => {
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

const updateExpense= (req, res) => {
    const body = req.body;
    console.log(body);
    pool.query(`UPDATE expense SET date='${body.date}',cashandbank='${body.cashandbank}',class='${body.class}',amount=${body.amount} WHERE id=${body.id}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "data not updateed"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "data update successfully",
            data: result
        })
    });
}
const deleteExpense = (req, res) => {
    const body = req.params.id;
    pool.query(`DELETE FROM expense WHERE id=${body}`, (err, result) => {
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

const expenseController = {addExpense,getExpense,updateExpense,deleteExpense};
export default expenseController;