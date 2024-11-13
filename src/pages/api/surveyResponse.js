import dbConnect from "@/db/dbConnect";
import Survey from "@/db/Model/surveySchema";
import formidable from "formidable";

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            await dbConnect();

            const form = formidable({});
            const date=new Date();

            form.parse(req, async function(err, fields, files) {
                if (err) {
                    return res.status(500).json({ status: 'error', message: "Error parsing form" });
                }
                console.log("Fields: ", fields);

                const ifSurvey = await Survey.findOne({ email: fields.email?.[0] });
                
                if (ifSurvey) {
                    return res.status(409).json({ status: 'error', message: 'Your response has already been recorded' });
                }

                const newSurvey = new Survey({
                    name: fields.name?.[0] || null,
                    email: fields.email?.[0] || null,
                    role: fields.role?.[0] || null,
                    years_of_experience: fields.years_of_experience?.[0] || null,
                    programming_languages: fields.programming_languages || [],
                    share_code_frequency: fields.share_code_frequency?.[0] || null,
                    type_of_content: fields.type_of_content || [],
                    type_of_visuals: fields.type_of_visuals || [],
                    content_idea_source: fields.content_idea_source || [],
                    create_visuals: fields.create_visuals || [],
                    time_spent_creating: fields.time_spent_creating?.[0] || null,
                    documentation_tools: fields.documentation_tools || [],
                    content_challenges: fields.content_challenges || [],
                    consider_paid_services: fields.consider_paid_services?.[0] || null,
                    satisfaction_level: fields.satisfaction_level?.[0] || null,
                    commit_frequency: fields.commit_frequency?.[0] || null,
                    importance_of_showcasing: fields.importance_of_showcasing?.[0] || null,
                    interest_in_templates: fields.interest_in_templates?.[0] || null,
                    helpfulness_of_auto_tracking: fields.helpfulness_of_auto_tracking?.[0] || null,
                    likelihood_of_use: fields.likelihood_of_use?.[0] || null,
                    valuable_features: fields.valuable_features || [],
                    payment_amount: fields.payment_amount?.[0] || null,
                    feature_improvements: fields.feature_improvements?.[0] || null,
                    automated_tool_help: fields.automated_tool_help?.[0] || null,
                    beta_test_interest: fields.beta_test_interest?.[0] || null,
                    additional_feedback: fields.additional_feedback?.[0] || null,
                    day: date.getDate(),
                    month: date.getMonth()+1,
                    year: date.getFullYear()
                });

                // Save the survey response to the database
                newSurvey.save()
                .then(_=>{
                    return res.status(201).json({ status: 'success', message:"Your Response Recorded Successfully", data: fields });

                })
                .catch(err=>{
                    return res.status(500).json({ status: 'error', message:err.message});
                })
            });

        } catch (err) {
            console.log("Error: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!!' });
        }
    }
}
