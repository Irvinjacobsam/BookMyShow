import bmsSchema from "../models/bms.schema.js";

export async function addmvs(req, res) {
    try {
        let { poster, Mvname, lang, category } = req.body;
        console.log(req.body);
        // console.log(Mvname, lang, category , poster);
        let mvname = await bmsSchema.findOne({ Mvname });

        if (mvname) {
            return res.status(400).send("Movie Name already exists");
        }


        let result = await bmsSchema.create({
            Mvname,
            lang,
            category,
            poster
        });
        res.json("succesfully added")
    } catch (error) {
        console.log(error);
        res.status(500).send("error occured")

    }
}

export async function printmvs(req,res){

    try {

        let result = await bmsSchema.find();
        res.json(result);

        }
        
    catch (error) {
        console.log(error);
        res.status(500).send("error occured")
        
    }

}