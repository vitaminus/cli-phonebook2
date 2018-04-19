<template>
  <div class="row">
    <div class="col s12 right-align logout">
      <span>{{ currentUser.email }}</span>
      <a href="#" @click="logout" class="">Logout</a>
    </div>
    <div class="row"></div>
    <h1>{{ title }}</h1>
    <div class="input-field col s6 l5">
      <input type="text" name="name" id="phone-name" v-model="phone.name" v-validate="'required|min:5|max:40|alpha_spaces'">
      <label for="phone-name">Name</label>
      <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
    </div>
    <div class="input-field col s6 l5">
      <the-mask type="text" :mask="['+### (##)-###-##-##']" :masked=true id="phone-number" name="number" v-model="phone.number" v-validate="'required|min:19'" />
      <label for="phone-number">Number</label>
      <div class="error-block">
        <span class="error" v-show="errors.has('number')">{{ errors.first('number') }}</span>
      </div>
    </div>
    <button v-bind:disabled="errors.any()" class="btn col s12 l2" @click="addPhone()">Add Phone</button>
    <div>
    </div>
    <EditPhone v-show="edit" phones=phones />
    <h6 class="col s12 right-align">Phones count: {{ allPhones }}</h6>
    <div class="input-field col offset-s7 s5 offset-l9 l3 right-align">
      <input type="text" v-model="filter" id="phones-filter" class="">
      <label for="phones-filter">Filter by name</label>
    </div>
    <div v-if="filteredPhones.length">
      <div class="hide-on-small-only">
        <table class="highlight centered">
          <thead>
            <tr>
              <!-- <th>ID</th> -->
              <th width="35%">Name</th>
              <th width="35%">Number</th>
              <th width="30%" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody v-for="phone of filteredPhones" :key="phone['.key']">
            <tr v-if="!phone.edit">
              <!-- <td>{{ phone['.key'] }}</td> -->
              <td>{{ phone.name }}</td>
              <td>{{ phone.number }}</td>
              <td>
                <button @click="editPhone(phone['.key'])" class="btn-small">Edit</button>
              </td>
              <td>
                <button @click="removePhone(phone['.key'])" class="btn-small">Remove</button>
              </td>
            </tr>
            <tr v-else>
              <td>
                <input type="text" id="phone-name" name="name" v-model="phone.name" v-validate="'required|min:5|max:40'">
              </td>
              <td>
                <the-mask type="text" name="number" :mask="['+### (##)-###-##-##']" :masked=true id="phone-number" v-model="phone.number" v-validate="'required|min:19'" />
              </td>
              <td>
                <button @click="saveEdit(phone)" class="btn-small">Save</button>
              </td>
              <td>
                <button @click="cancelEdit(phone['.key'])" class="btn-small">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="hide-on-med-and-up">
        <div v-for="phone of filteredPhones" :key="phone['.key']" class="col s12">
          <div v-if="!phone.edit" class="card">
            <div class="card-content">
              <span class="card-title">{{ phone.name }}</span>
              <span class="card-title">{{ phone.number }}</span>
            </div>
            <div class="card-action">
              <button @click="editPhone(phone['.key'])" class="btn">Edit</button>
              <button @click="removePhone(phone['.key'])" class="btn">Remove</button>
            </div>
          </div>
          <div v-else class="card">
            <div class="card-content">
              <input type="text" id="phone-name" name="name" v-model="phone.name" v-validate="'required|min:5|max:40'">
              <the-mask type="text" name="number" :mask="['+### (##)-###-##-##']" :masked=true id="phone-number" v-model="phone.number" v-validate="'required|min:19'" />
            </div>
            <div class="card-action">
              <button @click="saveEdit(phone)" class="btn">Save</button>
              <button @click="cancelEdit(phone['.key'])" class="btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="col offset-s4 s4 not-found">Phones not found</p>
    </div>
  </div>
</template>

<script>
import EditPhone from './EditPhone.vue'
import { phonesRef } from '../firebase'
import firebase from 'firebase'
import { TheMask } from 'vue-the-mask'
export default {
  name: 'Phones',
  components: {
    EditPhone,
    TheMask
  },
  // props: {
  //   title: String
  // },
  data: function () {
    return {
      title: 'Phonebook',
      filter: '',
      phones: [],
      edit: false,
      phone: {
        name: '',
        number: ''
      }
    }
  },
  firebase: {
    phones: phonesRef
  },
  computed: {
    allPhones: function () {
      return this.filteredPhones.length
    },
    filteredPhones: function () {
      let userId = this.currentUser.uid
      return this.phones.filter(phone =>
        phone.name.toLowerCase().includes(this.filter) && phone.userId === userId)
    },
    currentUser: function () {
      return firebase.auth().currentUser
    }
  },
  methods: {
    addPhone () {
      this.$validator.validateAll().then(res => {
        if (res) {
          const userId = this.currentUser.uid
          phonesRef.push({name: this.phone.name, number: this.phone.number, userId: userId, edit: false})
          this.phone.name = ''
          this.phone.number = ''
          this.$validator.reset()
        }
      })
    },
    editPhone (key) {
      phonesRef.child(key).update({ edit: true })
    },
    removePhone (key) {
      phonesRef.child(key).remove()
    },
    cancelEdit (key) {
      phonesRef.child(key).update({ edit: false })
    },
    saveEdit (phone) {
      this.$validator.validateAll().then(res => {
        if (res) {
          const key = phone['.key']
          phonesRef.child(key).set({ name: phone.name, number: phone.number, edit: false })
          this.phone.name = ''
          this.phone.number = ''
          this.$validator.reset()
        }
      })
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.pointer {
  cursor: pointer;
}

span.error {
  color: red;
}

.error-block {
  display: block;
  height: 50px;
}

p.not-found {
  font-size: 18px;
}

.logout {
  font-size: 18px;
  font-weight: 500;
}
</style>
