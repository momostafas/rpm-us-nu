<template>
<div>
   <v-app-bar
      color="primary"
      dark
      class="hidden-sm-and-down"
      scroll-target="#mainArea"
    >
      <v-toolbar-title>RPM US</v-toolbar-title>
      <div class="flex-grow-1"></div>
        <v-btn text v-for="item in items" :key="item">
            {{item.text}}
        </v-btn>
    </v-app-bar>
    <v-select class="hidden-md-and-up pr-2 pl-2" label="RPM US"  color="dark" append-icon="fa-bars" background-color="primary" dark :items="items" eager ></v-select>
</div>
</template>
<script>
export default {
    data: () => ({
        items:[{text: "Home"}, {text:"About"}]
    }),
}
</script>
