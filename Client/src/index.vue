<template>
  <div class="example">
    <br>
    <form @submit="submit">
      <input type = "text" placeholder="summoner name" v-model="Username"></input>
      <select v-model="Region">
        <option value="EUW">EUW</option>
        <option value="EUNE">EUNE</option>
        <option value="BR">BR</option>
        <option value="JP">JP</option>
        <option value="KR">KR</option>
        <option value="LAN">LAN</option>
        <option value="LAS">LAS</option>
        <option value="NA">NA</option>
        <option value="OCE">OCE</option>
        <option value="TR">TR</option>
        <option value="RU">RU</option>
        <option value="PBE">PBE</option>
      </select>
      <br>
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Username: null,
      Region: 'EUW',
    }
  },
  methods: {
    submit:function(e) {
      console.log(this.$router);
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
