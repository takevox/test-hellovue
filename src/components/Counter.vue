<template>
  <div class="counter">
      <h1>{{ count }}</h1>
      <button @click="increment">increment</button>
      <button @click="reset">reset</button>
      <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  public get count() {
      return this.$store.state.counter.count;
  }

  public increment() {
      this.$store.commit("counter/increment");
  }

  public reset() {
      this.$store.commit("counter/reset");
  }

  public decrement() {
      this.$store.commit("counter/decrement");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
