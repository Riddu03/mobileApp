const Vendor = require("../models/vendorModel");


// GET ALL

exports.getVendors=(req,res)=>{


    Vendor.getAll((err,result)=>{

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

exports.getVendorById=(req,res)=>{


    Vendor.getById(req.params.id,(err,result)=>{


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
                message:"Vendor not found"
            });
        }


        res.json({
            status:true,
            data:result[0]
        });


    });


};




// ADD

exports.addVendor=(req,res)=>{


    const data=req.body;


    if(!data.vendor_name || !data.email)
    {
        return res.status(400).json({
            status:false,
            message:"Vendor name and email required"
        });
    }



    Vendor.create(data,(err,result)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }



        res.json({

            status:true,
            message:"Vendor Added Successfully",
            id:result.insertId

        });


    });


};




// UPDATE

exports.updateVendor=(req,res)=>{


    Vendor.update(
        req.params.id,
        req.body,
        (err,result)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }


        res.json({

            status:true,
            message:"Vendor Updated Successfully"

        });


    });


};




// DELETE

exports.deleteVendor=(req,res)=>{


    Vendor.delete(req.params.id,(err)=>{


        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }


        res.json({

            status:true,
            message:"Vendor Deleted Successfully"

        });


    });


};