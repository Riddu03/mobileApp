const categoryModel = require("../models/categoryModel");


// GET ALL
const getCategories = (req, res) => {

    categoryModel.getAllCategories((err, categories)=>{

        if(err){
            console.error(err);

            return res.status(500).json({
                success:false,
                message:"Failed to fetch categories"
            });
        }


        res.status(200).json({
            success:true,
            data:categories
        });

    });

};



// GET BY INDUSTRY ID
const getCategoryByIndustryId = (req,res)=>{

    const { industryid } = req.params;


    categoryModel.getCategoryByIndustryId(
        industryid,
        (err,categories)=>{


            if(err){

                console.error(err);

                return res.status(500).json({
                    success:false,
                    message:"Failed to fetch categories"
                });

            }



            if(!categories || categories.length===0){

                return res.status(404).json({
                    success:false,
                    message:"Category not found"
                });

            }



            res.status(200).json({

                success:true,

                data:categories

            });


        }
    );

};




// GET BY ID
const getCategory = (req,res)=>{

    const {id}=req.params;


    categoryModel.getCategoryById(id,(err,category)=>{


        if(err){

            return res.status(500).json({
                success:false,
                message:"Failed to fetch category"
            });

        }


        if(!category){

            return res.status(404).json({
                success:false,
                message:"Category not found"
            });

        }


        res.status(200).json({
            success:true,
            data:category
        });


    });


};





// CREATE
const createCategory = (req,res)=>{


    const data=req.body;


    if(!data.category_name){

        return res.status(400).json({
            success:false,
            message:"category_name is required"
        });

    }



    categoryModel.createCategory(data,(err,result)=>{


        if(err){

            console.error(err);

            return res.status(500).json({
                success:false,
                message:"Failed to create category"
            });

        }



        categoryModel.getCategoryById(
            result.insertId,
            (err,category)=>{


                res.status(201).json({

                    success:true,

                    message:"Category created successfully",

                    data:category

                });


            }
        );


    });


};





// UPDATE
const updateCategory=(req,res)=>{


    const {id}=req.params;

    const data=req.body;



    categoryModel.getCategoryById(id,(err,category)=>{


        if(!category){

            return res.status(404).json({
                success:false,
                message:"Category not found"
            });

        }



        categoryModel.updateCategory(
            id,
            data,
            (err,result)=>{


                if(err){

                    return res.status(500).json({
                        success:false,
                        message:"Failed to update category"
                    });

                }



                categoryModel.getCategoryById(
                    id,
                    (err,updated)=>{


                        res.json({

                            success:true,

                            message:"Category updated successfully",

                            data:updated

                        });


                    }
                );


            }
        );


    });


};





// DELETE
const deleteCategory=(req,res)=>{


    const {id}=req.params;


    categoryModel.getCategoryById(
        id,
        (err,category)=>{


            if(!category){

                return res.status(404).json({
                    success:false,
                    message:"Category not found"
                });

            }



            categoryModel.deleteCategory(
                id,
                (err,result)=>{


                    if(err){

                        return res.status(500).json({
                            success:false,
                            message:"Failed to delete category"
                        });

                    }


                    res.json({

                        success:true,

                        message:"Category deleted successfully"

                    });


                }
            );


        }
    );


};




module.exports = {

    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryByIndustryId

};