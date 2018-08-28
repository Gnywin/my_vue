// import { Range } from '@/component/range/index'
export default {
  components: {
    // Range,
    'Range': () =>
      import ('@/component/range/index.vue'),
  },
  data() {
    return {
      minNumber:0,
      maxNumber:100
    };
  },
  mounted() {
    // this.getDetail();
  },
  methods: {
    
  }
}
