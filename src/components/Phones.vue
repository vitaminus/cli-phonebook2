<template>
  <div class="row">
    <h1>{{ title }}</h1>
    <div class="input-field col s5">
      <input type="text" name="name" id="phone-name" v-model="phone.name" v-validate="'required|min:5|max:40|alpha_spaces'">
      <label for="phone-name">Name</label>
      <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
    </div>
    <div class="input-field col s5">
      <the-mask type="text" :mask="['+### (##)-###-##-##']" :masked=true id="phone-number" name="number" v-model="phone.number" v-validate="'required|min:19'" />
      <label for="phone-number">Number</label>
      <div class="error-block">
        <span class="error" v-show="errors.has('number')">{{ errors.first('number') }}</span>
      </div>
    </div>
    <button v-bind:disabled="errors.any()" class="btn col s2" @click="addPhone()">Add Phone</button>
    <div>
    </div>
    <EditPhone v-show="edit" phones=phones />
    <h6 class="col offset-s9 s3">Phones count: {{ allPhones }}</h6>
    <div class="input-field offset-s8 col s4">
      <input type="text" v-model="filter" id="phones-filter" class="">
      <label for="phones-filter">Filter by name</label>
    </div>
    <div v-if="phones.length">
      <table class="highlight">
        <thead>
          <tr>
            <!-- <th>ID</th> -->
            <th width="35%">Name</th>
            <th width="35%">Number</th>
            <th width="15%">Edit Phone</th>
            <th width="15%">Delete Phone</th>
          </tr>
        </thead>
        <tbody v-for="phone of filteredPhones" :key="phone['.key']">
          <tr v-if="!phone.edit">
            <!-- <td>{{ phone['.key'] }}</td> -->
            <td>{{ phone.name }}</td>
            <td>{{ phone.number }}</td>
            <td @click="editPhone(phone['.key'])" class="pointer">
              <button class="btn-small">Edit</button>
            </td>
            <td @click="removePhone(phone['.key'])" class="pointer">
              <button class="btn-small">Remove</button>
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
  </div>
</template>

<script>
import EditPhone from './EditPhone.vue'
import { phonesRef } from '../firebase'
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
      return this.phones.filter(phone =>
        phone.name.toLowerCase().includes(this.filter))
    }
  },
  methods: {
    addPhone () {
      this.$validator.validateAll().then(res => {
        if (res) {
          phonesRef.push({name: this.phone.name, number: this.phone.number, edit: false})
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
      const key = phone['.key']
      phonesRef.child(key).set({ name: phone.name, number: phone.number, edit: false })
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
</style>
