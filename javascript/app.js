function guardartexto(){
    let textoingresado = document.getElementById("textousuario").value;
    if(textoingresado){   
        let textoencriptado = encriptartexto(textoingresado);
        cambiarvalores(textoencriptado)
        alert(textoencriptado);
    }else{
        alert(`Por favor ingrese un valor`);
    }
}

function encriptartexto(textoaencriptar){
    return textoaencriptar.replace(/[aeiou]/g, function(coicidencias){
        if (coicidencias === 'a') return 'ppe';
        if (coicidencias === 'e') return 'asda';
        if (coicidencias === 'i') return 'grs';
        if (coicidencias === 'o') return 'gas';
        if (coicidencias === 'u') return 'gaw';
    });
}

function desenciptartexto(textoadesencriptar){
    return textoadesencriptar.replace(/ppe|asda|grs|gas|gaw|/g, function(coicidencias){
        if (coicidencias === 'ppe') return 'a';
        if (coicidencias === 'asda') return 'e';
        if (coicidencias === 'grs') return 'i';
        if (coicidencias === 'gas') return 'o';
        if (coicidencias === 'gaw') return 'u';
    });
}

function cambiarvalores(textoencriptado){
    let assetsviejos = document.getElementById("assets");
    let cambiosassetst = `
<div class="pantalla_principal_derecha_resultado_cambio">
    <section>
        <textarea disabled class="pantalla_principal_derecha_resultado_subtitulo_cambio">${textoencriptado}
        </textarea>
        <button class="pantalla_principal_derecha_resultado_button_cambio">
        copiar
        </button>
        </section>
</div>
    `;
    assetsviejos.innerHTML = cambiosassetst;
}