export default {
  increment(value: number) {
    this.count += value;
  },
  decrement(value: number) {
    this.count -= value;
  },
  incrementifodd(value: number) {
    if (this.count % 2 !== 0) {
      this.count += value;
    }
  },
  incrementasync(value: number) {
    this.count += value;
  },
};
