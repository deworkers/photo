$(document).ready(function() {

    $('#order').validate({ 
        rules:{
            name:{
                required: true,
            },
            mail:{
                required: true,
            },
            quaptca:{
                required: true,
            }
       },

       messages:{
            name:{
                required: "Обязательное поле",
            },
            mail:{
                required: "Обязательное поле",
            },
            quaptca:{
                required: "Обязательное поле",
            }
       }
    });

});