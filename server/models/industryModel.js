const db = require("../config/db");

const Industry = {

    // Get All Industries
    getAll: (callback) => {

        const sql = `
            SELECT *
            FROM industries
            ORDER BY id DESC
        `;

        db.query(sql, callback);
    },


    // Get Single Industry
    getById: (id, callback) => {

        const sql = `
            SELECT *
            FROM industries
            WHERE id=?
        `;

        db.query(sql, [id], callback);
    },


	

    // Add Industry
    create: (data, callback) => {

        const sql = `
            INSERT INTO industries
            (
                industry_name,
                industry_code,
                status
            )
            VALUES(?,?,?)
        `;

        db.query(
            sql,
            [
                data.industry_name,
                data.industry_code,
                data.status ?? 1
            ],
            callback
        );
    },


    // Update Industry
    update: (id, data, callback) => {

        const sql = `
            UPDATE industries SET
                industry_name=?,
                industry_code=?,
                status=?
            WHERE id=?
        `;


        db.query(
            sql,
            [
                data.industry_name,
                data.industry_code,
                data.status ?? 1,
                id
            ],
            callback
        );
    },


    // Delete Industry
    delete: (id, callback) => {

        const sql = `
            DELETE FROM industries
            WHERE id=?
        `;

        db.query(sql, [id], callback);
    }

};


module.exports = Industry;