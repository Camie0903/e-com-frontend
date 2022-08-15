<template>
  <!-- <input class="SB" type="text" v-model="search" placeholder="Search..." /> -->
  <div class="row">
    <div class="col-md-3">
    <div v-for ="product in products" v-bind:key="product.id">
    <router-link class="router-text" :to = "{ name: 'SingleProduct', params: { id: product.id }}">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="product.image1" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ product.name }}</p>
          <!-- <p class="card-text-event">{{ product.Date }}</p> -->
          <p class="card-text-event">R{{ product.price }}</p>
          <!-- <p class="card-text-event">{{ product.descriptions }}</p> -->
        </div>
      </div>
    </router-link>
    </div>
  </div>
    <!-- {{allProducts}} -->
   <!-- <div v-for ="product in filteredProducts"
      :key="product.id"
      :product="product"> </div> -->
  </div>
</template>
<script>
// import ProductsCard from "@/components/ProductsCard.vue";
export default {
  // components: { 
  //   ProductsCard,
  //    },
  data() {
    return {
      products: null,
      // search: "",
      // Products:[],
    };
  },

  computed: {
    // filteredProducts() {
      
    //   return this.$store.state.Products?.filter((Product) => {
    //     return Product.name?.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
    // allProducts() {
    //   return this.$store.state.Products
    // }
  },
  mounted() {
    fetch("http://localhost:6969/products", {
    })
    .then ((res) => res.json())
    .then((data) => (this.products = data));
    // this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
.row {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
</style>
