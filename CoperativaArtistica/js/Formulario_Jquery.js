
$("#formulario_registro").validate({
    rules: {
        nombres: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        apellidos: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        correo: {
            required: true,
            email: true
        },
        contraseñas: {
            required: true,
            minlength: 4,
            maxlength: 20
        }
    }
})


$("#Registrar").click(function() {
    if($("#formulario_registro").valid() == false) {
        return;
    }
    let nombres = $("#nombres").val()
    let apellidos = $("#apellidos").val()
    let correo = $("#correo").val()
    let contraseñas = $("#contraseñas").val()
    let terminos = $("#termino").is(":checked")

    console.log(nombre)
    console.log(apellido)
})