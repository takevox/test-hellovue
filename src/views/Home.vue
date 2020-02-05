<template>
  <div class="home">
      <Counter></Counter>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'

export default {
  name: 'home',
  components: {
      Counter
  },
  computed: {
  },
  methods: {
  }
}
</script>
