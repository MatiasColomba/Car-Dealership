let autos = require("./autos.js");
let precioAutosVendidos = [];
let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 7200,
  capacidadDePagoTotal: 10000000,
};
const concesionaria = {
  autos: autos, //atributo llamado autos que contenga la lista de automóviles importada anteriormente.
  
  buscarAuto: function(patente){
    autoBuscado = this.autos.filter(function(auto){
    return auto.patente == patente
    })
    return autoBuscado.length > 0 ? autoBuscado[0] : null
  },
  venderAuto: function (patente) {
    //recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
    let autoVendido = this.buscarAuto(patente);
    if(autoVendido != null){
      this.autos.forEach((auto,i) => {
        if(auto.patente == patente){
          this.autos[i].vendido = true
        }
      })
    }
  },
  autosParaLaVenta: function (patente) {
    //poder tener la lista de autos para la venta
    return autos.filter((autos) => autos.vendido == false);
  },
  autosNuevos: function (patente) {
    //cuáles de los autos para la venta son 0 km(<100km)
    let esNuevo = this.autosParaLaVenta(patente);
    return esNuevo.filter((autos) => autos.km < 100);
  },
  listaDeVentas: function () {
    let autosVendidos = autos.filter((autos) => autos.vendido == true);
    for (let i = 0; i < autosVendidos.length; i++) {
      precioAutosVendidos.push(autosVendidos[i].precio);
    }
    return precioAutosVendidos;
  },

  totalDeVentas: function () {
    let autosVendidos = autos.filter((autos) => autos.vendido == true);
    if (autosVendidos == 0) {
      let precioTotalAutosVendidos = 0;
      return precioTotalAutosVendidos;
    } else {
      for (let i = 0; i < autosVendidos.length; i++) {
        let precioDeAutosVendidos = autosVendidos.map((auto) => {
          return autosVendidos[i].precio;
        });
        let precioTotalAutosVendidos = precioDeAutosVendidos.reduce(function (
          acum,
          precio
        ) {
          return acum + precio;
        });
        return precioTotalAutosVendidos;
      }
    }
  },
  puedeComprar: function (patente) {
    let autoParaComprar = this.buscarAuto(patente);
    if (autoParaComprar != null) {
      let precioAutoEnCuotas = autoParaComprar.precio / autoParaComprar.cuotas;
      return (
        autoParaComprar.precio <= persona.capacidadDePagoTotal &&
        precioAutoEnCuotas <= persona.capacidadDePagoEnCuotas
      );
    } else {
      return "El auto que busca No Existe o no esta para vender";
    }
  },
  autosQuePuedeComprar: function (persona) {
    let autosParaLaVenta = this.autosParaLaVenta();
    let puedeComprarlos = [];
    for (let i = 0; i < autosParaLaVenta.length; i++) {
      puedeComprarlos.push(
        this.puedeComprar(autosParaLaVenta[i].patente, persona)
      );
    }
    let listaDeAutosQuePuedeComprar = [];
    for (let i = 0; i < puedeComprarlos.length; i++) {
      if (puedeComprarlos[i] == true) {
        listaDeAutosQuePuedeComprar.push(autosParaLaVenta[i]);
      }
    }
    return listaDeAutosQuePuedeComprar;
  },
};

console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.autos);