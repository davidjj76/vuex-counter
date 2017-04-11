<template>
  <div id="app">
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Counter</h3>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/CounterDisplay';
import Increment from './components/IncrementButton';

export default {
  name: 'app',
  components: {
    Counter,
    Increment,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
