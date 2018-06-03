<template>
  <div class="example">
    {{ msg }}
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Summoner name!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
