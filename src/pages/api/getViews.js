import dbConnect from "@/db/dbConnect";
import View from "@/db/Model/viewSchema";
import { verifyJwt } from "@/utils/verifyJwt";

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {

            if(req.headers.authorization){
                if(!verifyJwt(req.headers.authorization.split(" ")[1])){
                    return res.status(403).json({ status: 'error', message: 'You are not Authorized to access this route, please sign in!!' });
                }
                
                const getViews = await View.find({});

                return res.status(200).json({
                    status: 'success',
                    data: getViews
                });

            }else{
                return res.status(403).json({ status: 'error', message: 'You are not Authorized to access this route' });
            }

        } catch (err) {
            console.log("Error: ", err);
            return res.status(500).json({ status: 'error', message: err.message });
        }
    }else {
        return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
    }
}
