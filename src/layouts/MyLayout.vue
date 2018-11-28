<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="secondary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Federico Dib
          <div slot="subtitle"><a href="mailto:federicodib@gmail.com">federicodib@gmail.com</a></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header> -- Menu -- </q-list-header>
          <q-item to="/about-me">
            <q-item-side icon="person" />
            <q-item-main label="About Me" />
          </q-item>
          <q-item to="/clients">
            <q-item-side icon="people" />
            <q-item-main label="Some of my Clients" />
          </q-item>
          <q-item to="/porfolio">
            <q-item-side icon="perm_media" />
            <q-item-main label="Porfolio" />
          </q-item>
          <q-item @click.native="openURL('mailto:federicodib@gmail.com')">
          <q-item-side icon="mail" />
          <q-item-main label="Contact Me" sublabel="federicodib@gmail.com" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
