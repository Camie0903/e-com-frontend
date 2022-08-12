<template>
  <div class="wave">
    <v-footer class="wave">
      <p>
        20 Lower Long Street<span>
          Riversdale (Located on the Garden Route)</span
        >
      </p>
      <span class="right">
        <p>Western Cape<span> South Africa</span></p>
        <p class="contact">
          C-A-S-H ESTATE Contacts For enquires on existing events:<br />
          info@cashestate.co.za 023 340 4220<br />
          For bookings: admin@cashestate.co.za 023 340 4220
        </p>
      </span>
      <p class="copy">Made with love @ C-A-S-H EVENTS</p>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
.contact {
  text-align: center;
}

.wave {
  background-color: black;
  color: white;
  height: 20vh;
  text-align: center;
  font-size: 12px;
}

.right {
  text-align: center;
}
.copy {
  text-align: center;
}
p {
  margin-top: 0;
  margin-bottom: 7px;
}
</style>
