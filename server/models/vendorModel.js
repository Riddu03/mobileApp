const db = require("../config/db");


const Vendor = {


    getAll:(callback)=>{

        const sql = `
        SELECT *
        FROM vendors
        ORDER BY id DESC
        `;

        db.query(sql,callback);

    },


    getById:(id,callback)=>{

        const sql=`
        SELECT *
        FROM vendors
        WHERE id=?
        `;

        db.query(sql,[id],callback);

    },


    create:(data,callback)=>{

        const sql=`
        INSERT INTO vendors
        (
            vendor_code,
            vendor_name,
            company_name,
            email,
            mobile,
            password,
            status
        )
        VALUES(?,?,?,?,?,?,?)
        `;


        db.query(sql,
        [
            data.vendor_code,
            data.vendor_name,
            data.company_name,
            data.email,
            data.mobile,
            data.password,
            data.status ?? 1
        ],
        callback);

    },


    update:(id,data,callback)=>{

        const sql=`
        UPDATE vendors SET

            vendor_name=?,
            company_name=?,
            email=?,
            mobile=?,
            password=?,
            status=?

        WHERE id=?
        `;


        db.query(sql,
        [
            data.vendor_name,
            data.company_name,
            data.email,
            data.mobile,
            data.password,
            data.status ?? 1,
            id
        ],
        callback);

    },


    delete:(id,callback)=>{

        const sql=`
        DELETE FROM vendors
        WHERE id=?
        `;


        db.query(sql,[id],callback);

    }


};


module.exports = Vendor;