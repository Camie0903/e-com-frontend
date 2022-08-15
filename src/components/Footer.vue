<template>
  <div class="wave">
    <v-footer class="wave">
      <p>
        20 Upper Short Road<span>
          Somewhere in Towm </span
        >
      </p>
      <span class="right">
        <p>Western Cape<span> South Africa</span></p>
        <p class="contact">
          Alliance Anime Contacts For enquires on existing products:<br />
          info@allianceanime.co.za 023 340 4220<br />
        </p>
      </span>
      <p class="copy">Made with love @ Alliance Anime</p>
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
