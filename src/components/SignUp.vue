<template>
  <div class="row">
    <h3>Sign Up</h3>
    <div class="col s12">
      <div class="row">
        <div class="input-field col offset-s3 s6">
          <input type="email" v-model="email" name="email" id="user-email" class="validate" v-validate="'required|min:10|max:50|email'">
          <label for="user-email">Email</label>
          <div class="error-block">
            <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="input-field col offset-s3 s6">
          <input type="password" v-model="password" name="password" id="user-password" class="validate" v-validate="'required|min:9|max:30'">
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
        <button @click="signUp" v-bind:disabled="errors.any()" class="btn">Sign Up</button>
      </div>
      <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: '',
      message: '',
      hasError: false
    }
  },
  methods: {
    signUp: function () {
      const vm = this
      vm.message = ''
      vm.hasError = false

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          vm.message = 'Accout created successfully!'
          vm.hasError = false
          vm.email = ''
          vm.password = ''
          vm.$validator.reset()
          this.$router.replace('phones')
        },
        function (err) {
          console.log('Error!!!' + err.message)
          vm.hasError = true
          vm.message = err.message
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
