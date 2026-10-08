const db = require("../config/db");

const Category = {

    // Get All Categories
    getAllCategories: (callback) => {

        const sql = `
            SELECT
                id,
                industry_id,
                parent_id,
                category_name,
                category_type,
                status
            FROM categories
            ORDER BY id DESC
        `;

        db.query(sql, callback);

    },


    // Get Category By ID
    getCategoryById: (id, callback) => {

        const sql = `
            SELECT
                id,
                industry_id,
                parent_id,
                category_name,
                category_type,
                status
            FROM categories
            WHERE id=?
        `;

        db.query(sql, [id], callback);

    },


    // Get Categories By Industry ID
    getCategoryByIndustryId: (industryId, callback) => {

        const sql = `
            SELECT
                id,
                industry_id,
                parent_id,
                category_name,
                category_type,
                status
            FROM categories
            WHERE industry_id=?
            ORDER BY id DESC
        `;

        db.query(sql, [industryId], callback);

    },


    // Create Category
    createCategory: (data, callback) => {

        const sql = `
            INSERT INTO categories
            (
                industry_id,
                parent_id,
                category_name,
                category_type,
                status
            )
            VALUES(?,?,?,?,?)
        `;


        db.query(
            sql,
            [
                data.industry_id || null,
                data.parent_id || null,
                data.category_name,
                data.category_type || null,
                data.status ?? 1
            ],
            callback
        );

    },


    // Update Category
    updateCategory: (id, data, callback) => {

        const sql = `
            UPDATE categories SET
                industry_id=?,
                parent_id=?,
                category_name=?,
                category_type=?,
                status=?
            WHERE id=?
        `;


        db.query(
            sql,
            [
                data.industry_id || null,
                data.parent_id || null,
                data.category_name,
                data.category_type || null,
                data.status ?? 1,
                id
            ],
            callback
        );

    },


    // Delete Category
    deleteCategory: (id, callback) => {

        const sql = `
            DELETE FROM categories
            WHERE id=?
        `;


        db.query(sql,[id],callback);

    }

};


module.exports = Category;