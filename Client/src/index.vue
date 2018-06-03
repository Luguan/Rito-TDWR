<template>
  <div class="example">
    {{ msg }}
    <br>
    <input type = "text" placeholder="summoner name"></input>
    <select>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
