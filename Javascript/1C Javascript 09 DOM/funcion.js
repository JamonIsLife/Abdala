function secret(){
    const textoEncriptado = document.getElementById('text').value;
    const partes = textoEncriptado.split('(');
    let mensaje = '';
    
    partes.forEach((parte) => {
        if (parte.includes(')')) {
        const textoRevertido = parte.split(')')[0].split('').reverse().join('');
            mensaje += textoRevertido + parte.split(')')[1];
        } else {
            mensaje += parte; 
        }
    });
    
    alert(mensaje);
}