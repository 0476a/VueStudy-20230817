const app = Vue.createApp({
    data() {
        return {
            courseGoal: '강의를 수료해 Vue 배우기!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');