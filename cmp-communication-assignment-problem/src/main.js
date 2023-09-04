import { createApp } from 'vue'

import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
import App from './App.vue';

const app = createApp(App);

app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app')

// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// 작업 1:
// 앱에 구성 요소 두 개를 추가합니다:
// ActiveUser 구성 요소 및 UserData 구성 요소
// ActiveUser는 사용자 이름(h2)과 사용 기간(h3)을 출력해야 합니다
// UserData는 이름과 나이에 대한 두 개의 입력 필드 =>를 출력해야 합니다
// 옵션: 원하는 스타일링 추가

// Task 2: Output both components side-by-side in your main App template
// 태스크 2: 메인 앱 템플릿에서 구성 요소 측 단락

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
// 작업 3: 사용자 데이터를 추가하고 이름과 연령을 포함하는지 확인합니다
// ActiveUser에서 사용자 데이터를 출력해야 합니다
// 사용자 데이터 구성 요소를 통해 업데이트해야 합니다