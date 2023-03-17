const datos = [
    {
        'cuidad':'Bogota',
        'precio': 500

    },
    {
        'cuidad':'Lima',
        'precio': 400

    },
    {
        'cuidad':'Santiago',
        'precio': 380

    },
    {
        'cuidad':'Montevideo',
        'precio': 200

    }
];

const presupuestoDisponible = 5000;

let i = 0;

while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}

if (i == datos.length)
    print("No tenemos pasajes disponibles");
    else
    print("Puedes comprar tu pasaje para: " + datos[i].cuidad);





















    function print(mensaje){
    console.log(mensaje);
}    