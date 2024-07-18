function encriptarTexto(){
    let textoingresado = document.getElementById("textousuario").value;
    if(textoingresado){   
        let textoencriptado = modificarTexto(textoingresado, 'encriptar');
        cambiarvalores(textoencriptado)
        alert(textoencriptado);
    }else{
        alert(`Por favor ingrese un valor`);
    }
}

function desencriptarTexto(){
    let textoingresado = document.getElementById("textousuario").value;
    if(textoingresado){   
        let textodesencriptado = modificarTexto(textoingresado, 'desencriptar');
        cambiarvalores(textodesencriptado)
        alert(textodesencriptado);
    }else{
        alert(`Por favor ingrese un valor`);
    }
}

function modificarTexto(texto, accion){
    if (accion == 'encriptar'){
        let resultado = texto.replace(/[aeiou]/g, function(coicidencias){
            if (coicidencias === 'a') return 'ppe';
            if (coicidencias === 'e') return 'asda';
            if (coicidencias === 'i') return 'grs';
            if (coicidencias === 'o') return 'gas';
            if (coicidencias === 'u') return 'gaw';
            return coicidencias;
        });
        return resultado
    }else if (accion == 'desencriptar'){
        let resultado = texto.replace(/ppe|asda|grs|gas|gaw|/g, function(coicidencias){
            if (coicidencias === 'ppe') return 'a';
            if (coicidencias === 'asda') return 'e';
            if (coicidencias === 'grs') return 'i';
            if (coicidencias === 'gas') return 'o';
            if (coicidencias === 'gaw') return 'u';
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
        <textarea disabled class="pantalla_principal_derecha_resultado_subtitulo_cambio">${textomodificado}
        </textarea>
        <button class="pantalla_principal_derecha_resultado_button_cambio">
        copiar
        </button>
        </section>
</div>
    `;
    return assetsviejos.innerHTML = cambiosassetst;
}