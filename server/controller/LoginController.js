const LoginModel = require('../Models/LoginModel')

const LoginController = async (req, res) => {
    try {
        const data = await LoginModel.create(req.body);
        res.status(200).send({ msg: "data saved", data })

    } catch (error) {
        console.log(error)
        res.status(500).send("some internal error")
    }
}

const GetALLData = async (req, res) => {
    try {
        const data = await LoginModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(500).send("some internal error")
    }
}

const DeleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const data = await LoginModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "delete successfully", data })
    } catch (error) {
        console.log(error)
        res.status(500).send("some internal error")
    }
}


const UpdateUser = async (req, res) => {
    const id = req.params.id
    try {
        const data = await LoginModel.findByIdAndUpdate({ _id: id }, {
            $set: {
                fname: req.body.fname,
                lname: req.body.lname,
                phone: req.body.phone,
                email: req.body.email,
                project: req.body.project
            }
        }
        );
        res.status(200).send({ msg: "Updated successfully", data })
    } catch (error) {
        console.log(error)
        res.status(500).send("some internal error")
    }
}

module.exports = { LoginController, GetALLData, DeleteUser, UpdateUser }