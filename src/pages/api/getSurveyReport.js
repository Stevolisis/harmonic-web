import dbConnect from "@/db/dbConnect";
import Survey from "@/db/Model/surveySchema";
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
                const { id } = req.query;
                const getSurvey = await Survey.findOne({_id: id});

                if(getSurvey){
                    return res.status(200).json({
                        status: 'success',
                        data: getSurvey
                    });
                }else{
                    return res.status(404).json({ status: 'error', message: 'Survey does not exist' });
                }
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
