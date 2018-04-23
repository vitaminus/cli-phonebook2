<template>
  <div class="row">
    <h3>Sign In</h3>
    <div class="col s12">
      <div class="row">
        <div class="input-field col offset-s3 s6">
          <input type="email" v-model="email" name="email" id="user-email" v-validate="'required|min:10|max:50|email'" class="validate">
          <label for="user-email">Email</label>
          <div class="error-block">
            <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="input-field col offset-s3 s6">
          <input type="password" v-model="password" name="password" id="user-password" v-validate="'required|min:9|max:30'" class="validate">
          <label for="user-password">Password</label>
          <div class="error-block">
            <span class="error" v-show="errors.has('password')">{{ errors.first('password') }}</span>
          </div>
        </div>
      </div>
      <div class="row" v-show="hasError">
        <div class="col offset-s2 s8 error">{{ message }}</div>
      </div>
      <div class="row">
        <button v-bind:disabled="errors.any()" @click="signIn" class="btn">Enter</button>
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
          vm.$router.replace('phones')
        },
        function (err) {
          vm.hasError = true
          if (err.message.includes('no user record corresponding')) {
            vm.message = 'Wrong email!'
          } else if (err.message.includes('password is invalid')) {
            vm.message = 'Password is invalid!'
          } else {
            console.log('Error!!! ' + err.message)
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
