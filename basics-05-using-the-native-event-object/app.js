const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // 메소드와 다르게 해당 되는 영역을 사용해야만 콘솔이 찍힘!
  computed: {
    fullname() {
      console.log('Runnig again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + '사원';
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name='';
    }
  }
});

app.mount('#events');
