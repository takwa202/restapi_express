const userModel = require("./models/User")

//adduser
const adduser =async(req,res)=>{
    const {name, adress,age,password }= req.body;
try {
  const newuser = await new userModel({name, adress,age,password});
  await newuser.save()
  res.send(newuser)
} catch (error) {
    console.log(error)
}
}
//get all products
const getusers = async (req, res) => {
    try {
      const allusers = await userModel.find();
      res.send({ allusers });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };
  const deleteuser = async (req, res) => {
    try {
      await userModel.deleteOne({ _id: req.params.id });
      res.send({ msg: "Succussfully DELETED" });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };
  const updateuser = async (req, res) => {
    const url = `${req.protocol}://${req.get("host")}`
    const {file}=req
    try {
      const updateuser = await userModel.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({msg:"Product Succussfully "})
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }}
module.exports = {
    adduser,getusers,deleteuser,updateuser
}