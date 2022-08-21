<template>
  <v-container>
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
            <nuxt-link to="/">{{ title }}</nuxt-link>
          </h1>
        </v-toolbar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <nuxt />
      </v-main>
    </v-app>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);

const title = "Page's title.";

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
