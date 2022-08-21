<template>
  <v-app>
    <!-- サイドメニュー -->
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダーバー -->
    <v-app-bar app>
      <v-toolbar-title class="mx-auto">
        <h1>
          <nuxt-link to="/">{{ props.title }}</nuxt-link>
        </h1>
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "The title of child component.",
  },
  menu: {
    type: String,
    default: "Script",
    required: false,
  },
});

const drawer = ref(false);

const items = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "page1",
    link: "/page1",
  },
  {
    title: "page2",
    link: "/page2",
  },
];
</script>
