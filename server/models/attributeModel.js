const db = require("../config/db");

const Attribute = {
    getAttributes:(callback)=>{
        const sql = `
        SELECT *
        FROM attributes
        ORDER BY id DESC`;
        db.query(sql,callback);
    },
	
    getAttributeById:(id,callback)=>{
        const sql=`
        SELECT *
        FROM attributes
        WHERE id=?`;
        db.query(sql,[id],callback);
    },

    addAttribute:(data,callback)=>{
        const sql=`
        INSERT INTO attributes
        (
            industry_id,
            attribute_name
        )
        VALUES(?,?)`;
		
        db.query(sql,
        [
            data.industry_id,
            data.attribute_name
        ],
        callback);
    },

    updateAttribute:(id,data,callback)=>{
        const sql=`
        UPDATE attributes SET
            industry_id=?,
            attribute_name=?
			WHERE id=?
        `;
        db.query(sql,
        [
            data.industry_id,
            data.attribute_name,
            id
        ],
        callback);
    },

    deleteAttribute:(id,callback)=>{
        const sql=`
        DELETE FROM attributes
        WHERE id=?`;
        db.query(sql,[id],callback);
    }
};


module.exports = Attribute;