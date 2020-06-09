
const mutations = {
  signInSuccess(state) {
    state.isSignIn = false;
  },
  signInError(state){
    state.isSignIn = true;
  }
}
export default mutations;
