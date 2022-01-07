
<template>
  <q-page padding>
    <h1>Experiments <q-icon name="local_cafe" style="font-size:0.5em; margin-top:-1em" /></h1>
    <h2>personal projects, expriments, prototypes, POC, etc.</h2>
    <div class="row">
        <div class="col" style="padding:10px" v-for="item in items" :key="item.id" @click="goto(item)">
          <q-card style="min-height:330px">
            <q-card-media>
              <img v-bind:src="item.thumbnail">
            </q-card-media>
            <q-card-title style="font-size:18px">
              {{item.name}}
              <span slot="subtitle">{{item.tech}}</span>
            </q-card-title>
            <q-card-separator />
            <q-card-main>
              <div v-html="item.description"> </div>
              <q-card-separator style="margin-top:15px; margin-bottom:15px" />
              <strong>What was/am I doing here: </strong>  {{item.type}}
            </q-card-main>
          </q-card>
      </div>
    </div>
    <q-modal v-model="opened">
      <div style="padding:10px">
        <q-btn color="tertiary" flat label="Back" @click="opened = false" icon="arrow_back" /> <div style="float:right; padding-top:10px; padding-right:15px"><strong>{{selectedItem.name}}</strong></div>
        </div>
        <div>
        <img v-bind:src="selectedItem.large" style="width:100%; max-width:960px; height:auto">
        <q-spinner-ball size="50px" color="primary"></q-spinner-ball></div>
    </q-modal>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </q-page>
</template>
<style>
.q-card {
  cursor: pointer;
}
</style>

<script>
export default {
  data () {
    return {
      name: 'PageExperiments',
      opened: false,
      items: [],
      selectedItem: [],
      loading: false
    }
  },
  methods: {
    loadData () {
      let fakeapi = [
        {
          'name': 'Music Gear Search SPA VUE',
          'thumbnail': 'assets/img/portafolio/gearsearchvue.jpg',
          'type': 'SPA - Proof of concept',
          'url': 'https://gear-search.vercel.app/#/',
          'description': 'The objective of this SPA is to aid in the research of gear before buying. <br> <br> A ONE STOP search app that will find the top search results from Youtube reviews, music forums, and online stores prices. This is a migration of the original MGS SPA from React to Vue',
          'tech': 'VUE 3, Quasar Framework'
        },
        {
          'name': 'Music Gear Search SPA',
          'thumbnail': 'assets/img/portafolio/gearsearcg.jpg',
          'type': 'SPA - Proof of concept',
          'url': 'https://inspiring-bassi-59a5be.netlify.com/',
          'description': 'The objective of this SPA is to aid in the research of gear before buying. <br> <br> A ONE STOP search app that will find the top search results from Youtube reviews, music forums, and online stores prices.',
          'tech': 'REACT, Material-UI'
        },
        {
          'name': 'News / Blog SPA',
          'thumbnail': 'assets/img/portafolio/pitazotest.jpg',
          'type': 'SPA - Experiment',
          'url': 'https://preacher-seal-81585.netlify.com/#/',
          'description': 'Quick and Dirty Wordpress REST API fed SPA prototype.<br> <br> Just for testing purposes of Wordpress REST API and Quasar Framework',
          'tech': 'VueJs, Quasar Framework'
        }
      ]
      // this.loading = true
      this.items = fakeapi
    },
    goto (data) {
      window.open(data.url)
    }
  },
  beforeMount () {
    this.loadData()
  }
}
</script>
