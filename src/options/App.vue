<template>
  <div>
    <h1>Trello Archive Cleaner</h1>
    <a @click="handleClean()">Clean</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome!'
    }
  },
  methods: {
    handleClean() {
      console.log('Cleaning Started');
      alert('Cleaning Started');
    },
  },
};
</script>

<style lang="stylus">
</style>
