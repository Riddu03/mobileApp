const Attributes = require("../models/attributeModel");

exports.getAttributes=(req,res)=>{
    Attributes.getAttributes((err,result)=>{
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

exports.getAttributeById=(req,res)=>{
    Attributes.getAttributeById(req.params.id,(err,result)=>{
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
                message:"Attributes not found"
            });
        }
        res.json({
            status:true,
            data:result[0]
        });
    });
};

exports.addAttribute=(req,res)=>{
    const data=req.body;
    if(!data.industry_id || !data.attribute_name)
    {
        return res.status(400).json({
            status:false,
            message:"industry id name and attribute name required"
        });
    }
    Attributes.addAttribute(data,(err,result)=>{
        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }
        res.json({
            status:true,
            message:"Attributes Added Successfully",
            id:result.insertId

        });
    });
};

// UPDATE
exports.updateAttribute=(req,res)=>{
    Attributes.update(
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
            message:"Attributes Updated Successfully"
        });
    });
};

// DELETE
exports.deleteAttribute=(req,res)=>{
    Attributes.deleteAttribute(req.params.id,(err)=>{
        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }
        res.json({
            status:true,
            message:"Attributes Deleted Successfully"
        });
    });
};