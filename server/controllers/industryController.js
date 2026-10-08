const Industry = require("../models/industryModel");



// GET ALL

exports.getIndustries = (req,res)=>{

    Industry.getAll((err,result)=>{

        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }


        res.json({
            status:true,
            data:result
        });

    });

};




// GET SINGLE

exports.getIndustryById = (req,res)=>{

    const id=req.params.id;


    Industry.getById(id,(err,result)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }


        if(result.length===0)
        {
            return res.status(404).json({
                status:false,
                message:"Industry not found"
            });
        }


        res.json({
            status:true,
            data:result[0]
        });


    });


};





// ADD

exports.addIndustry=(req,res)=>{


    const data=req.body;


    if(!data.industry_name || !data.industry_code)
    {
        return res.status(400).json({
            status:false,
            message:"Industry name and code required"
        });
    }



    Industry.create(data,(err,result)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }


        res.json({

            status:true,
            message:"Industry Added Successfully",
            id:result.insertId

        });


    });


};







// UPDATE

exports.updateIndustry=(req,res)=>{


    const id=req.params.id;

    const data=req.body;



    Industry.update(id,data,(err,result)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }



        res.json({

            status:true,
            message:"Industry Updated Successfully"

        });



    });


};








// DELETE

exports.deleteIndustry=(req,res)=>{


    const id=req.params.id;



    Industry.delete(id,(err)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }



        res.json({

            status:true,
            message:"Industry Deleted Successfully"

        });



    });


};