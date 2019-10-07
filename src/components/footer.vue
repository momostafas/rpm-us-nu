<template>
  <v-footer
    dark
    app
    color="primary"
    absolute
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary">
        <strong class="subheading">Get in touch with us!</strong>

        <div class="flex-grow-1"></div>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          link
          target="_blank"
          :href="icon.url"
          :title="icon.title"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>RPM US</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [{icon: 'fa-facebook' , url: "https://www.facebook.com/RPMUS" , title:"FaceBook Page"}
        ,
        {icon:'fa-instagram', url:"instagram.com", title:"Instagram Page"},
      ],
    }),
  }
</script>