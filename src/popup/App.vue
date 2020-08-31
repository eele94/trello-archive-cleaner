<template>
  <div class="container">
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
      const archived = Array.from(document.querySelectorAll('#content > div > div.board-menu.js-fill-board-menu > div > div > div.board-menu-content.u-fancy-scrollbar.js-board-menu-content-wrapper > div > div.archive-content.js-archive-content > div > div p > a.js-delete'));
      alert('chrome', chrome);
    },
  },
};
</script>

<style>
 .container {
   padding: 1rem;
 }
</style>
