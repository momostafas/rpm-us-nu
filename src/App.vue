<template>
<!-- App.vue -->

<v-app color="primary" background-color="primary">
  <appBar> </appBar>
    <v-content id="mainArea">
  <router-view ></router-view>
    </v-content>
  <appFooter />
</v-app>
</template>

<script>
import appBar from './components/appBar'
import appFooter from './components/footer'
export default {
  name: 'App',
  components: {
    appBar,
    appFooter
  },
  data: () => ({
    //
  }),
};
</script>
<style>
body{
  font-family: 'Raleway', sans-serif !important;
}
</style>