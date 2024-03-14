$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(91) 23456-7891'
    });
    

    $('#cpf').mask('000.000.000.00', {
        placeholder: '123.456.789.00'
    });

    $('#endereço').mask('00000.000', {
        placeholder: '12345.678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu E-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            endereço: 'Por favor, inisira seu CEP'
        },
    })

        


});