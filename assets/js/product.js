app.component('product', {
    template: /* vue-html */ `
        <div class="col">
            <div class="card">
                <img :src="product.image" class="card-img-top" :alt="product.name">
                <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                    <p class="card-text">{{product.description}}</p>
                    <p class="card-text">Precio: $ {{ new Intl.NumberFormat("es-MX").format(product.price) }}</p>
                </div>
                <div class="card-footer">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-4 ">
                        <button v-if="product.stock >= 1" class="btn btn-store me-md-2" type="button" @click="sendToCart($event)">Agregar <i class="fas fa-cart-plus"></i> </button>
                        <span v-else class="text-warning">Sin productos en el stock</span>    
                    </div>
                </div>
            </div>
         </div>

    `,
    props: ["product"],
    emits: ["sendToCart"],

    setup(props, context) {

        function sendToCart() {
            context.emit("sendtocart", props.product);
        }
        return {
            sendToCart
        }
    }
});