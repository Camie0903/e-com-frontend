<template>
   <div class="onecard">
    <div v-if="Product">
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img v-bind:src="Product.Img" class="img-fluid" style="width: 30rem"  />
          <div class="card-body">
            <p class="card-text">{{ Product.name }}</p>
            <p class="card-text">{{ Product.Date }}</p>
            <p class="card-text">R{{ Product.price }}</p>
            <!-- <p class="card-text">{{ Product.descriptions }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  mounted() {
    fetch("http://localhost:6969/products" + this.product_id)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
};
</script>
<style>
    .onecard{
      padding: 50px;
    }
    
</style>