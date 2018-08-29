
export default {
  components: {
    // Range,
    'Range': () =>
      import ('@/component/range/index.vue'),
    'vueRange': () =>
      import ('@/component/vue_range/range.vue'),
  },
  data() {
    return {
    };
  },
  mounted() {
  }
}
