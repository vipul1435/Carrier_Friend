import Contributes from '../models/Contribute.js'

export const postContribute = async (req,res) => {
    try{
        const contribute = new Contributes(req.body);
        await contribute.save();
        res.status(200).json({sucess:true});
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};


export const getContribute = async (req,res) => {
    console.log("val")
    try{
        const query = req.query;
        if(!query?.status){
            query.status='verified'
        }
        const contribute = await Contributes.find(query).sort({createdAt:-1});
        res.status(200).json(contribute);
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};


export const updateContribute = async (req,res) => {
    try{
        const {id} = req.params;
        const {status} =  req.query;
        const contribute = await Contributes.findByIdAndUpdate(id,{status:status},{new:true});
        res.status(200).json(contribute);
    } catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};