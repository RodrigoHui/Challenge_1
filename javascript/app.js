function encriptarTexto(){
    let textoingresado = document.getElementById("textousuario").value;
    if(textoingresado){   
        let textoencriptado = modificarTexto(textoingresado, 'encriptar');
        limpiarcaja();
        cambiarvalores(textoencriptado);
    }else{
        alert(`Por favor ingrese el texto a `);
    }
}

function desencriptarTexto(){
    let textoingresado = document.getElementById("textousuario").value;
    if(textoingresado){   
        let textodesencriptado = modificarTexto(textoingresado, 'desencriptar');
        limpiarcaja();
        cambiarvalores(textodesencriptado)
    }else{
        alert(`Por favor ingrese un valor`);
    }
}

function modificarTexto(texto, accion){
    if (accion == 'encriptar'){
        let resultado = texto.replace(/[aeiou]/g, function(coicidencias){
            if (coicidencias === 'a') return 'ai';
            if (coicidencias === 'e') return 'enter';
            if (coicidencias === 'i') return 'imes';
            if (coicidencias === 'o') return 'ober';
            if (coicidencias === 'u') return 'ufat';
            return coicidencias;
        });
        return resultado
    }else if (accion == 'desencriptar'){
        let resultado = texto.replace(/ai|enter|imes|ober|ufat|/g, function(coicidencias){
            if (coicidencias === 'ai') return 'a';
            if (coicidencias === 'enter') return 'e';
            if (coicidencias === 'imes') return 'i';
            if (coicidencias === 'ober') return 'o';
            if (coicidencias === 'ufat') return 'u';
            return coicidencias
        });
        return resultado
    }
    return texto;
}


function cambiarvalores(textomodificado){
    let assetsviejos = document.getElementById("assets");
    let cambiosassetst = `
<div class="pantalla_principal_derecha_resultado_cambio">
    <section>
        <textarea disabled id="textoresultado" class="pantalla_principal_derecha_resultado_encriptado">${textomodificado}
        </textarea>
        <button onclick="copiarTexto();" class="pantalla_principal_derecha_resultado_button_copiar">
        copiar
        </button>
        </section>
</div>
    `;
    return assetsviejos.innerHTML = cambiosassetst;
}

function copiarTexto(){
    let textoresultado = document.getElementById("textoresultado")
    textoresultado.select();
    textoresultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoresultado.value);
    alert("Copiado")
}

function limpiarcaja(){
    document.getElementById("textousuario").value="";
}