import dbConnect from "@/db/dbConnect";
import Survey from "@/db/Model/surveySchema";

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {

        try{
            const { month, year } = req.query;
            const monthlySurveyReport = await Survey.find({month: month, year: year});

            return res.status(201).json({ status: 'success', data:monthlySurveyReport});

        }catch(err){
            console.log("Err: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!!' });
        }

    }
}
