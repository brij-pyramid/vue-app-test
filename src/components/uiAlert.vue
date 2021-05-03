<template>
  <div>
    <div>
      <b-alert v-if="alertType==1" show variant="primary"> {{alertTitle}}</b-alert>
      <b-alert v-if="alertType==2" show variant="secondary">Secondary Alert</b-alert>
      <b-alert v-if="alertType==3" show variant="success">Success Alert</b-alert>
      <b-alert v-if="alertType==4" show variant="danger">Danger Alert</b-alert>
      <b-alert v-if="alertType==5" show variant="warning">Warning Alert</b-alert>
      <b-alert v-if="alertType==6" show variant="info">Info Alert</b-alert>
      <b-alert v-if="alertType==7" show variant="light">Light Alert</b-alert>
      <b-alert v-if="alertType==8" show variant="dark">Dark Alert</b-alert>
    </div>
  </div>
</template>
<script>
export default {
    name: 'uiAlert',
    props: {
      alertTitle: String,
      alertType: Number,
    }
}
</script>