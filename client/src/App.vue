<template>
  <div id="app">
    <section>
      <p>enter weight</p>
      <input type="number" name="" v-model="currentUserWeight" />
      <button type="submit" @click="insertData()">send weight data</button>
      <hr />
      <input type="text" name="" v-model="currentuserId" />
      <button type="submit" @click="deleteData()">
        delete user measurments
      </button>
      <hr />
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
      currentuserId: "",
    };
  },
  methods: {
    async getData() {
      await axios
        .get("http://localhost:3000")
        .then((response) => {
          this.response = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async insertData() {
      await axios
        .post("http://localhost:3000", {
          weight: Number(this.currentUserWeight),
        })
        .then((response) => {
          console.log(response);
            this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async deleteData() {
      await axios
        .delete("http://localhost:3000", {
          data: {
          _id: this.currentuserId,
        }
        })
        .then((response) => {
          console.log(response);
             this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getData();
  },

  updated() {
  
  },
};
</script>

<style scoped></style>
