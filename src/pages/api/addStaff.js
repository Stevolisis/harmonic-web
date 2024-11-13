import dbConnect from "@/db/dbConnect";
import Staff from "@/db/Model/staffSchema";
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

                const ifStaff = await Staff.findOne({name: fields.name[0]});
                console.log("ifStaff: ",ifStaff);
                if(ifStaff){
                    return res.status(409).json({ status: 'error', message: 'User already exist!!' });
                }
                
                const passwordHashed = await bcrypt.hash(fields.password[0], 10);
                const newStaff = new Staff({
                    name: fields.name[0],
                    email: fields.email[0],
                    role: fields.role[0],
                    password: passwordHashed,
                    day: date.getDate(),
                    month: date.getMonth()+1,
                    year: date.getFullYear()
                  });
        
                  await newStaff.save();

                return res.status(201).json({ status: 'success', message:"Account Created Successfully", data: fields });
            });

        }catch(err){
            console.log("Err: ", err);
            return res.status(500).json({ status: 'error', message: 'Error Occurred, Try again!!' });
        }

    }else {
        return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
    }
}
