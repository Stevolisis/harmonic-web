import dbConnect from "@/db/dbConnect";
import formidable from "formidable";


export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try{
            const form = formidable({});

            form.parse(req, async function(err, fields, files) {
                if (err) {
                    return res.status(500).json({ status: 'Error parsing form' });
                }
                console.log("Fields: ", fields);
                return res.status(200).json({ status: 'success', data: fields });
            });

        }catch(err){
            console.log("Err: ", err);
            return res.status(500).json({ status: 'Error Occurred, Try again!!' });
        }

    }
}
