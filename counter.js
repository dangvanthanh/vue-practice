// counter.js

export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment" class="inc">Increment</button>
      <button @click="decrement" class="dec">Decrement</button>
    </div>
  `,

  data() {
    return {
      count: 0
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
