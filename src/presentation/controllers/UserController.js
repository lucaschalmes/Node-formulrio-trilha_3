const UserService = require("../../domain/user/services/UserService")

class UserController
 {


    handle(req, res, next) {
        const {body} = req
        UserService.createUser(body)
        res.send({
            name:req.body.name,
            email:req.body.email,
            emailc:req.body.emailc,
            cpf:req.body.cpf,
            telefone:req.body.telefone,
            data:req.body.data,
            emailsms:req.body.emailsms,
            whatsapp:req.body.whatsap
            
        });

    }
}

module.exports = new UserController();