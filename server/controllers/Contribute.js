import Contributes from '../models/Contribute.js'

export const postContribute = async (req,res) => {
    try{
        console.log(req.body)
        const contribute = new Contributes(req.body);
        await contribute.save();
        res.status(200).json({sucess:true});
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};


export const getContribute = async (req,res) => {
    try{
        console.log("i am called what the fuck")
        const query = req.query;
        if(!query?.role){
            query.status='pending'
        }
        const contribute = await Contributes.find(query).sort({createdAt:-1});
        res.status(200).json(contribute);
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};