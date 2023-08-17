const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '강의를 수료해 Vue 배우기!',
            courseGoalB: 'Vue를 마스터해서 멋진 앱을 만드세요!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber  = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');