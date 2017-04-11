<template lang="html">
  <div>
    <p>Count is: {{ counter }}</p>
    <p>Double count is: {{ doubleCounter }}</p>    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState([
      'counter',
    ]),
    ...mapGetters([
      'doubleCounter',
    ]),
  },
};
</script>

<style lang="css">
</style>
