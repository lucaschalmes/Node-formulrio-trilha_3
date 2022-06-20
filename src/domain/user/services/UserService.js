const User = require("../mocks/UserMock")

class UserService {
        createUser(body) {
                const { name, email, emailc, cpf,
                        telefone, data, emailsms, whatsapp, country, city, postal_code, address, number } = body


                if (name == "" || name.length < 3) {
                        console.log("nome invalido")
                }
                const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
                if (email == "" || emailRegex.test(email)) {
                        console.log("Email incorreto")
                }
                if (emailc == "" || email !== emailc) {
                        console.log("Email não corresponde")
                }
                function ValidadorCPF(Cpf) {
                        var Soma;
                        var Resto;
                        var i;
                        Soma = 0;
                        if (Cpf == "00000000000") return false;
                        if (Cpf == "11111111111") return false;
                        if (Cpf == "22222222222") return false;
                        if (Cpf == "33333333333") return false;
                        if (Cpf == "44444444444") return false;
                        if (Cpf == "55555555555") return false;
                        if (Cpf == "66666666666") return false;
                        if (Cpf == "77777777777") return false;
                        if (Cpf == "88888888888") return false;
                        if (Cpf == "99999999999") return false;
                        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (11 - i);
                        Resto = (Soma * 10) % 11;
                        if ((Resto == 10) || (Resto == 11)) Resto = 0;
                        if (Resto != parseInt(Cpf.substring(9, 10))) return false;
                        Soma = 0;
                        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (12 - i);
                        Resto = (Soma * 10) % 11;
                        if ((Resto == 10) || (Resto == 11)) Resto = 0;
                        if (Resto != parseInt(Cpf.substring(10, 11))) return false;
                        return true;
                }
                if (cpf == "" || cpf.length < 14 && !ValidadorCPF(cpf.replace(/[^0-9]/g, ''))) {
                        console.log("O CPF não está válido")
                }

                if (telefone == "") {
                        console.log("número de telefone invalido")
                }
                if (data == "") {
                        console.log("data vazio")
                }
                if (whatsapp == "") {
                        console.log("whatsapp vazio")
                }
        }
}




module.exports = new UserService();