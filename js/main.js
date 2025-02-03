$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })
})

$('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
        },
        
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            endereco: 'Por favor, digite seu endereço completo',
            cep: 'Por favor, digite seu CEP',
            cpf: 'Por favor, digite os 11 núemros do seu CPF'
        },

    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (evento, validator) {
        let camposIncompletos = validator.numberOfInvalids();
        if (camposIncompletos); {
            alert(`Existem ${camposIncompletos} campos incorretos`);
        }
    }
    
})



