import dbConnect from "@/db/dbConnect";
import View from "@/db/Model/viewSchema";
import formidable from "formidable";
import bcrypt from 'bcryptjs';

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
            const date=new Date();

            form.parse(req, async function(err, fields, files) {
                if (err) {
                    return res.status(500).json({ status: 'error', message: 'Error parsing form' });
                }
                console.log("Fields: ", fields);

                const newView = new View({
                    day: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear()
                });
        
                await newView.save();

                return res.status(201).json({ status: 'success', message:"View Recorded Successfully"});
            });

        }catch(err){
            console.log("Err: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!!' });
        }

    }
}
