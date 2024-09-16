
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{4,}$/;


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

function generar(){
    
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    
    if(numeroDigitado < 8 ){
        alertas("error", "Your password don't meet our requirements", "Your password must be more than 8 letters");
        return;
    }
    
    
    let password = '';
    
    for(let i=0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        
        password+=caracterAleatorio;
        
    }
    
    contrasena.value = password;
    
    if(regex.test(password) ){
        alertas("success","Your password is strong!")
        
    }else{
        alertas("error","Your password is hackeable XD")
        
    }
    
    
    //desafios - agregar caracteres especiales - done, boton de limpiar - done , validacion si la contrasena es fuerte o debil - done
    //
    
}

function limpiar(){
    console.log(cantidad);
    if(cantidad.value !=="" || contrasena.value !== "" ){
        cantidad.value ="";
        contrasena.value = "";
    }
}

function alertas(icon, title, text = ""){
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 3000
    });
}








