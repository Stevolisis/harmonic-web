import dbConnect from "@/db/dbConnect";
import Survey from "@/db/Model/surveySchema";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'PATCH') {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
            }

            console.log("tt: ", id);
            await Survey.updateOne({ _id: id }, {
                $set: {
                    read: true
                }
            });

            return res.status(201).json({ status: 'success', message: "Mark As Read Successfully" });
        } catch (err) {
            console.log("Err: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!!' });
        }
    } else {
        return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
    }
}
