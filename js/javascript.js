var a = "";

var eMessage = "<div class='eSignal error'></div><div class='text' id='cruz'>[message]</div>";
var cMessage = "<div class='eSignal success'></div><div class='text' id='cruz'>[message]</div>";


/**
 * 
 * @param {type} itemForm
 * @param {type} itemMessage
 * @param {type} type
 * @param {type} reference
 * @returns {Boolean}
 */
function validar(itemForm, itemMessage, type, reference)
{
    
    //Cogemos el valos del input
    if (type == "type4"){
        var iValue = document.getElementById(itemForm).checked;
    } else {
        var iValue = document.getElementById(itemForm).value;
    }
    
    //Cogemos la caja donde ira el mensaje de error
    var iMessage = document.getElementById(itemMessage);

    //Seleccionamos que tipo que validacion tenemos que hacer
    switch (type) {
        case "type1":
            //nombre
            type1(iValue, iMessage);
            break;
        case "type2":
            //mail
            type2(iValue, iMessage, reference);
            break;
        case "type3":
            //password
            type3(iValue, iMessage, reference);
            break;
        case "type4":
            return type4(iValue, iMessage);
            break;
    }
}

/**
 * Function type1: Esta funcion valida que el campo no este vacio.
 * @param {type} iValue
 * @param {type} iMessage
 * @returns {undefined}
 */
function type1(iValue, iMessage) {
    var espacios = /^\s\D{1}|^\|^\s{1,10}\D*|\D*\s{1,10}$|\s$|\D{1}\s$/;
    if (iValue == '') {
        iMessage.innerHTML = eMessage.replace("[message]", "El campo no puede quedar vacio");
    } else if (nom.length < 2 || espacios.test(nom)) {
        iMessage.innerHTML = eMessage.replace("[message]", "El nombre tiene que tener mas de 1 digito y no puede contener espacio al inicio ni al final");
    } else {
        iMessage.innerHTML = cMessage.replace("[message]", "");
    }
}

/**
 * 
 * @param {type} iValue
 * @param {type} iMessage
 * @param {type} reference
 * @returns {undefined}
 */

function type2(iValue, iMessage, reference) {

    if (iValue == '') {
        iMessage.innerHTML = eMessage.replace("[message]", "El campo no puede quedar vacio");
        return;
    }

    if (validateEmail(iValue)) {
        iMessage.innerHTML = cMessage.replace("[message]", "");
    } else {
        iMessage.innerHTML = eMessage.replace("[message]", "El mail no es correcto");
    }

    if (reference) {
        if (iValue == document.getElementById(reference).value) {
            iMessage.innerHTML = cMessage.replace("[message]", "");
        } else {
            iMessage.innerHTML = eMessage.replace("[message]", "El mail no es igual.");
        }
    }

}


/**
 * 
 * @param {type} email
 * @returns {Boolean}
 */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



/**
 * 
 * @param {type} iValue
 * @param {type} iMessage
 * @param {type} reference
 * @returns {undefined}
 */
function type3(iValue, iMessage, reference) {

    if (iValue == '') {
        iMessage.innerHTML = eMessage.replace("[message]", "El campo no puede quedar vacio");
        return;
    }

    if (validatePassword(iValue)) {
        iMessage.innerHTML = cMessage.replace("[message]", "");
    } else {
        iMessage.innerHTML = eMessage.replace("[message]", "La contraseña tiene que estar compuesta por minimo una mayuscula, una minuscula, un numero y un simbolo");
    }

    if (!(iValue.length >= 8 && iValue.length <= 16)) {
        iMessage.innerHTML = eMessage.replace("[message]", "La contraseña tine que tener entre 8 y 16 caracteres");
    }

    if (reference) {
        if (iValue == document.getElementById(reference).value) {
            iMessage.innerHTML = cMessage.replace("[message]", "");
        } else {
            iMessage.innerHTML = eMessage.replace("[message]", "El password no es igual.");
        }
    }
}

/**
 * 
 * @param {type} email
 * @returns {Boolean}
 */
function validatePassword(pass) {
    var re = /(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\00c0-\u01c3])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    return re.test(pass);
}



function type4(iValue, iMessage) {
    if (iValue == false) {
        iMessage.innerHTML = eMessage.replace("[message]", "Tienes que aceptar las condiciones");
        return false
    } else {
        iMessage.innerHTML = cMessage.replace("[message]", "");
        return true
    }
}