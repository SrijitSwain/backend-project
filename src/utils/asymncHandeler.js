const asyncHandeler = (requestHandeler) =>{
    (req,res,next) =>{
        Promis.resolve(requestHandeler(req,res,next)).catch((err)=> next(err))
    }
}
export {asyncHandeler}

// const asyncHandeler =(fn) =>async(req,res,next)=>{

// }