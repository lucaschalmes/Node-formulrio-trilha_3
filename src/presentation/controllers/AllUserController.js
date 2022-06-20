const UserService = require("../../domain/user/services/UserService")
class AllUserController {


    handle(req, res, next) {
        const{body}=req
        UserService.createUser(body)
        res.send({
            name:req.body.name,
            email:req.body.email,
            emailc:req.body.emailc,
            cpf:req.body.cpf,
            telefone:req.body.telefone,
            data:req.body.data,
            emailsms:req.body.emailsms,
            whatsapp:req.body.whatsapp,
            country:req.body. country,
            city:req.body.city,
            postal_code:req.body. postal_code,
            address:req.body. address,
            number:req.body. number
            
        });
    }
}

module.exports = new AllUserController();