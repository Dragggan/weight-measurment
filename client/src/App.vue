<template>
  <div id="app">
    <form action="" method="post">
      <p>enter weight</p>
      <input type="number" name="" id="" />
      <button type="submit"></button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  components: {},
  mounted () {
    axios.get('http://localhost:8081')
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
    console.log(err);
    })
  },
};
</script>

<style scoped>


</style>
