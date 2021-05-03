<template>
  <div>
    <h4>Following user name is retrived from store</h4> <br>
    <h5> {{ getStoredUserName }} </h5>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  computed: 
    mapGetters(["getStoredUserName"])
}
</script>