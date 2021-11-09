Vue.component("alerta", {
    props: ['tipo', 'posicion','frase'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data() {
        return {
            alerta: this.frase
        };
    }
});
const app = new Vue({
    el: '#cuerpo',
    data: {
        productos: [],
        indice: 0,
        nombre: '',
        cantidad: 0,
        precio: 0,
        totalSub: 0,
        impuesto: 0,
        totalDinero: 0,
        cantProd: 0,
        mostrarInfo: false,
        descripcion: '',
        fraseP: '',
        indexDos: 0
    },
    methods: {
        agregar(){
            var producto = {indice:this.indice, nombre:this.nombre, cantidad:this.cantidad, precio:this.precio, descripcion:this.descripcion, fraseP:this.fraseP}
            this.productos.push(producto);
            this.indice++;
            this.nombre = '';
            this.cantidad = '';
            this.precio = 0;
            this.descripcion = '';
            this.fraseP = '';
        },
        indiceProducto(indice){
            return this.indexDos = indice;
        }
    },
    computed: {
        numProductos(){
            this.cantProd=0;
            this.cantProd = this.productos.length;
            return this.cantProd;
        },
        subtotal(){
            this.totalSub = 0;
            var subtotalP = 0;
            for (var i = 0; i < this.productos.length; i++) {
                subtotalP = this.productos[i].precio * this.productos[i].cantidad;
                this.totalSub = this.totalSub+subtotalP;
            }
            return this.totalSub;
        },
        iva(){
            this.impuesto = this.totalSub*0.16;
            return this.impuesto;
        },
        total(){
            this.totalDinero = this.totalSub + this.impuesto;
            return this.totalDinero;
        }
    }
});
