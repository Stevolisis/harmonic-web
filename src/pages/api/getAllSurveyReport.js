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
        try {
            const allSurveys = await Survey.find();


            const positiveInterest = ["Yes, definitely", "Possibly"];
            const negativeInterest = ["Probably not", "No, not interested"];
            const not_sureRes = ["Not sure"];

            const positiveLikelihood = ["Very likely", "Somewhat likely"];
            const negativeLikelihood = ["Not very likely", "Not likely at all"];
            const neutralRes = ["Neutral"];


            // Initialize counters for positive and negative responses
            let positiveResponses = 0;
            let negativeResponses = 0;
            let neutral = 0;

            allSurveys.forEach((survey) => {
                if (positiveInterest.includes(survey.interest_in_templates)) positiveResponses++;
                if (negativeInterest.includes(survey.interest_in_templates)) negativeResponses++;
                if (not_sureRes.includes(survey.interest_in_templates)) neutral++;

                if (positiveLikelihood.includes(survey.likelihood_of_use)) positiveResponses++;
                if (negativeLikelihood.includes(survey.likelihood_of_use)) negativeResponses++;
                if (neutralRes.includes(survey.likelihood_of_use)) neutral++;
            });

            return res.status(200).json({
                status: 'success',
                data: { positiveResponses, negativeResponses, neutral, allSurveys  }
            });
        } catch (err) {
            console.log("Error: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!' });
        }
    }
}
