<template>
  <div id="app">
    <section>
      <p>enter weight</p>
      <input type="number" name="" v-model="currentUserWeight" />
      <button type="submit" @click="insertData()">send weight data</button>
    </section>
    <section>
      <pre v-if="response.length !== 0">
       {{ response }}
     </pre
      >
    </section>
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
      currentUserWeight: "",
    };
  },
  methods: {
    insertData() {
      axios
        .post("http://localhost:3000", {
          weight: Number(this.currentUserWeight),
        })
        .then((response) => {
          console.log(response);
       
        })
        .catch((err) => {
          console.log(err);
        });
    },

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

  mounted() {
    this.getData();
  },

  updated () {
       this.getData();
  },
};
</script>

<style scoped></style>
