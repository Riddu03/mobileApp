const AttributesValues = require("../models/attributeValueModel");

exports.getAttributesValues=(req,res)=>{
    AttributesValues.getAttributesValues((err,result)=>{
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

exports.getAttributesValueById=(req,res)=>{
    AttributesValues.getAttributesValueById(req.params.id,(err,result)=>{
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
                message:"Attributes Value not found"
            });
        }
        res.json({
            status:true,
            data:result[0]
        });
    });
};

exports.createAttributesValue=(req,res)=>{
    const data=req.body;
    if(!data.attribute_id || !data.value_name)
    {
        return res.status(400).json({
            status:false,
            message:"attribute id and value name required"
        });
    }
    AttributesValues.createAttributesValue(data,(err,result)=>{
        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }
        res.json({
            status:true,
            message:"Attributes Value Added Successfully",
            id:result.insertId

        });
    });
};

// UPDATE
exports.updateAttributesValue=(req,res)=>{
    AttributesValues.updateAttributesValue(
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
            message:"Attributes Value Updated Successfully"
        });
    });
};

// DELETE
exports.deleteAttributesValue=(req,res)=>{
    AttributesValues.deleteAttributesValue(req.params.id,(err)=>{
        if(err)
        {
            return res.status(500).json({
                status:false,
                message:err.message
            });
        }
        res.json({
            status:true,
            message:"Attributes Value Deleted Successfully"
        });
    });
};