function getSeniales() {
    const seniales = [];
    let input;
    let contador = 0;

    while (contador < 15) {
        input = Math.floor(Math.random() * 361);

        seniales.push(input);
        contador++;
        if (input < 0) {
            alert("Se ha ingresado una señal negativa. Se termina la lectura.");
            break;
        }
    }

    return seniales;
}

const señales = getSeniales();
alert("Señales obtenidas: " + señales.join(", "));

function obtenerCuadrante(angulo) {
    if (angulo < 0 || angulo >= 360) {
        return null;
    }

    if (angulo < 45 || angulo >= 315) {
        return 'N'; 
    } if (angulo >= 45 && angulo < 135) {
        return 'E';
    } if (angulo >= 135 && angulo < 225) {
        return 'S';
    } else {
        return 'O';
    }
}

function obtenerSecuenciaCuadrantes(seniales) {
    let secuencia = '';

    seniales.forEach((señal) => {
        const cuadrante = obtenerCuadrante(señal);
        if (cuadrante !== null) {
            secuencia += cuadrante;
        }
    });

    return secuencia;
}

const secuenciaCuadrantes = obtenerSecuenciaCuadrantes(señales);
alert("Secuencia de cuadrantes: " + secuenciaCuadrantes);
