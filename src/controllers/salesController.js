import moment from "moment";
import pool from "../../config/database";

const addSales = (req, res) => {
    const body = req.body;
    pool.query(`INSERT INTO sales(user_id, date, merchantname, amount, quantity, lot,added_datetime) VALUES (${body.user_id},'${body.date}','${body.merchantname}',${body.amount},${body.quantity},${body.lot},'${moment(new Date()).utcOffset('+0530').format('YYYY-MM-DD HH:mm')}')`, (err, result) => {
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
    })
};

const getSales = (req, res) => {
    const body = req.params.id;
    pool.query(`SELECT * FROM sales WHERE user_id=${body}`, (err, result) => {
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

const updatesales = (req, res) => {
    const body = req.body;
    pool.query(`UPDATE sales SET date='${body.date}',merchantname='${body.merchantname}',amount=${body.amount},quantity=${body.quantity},lot=${body.lot} WHERE id=${body.id}`, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Sales not updated"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Sales update successfully",
            data: result
        })
    });
};

const deleteSales = (req, res) => {
    const body = req.params.id;
    pool.query(`DELETE FROM sales WHERE id=${body}`, (err, result) => {
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

const salesController = { addSales, getSales, updatesales, deleteSales };
export default salesController;