import dbConnect from "@/db/dbConnect";
import Staff from "@/db/Model/staffSchema";
import formidable from "formidable";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

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
                    return res.status(500).json({ status: 'error', message: 'Error parsing form' });
                }
                console.log("Fields: ", fields);

                const ifStaff = await Staff.findOne({name: fields.name[0]});
                console.log("ifStaff: ",ifStaff);

                if(ifStaff){
                    bcrypt.compare(fields.password[0], ifStaff.password, (err, passStatus) => {
                        if (err) {
                          return res.status(400).json({ status: 'error', message: 'Invalid Credentials' });
                        }
            
                        if (passStatus === true) {
                          const token = jwt.sign({ id: ifStaff._id }, process.env.JWT_PASS, { expiresIn: 60 * 60 * 24 * 30});
                        //   setCookie('SlideToken', token, { req, res, maxAge: 60 * 60 * 24 * 30 , httpOnly: true, secure: true, sameSite: 'strict', path: '/' });
                          return res.status(200).json({ status: 'success', token:token });

                        } else {
                          return res.status(401).json({ status: 'error', message: 'Invalid Credentials' });
                        }
                      });
                }else{
                    return res.status(400).json({ status: 'Invalid Credentials', data: fields });
                }

            });

        }catch(err){
            console.log("Err: ", err);
            return res.status(500).json({ status: 'success', message: 'Error Occurred, Try again!!' });
        }

    }
}
