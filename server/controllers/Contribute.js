import Contributes from '../models/Contribute.js'

export const postContribute = async (req,res) => {
    const contribute = new Contributes(req.body);
    try{
        await contribute.save();
        res.status(200).json({sucess:true});
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};