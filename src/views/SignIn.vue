<template>
  <v-otp-input style="margin-top: 18%;" v-model="otp" type="password" length="6" variant="solo-inverted"
    @change="updateOtp($event, otp)"></v-otp-input>
</template>

<script>
import { VOtpInput } from 'vuetify/labs/VOtpInput'
import { supabase } from "../supabase";

export default {
  components: {
    VOtpInput,
  },
  data: () => ({
    otp: '',

  }),
  methods: {
    async updateOtp(event, otp) {
      let phoneNumber = localStorage.getItem('number');
      if (otp.length === 6) {

        let { session, error } = await supabase.auth.verifyOtp({
          phone: phoneNumber,
          token: otp,
          type: 'sms'
        })
        if (error) {
          alert(error.msg)
        }
      }
    },
  }
}
</script>
<style lang="">

</style>