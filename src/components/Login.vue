<template>
  <div class="row">
    <h3>Sign In</h3>
    <div class="col s12">
      <div class="row">
        <div class="input-field col offset-s3 s6">
          <input type="email" v-model="email" name="email" id="user-email" class="validate">
          <label for="user-email">Email</label>
        </div>
        <div class="input-field col offset-s3 s6">
          <input type="password" v-model="password" name="password" id="user-password" class="validate">
          <label for="user-password">Password</label>
        </div>
      </div>
      <div class="row">
        <button @click="signIn" class="btn">Enter</button>
      </div>
      <span>or create new <router-link to="/sign-up">account</router-link>.</span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      message: '',
      hasError: false
    }
  },
  methods: {
    signIn: function () {
      const vm = this
      vm.message = ''
      vm.hasError = false

      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          vm.hasError = false
          vm.email = ''
          vm.password = ''
          vm.$validator.reset()
          console.log('Logged in!')
          this.$router.replace('phones')
        },
        function (err) {
          console.log('Error!!! ' + err.message)
          vm.hasError = true
          vm.message = err.message
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
