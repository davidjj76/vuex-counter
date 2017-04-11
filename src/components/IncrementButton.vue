<template lang="html">
  <button @click.prevent="INCREMENT">+1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'INCREMENT',
    ]),
  },
};
</script>

<style lang="css">
</style>
