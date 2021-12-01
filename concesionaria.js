let autos = [{
    marca :  "Ford",
    modelo : "Fiesta",
    precio : 150000,
    km : 200,
    color : "Azul",
    cuotas : 12,
    anio : 2019,
    patente : "APL123",
    vendido : false
    },

    {
    marca : "Toyota",
    modelo : "Corolla",
    precio :  100000,
    km : 0,
    color : "Blanco",
    cuotas : 14,
    anio : 2019,
    patente : "JJK116",
    vendido : false
    }
]

let concesionaria = {
   autos: autos,
 
buscarAuto: function (patente) {
    let encontrado = null;
        autos.forEach(function (unAuto) {
            if (unAuto.patente == patente) {
                encontrado = unAuto;
            } 
        })
        return encontrado;
    },

venderAuto : function(patente) {
   if (this.buscarAuto(patente))
      this.buscarAuto(patente).vendido = true; 
},

autosParaLaVenta : function (patente) {
   return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},

autosNuevos : function (auto) {
   let autoNuevo = this.autosParaLaVenta(auto).filter(function (elemento){
      return elemento.km < 100;
   })
   return autoNuevo
} ,
listaDeVentas : function () {
  let autosVendidos = this.autos.filter(auto => auto.vendido == true);
  let ventas = [];
  autosVendidos.forEach(function (auto) {
     ventas.push(auto.precio);
  });
  return ventas;
},

totalDeVentas: function(){ 
       let total =  this.listaDeVentas().reduce(function(elemento, acumulador){
          return acumulador + elemento;
          }
          ,0)
        return total;
},

puedeComprar: function(auto,persona){
       let puedeComprar = false;
       let costoTotal = persona.capacidadDePagoTotal - auto.precio;
       let capacidadPago = persona.capacidadDePagoEnCuotas - (auto.precio / auto.cuotas)
       if(costoTotal >= 0 && capacidadPago >= 0){
           puedeComprar = true;
       }
       return puedeComprar;
   },

autosQuePuedeComprar: function(persona){
       let autosDisponiblesVenta = this.autosParaLaVenta()
       let disponible = [];
       autosDisponiblesVenta.forEach(function(elemento){
           let puedeComprar = concesionaria.puedeComprar(elemento, persona);
           if(puedeComprar){
               disponible.push(elemento)
           }
       })
       return disponible;
   }

}