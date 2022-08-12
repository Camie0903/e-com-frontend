<template>
  <input class="SB" type="text" v-model="search" placeholder="Search..." />
  <div class="row">
    <!-- {{allProducts}} -->
   <products-card v-for="product in filteredProducts"
      :key="product.product_id"
      :product="product"> </products-card>
  </div>
</template>
<script>
import ProductsCard from "@/components/ProductsCard.vue";
export default {
  components: { 
    ProductsCard,
     },
  data() {
    return {
      search: "",
    };
  },

  computed: {
    filteredProducts() {
      
      return this.$store.state.Products?.filter((Product) => {
        return Product.name?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    allProducts() {
      return this.$store.state.Products
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
.row {
  margin-top: 10px;
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
