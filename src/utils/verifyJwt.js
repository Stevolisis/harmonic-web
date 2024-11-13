import jwt from "jsonwebtoken";

export function verifyJwt(token){
    try{
        const verify=jwt.verify(token, process.env.JWT_PASS);
        console.log("Verify: ", verify);
        return verify
    }catch(err){
        console.log("Verify Err: ", err);
        throw new Error(err.message);
    }
}