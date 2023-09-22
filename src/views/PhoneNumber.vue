<template>
  <v-sheet width="300" style="margin-top: 18%;" class="mx-auto ">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import router from "@/router";

import { supabase } from "../supabase";


export default {
  data: () => ({
    phoneNumber: ''
  }),
  methods: {
    async submitForm() {
      if (this.phoneNumber.length < 10) {
        alert('Please enter a valid phone number')
        return
      }
      let { data, error } = await supabase.auth.signInWithOtp({
        phone: this.phoneNumber,
      })

      if (data.messageId) {
        localStorage.setItem('number', this.phoneNumber)
        router.push({ name: "signin" });
      }


      if (error) {
        alert(error.msg)
      }
    }
  }
}
</script>