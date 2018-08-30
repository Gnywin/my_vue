export default {
  props: {
    minNum: "",
    maxNum: "",
    pointLen: 0
  },
  data() {
    return {
      minNumber: this.minNum || 0, //最小值
      maxNumber: this.maxNum || 100, //最大值
      _width: 0, //屏幕的宽度
      dist: 0, //矫正系数
      // stepLength: 1,
      left: 0, //handle min 的left偏移量
      right: 0, //handle max 的right偏移量
    };
  },
  mounted() {
    this._width = this.$refs.bar.clientWidth
    this.dist = this.$refs.min.clientWidth / this._width * 100
    console.log(this.$refs.min.clientWidth, this._width, this.dist)
  },
  methods: {
    move(event, type) {
      var _left = (event.targetTouches[0].clientX - 10) / this._width * 100;
      if (type == 'min') {
        // 当前最小值不能大于最大值，且不能小于0
        if ((_left + this.right) > 100 || _left < 0) {
          return;
        } else {
          this.left = _left;
        }
      } else {
        // 当前最大值不能小于最小值，且不能大于100
        if (this.left > _left || _left >= 100) {
          return;
        } else {
          this.right = 100 - _left;
        }
      }
    },
  },
  computed: {
    min() {
      return ((this.maxNumber - this.minNumber) * this.left / 100).toFixed(this.pointLen);
    },
    max() {
      return ((this.maxNumber - this.minNumber) * (100 - this.right) / 100).toFixed(this.pointLen);
    }
  }
}
