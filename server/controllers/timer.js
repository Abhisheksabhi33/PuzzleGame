import User from '../models/user.js';

export const getStartTime = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        
        const {score, total_attempted, wrong_attempted , start_time, end_time} = user;
        if(user.start_time===null){
            user.start_time=Date.now();
            await user.save();
        }

        user.end_time=Date.now();
        await user.save();

        res.json({score, total_attempted, wrong_attempted, start_time, end_time});
       
        
    }
    catch(err){
        console.log(err);
    }
}