<template>
  <div id="app">
    <p>enter weight</p>
    <input type="number" name="" id="" />
    <button type="submit" @click="getData()">send weight data</button>
    <pre v-if="response.length !== 0">
       {{ response }}
     </pre
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      response: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000")
        .then((response) => {
          this.response = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
