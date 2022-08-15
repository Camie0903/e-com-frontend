<template>
   <div class="onecard">
    <div v-if = "product">
    <div v-for ="product in product"
      v-bind:key="product.id"> 
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img v-bind:src="product.image1" class="img-fluid" style="width: 30rem"  />
          <div class="card-body">
            <p class="card-text">{{ product.name }}</p>
            <p class="card-text">{{ product.stock }}</p>
            <p class="card-text">R{{ product.price }}</p>
            <!-- <p class="card-text">{{ Product.descriptions }}</p> -->
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ProductsCard from "@/components/ProductsCard.vue";
export default {
  // props: ["id"],
  // components: { 
  //   ProductsCard,
  //    },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("http://localhost:6969/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));

      console.log(this.product);
  },
};
</script>
<style>
    .onecard{
      padding: 50px;
    }
    
</style>