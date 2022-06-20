const UserService = require("../../domain/user/services/UserService")
class UserController2 {


    handle(req, res, next) {
        const{bod}=req
        UserService.createUser(body)
        res.send({
            country:req.body. country,
            city:req.body.city,
            postal_code:req.body. postal_code,
            address:req.body. address,
            number:req.body. number
            
        });
    }
}

module.exports = new UserController2();