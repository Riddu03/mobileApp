const db = require("../config/db");

const AttributeValue = {
    getAttributesValues:(callback)=>{
        const sql = `
        SELECT *
        FROM attribute_values
        ORDER BY id DESC`;
        db.query(sql,callback);
    },
	
    getAttributesValueById:(id,callback)=>{
        const sql=`
        SELECT *
        FROM attribute_values
        WHERE id=?`;
        db.query(sql,[id],callback);
    },

    createAttributesValue:(data,callback)=>{
        const sql=`
        INSERT INTO attribute_values
        (
            attribute_id,
            value_name
        )
        VALUES(?,?)`;
		
        db.query(sql,
        [
            data.attribute_id,
            data.value_name
        ],
        callback);
    },

    updateAttributesValue:(id,data,callback)=>{
        const sql=`
        UPDATE attribute_values SET
            attribute_id=?,
            value_name=?
			WHERE id=?
        `;
        db.query(sql,
        [
            data.attribute_id,
            data.value_name,
            id
        ],
        callback);
    },

    deleteAttributesValue:(id,callback)=>{
        const sql=`
        DELETE FROM attribute_values
        WHERE id=?`;
        db.query(sql,[id],callback);
    }
};


module.exports = AttributeValue;