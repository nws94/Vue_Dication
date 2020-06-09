import router from '../router/index';

const actions = {
  // 회원가입
  signUp(signUpObj) {
    this.$http.post('/api/user',signUpObj).then((res) => {
      router.push({name:'Home'});
      console.log(res)
    }).catch((err) => {
      console.log(err); 
    })
  },
  signIn({commit},signInObj) {
    this.$http.get(`/api/user/login/${signInObj.user_id}&${signInObj.pw}`).then((res)=> {
      commit("signInSuccess");
      console.log(res);
      router.push({name: 'Home'});
    })
  }

}
export default actions;