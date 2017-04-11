<template lang="html">
  <button @click.prevent="activate">+1</button>
</template>

<script>
export default {
  methods: {
    activate() {
      console.log('+1 presed');
    },
  },
};
</script>

<style lang="css">
</style>
