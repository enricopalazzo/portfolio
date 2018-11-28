
<template>
  <q-page padding>
    <h1>Portfolio <q-icon name="perm_media" style="font-size:0.5em; margin-top:-1em" /></h1>
    <h2>some of my work</h2>
    <div class="row">
        <div class="col-md-4 col-sm-6" style="padding:10px" v-for="item in items" :key="item.id" @click="openModal(item)">
          <q-card style="min-height:330px">
            <q-card-media>
              <img v-bind:src="item.thumbnail">
            </q-card-media>
            <q-card-title style="font-size:18px">
              {{item.name}}
            </q-card-title>
            <q-card-separator />
            <q-card-main>
              {{item.description}}
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
      name: 'PagePortfolio',
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
          'name': 'Imobation Residence',
          'thumbnail': 'assets/img/portafolio/imobation.PNG',
          'large': 'assets/img/portafolio/imobation.PNG',
          'description': 'API based Admin Interface - Quasar Framework / Vuejs - Full Responsive'
        },
        {
          'name': 'Imobation Residence - Mobile',
          'thumbnail': 'assets/img/portafolio/immomobileth.png',
          'large': 'assets/img/portafolio/immomobile.PNG',
          'description': 'API based Admin Interface - Quasar Framework / Vuejs - Full Responsive'
        },
        {
          'name': 'Amplyflyer',
          'thumbnail': 'assets/img/portafolio/amplyflyer2.PNG',
          'large': 'assets/img/portafolio/amplyflyer2.PNG',
          'description': 'API based Admin Interface - Quasar Framework / Vuejs - Full Responsive'
        },
        {
          'name': 'Aviburger',
          'thumbnail': 'assets/img/portafolio/aviburger.png',
          'large': 'assets/img/portafolio/screencapture-aviburger-2018-11-28-18_53_01.jpg',
          'description': 'Wordpress'
        },
        {
          'name': 'Thrify Point',
          'thumbnail': 'assets/img/portafolio/thrifty.png',
          'large': 'assets/img/portafolio/screencapture-thriftypoint-2018-11-28-18_53_46.jpg',
          'description': 'Wordpress - Woocommerce'
        },
        {
          'name': 'Elpitazo.com',
          'thumbnail': 'assets/img/portafolio/elpitazoth.jpg',
          'large': 'assets/img/portafolio/elpitazo.jpg',
          'description': 'Consultant, Wordpress Custom Theme & Plugins'
        },
        {
          'name': 'ElPitazo Especiales',
          'thumbnail': 'assets/img/portafolio/pitazoespecialth.jpg',
          'large': 'assets/img/portafolio/pitazoespecial.jpg',
          'description': 'Wordpress Custom Layout Generator'
        },
        {
          'name': 'Hinterlaces',
          'thumbnail': 'assets/img/portafolio/hinterth.jpg',
          'large': 'assets/img/portafolio/hinter.jpg',
          'description': 'Consulting, Wordpress custom theme & plugins'
        },
        {
          'name': 'Pasión Petare',
          'thumbnail': 'assets/img/portafolio/ppetareth.jpg',
          'large': 'assets/img/portafolio/ppetare.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'Albatros',
          'thumbnail': 'assets/img/portafolio/albatrosth.jpg',
          'large': 'assets/img/portafolio/albatros.jpg',
          'description': 'Wordpress site, custom theme'
        },
        {
          'name': 'Helados Boca',
          'thumbnail': 'assets/img/portafolio/boca.jpg',
          'large': 'assets/img/portafolio/boca_gde.jpg',
          'description': 'Static Website'
        },
        {
          'name': 'Ron Castro',
          'thumbnail': 'assets/img/portafolio/castroth.jpg',
          'large': 'assets/img/portafolio/roncastrofull.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'Cintaflor',
          'thumbnail': 'assets/img/portafolio/cintaflorth.jpg',
          'large': 'assets/img/portafolio/cintaflor.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': '3Dent',
          'thumbnail': 'assets/img/portafolio/3dent.jpg',
          'large': 'assets/img/portafolio/3dent_gde.jpg',
          'description': 'Dental Lab appointment system. Codeigniter, Jquery'
        },
        {
          'name': 'Estelar Eventos',
          'thumbnail': 'assets/img/portafolio/estelar02.jpg',
          'large': 'assets/img/portafolio/estelar_gde.jpg',
          'description': 'Event house rental site'
        },
        {
          'name': 'Grupo MC Air',
          'thumbnail': 'assets/img/portafolio/grupomcair.jpg',
          'large': 'assets/img/portafolio/grupomcair_gde.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'Haus Ertl',
          'thumbnail': 'assets/img/portafolio/haus02.jpg',
          'large': 'assets/img/portafolio/haus_gde.jpg',
          'description': 'CMS - Codeigniter'
        },
        {
          'name': 'Invictus',
          'thumbnail': 'assets/img/portafolio/invictusth.jpg',
          'large': 'assets/img/portafolio/invictus.jpg',
          'description': 'Wordpress custom theme'
        },
        {
          'name': 'José Manuel Hernández',
          'thumbnail': 'assets/img/portafolio/jm_gde.jpg',
          'large': 'assets/img/portafolio/jm_gde.jpg',
          'description': 'Website - Codeigniter custom CMS '
        },
        {
          'name': 'The K9 Mall',
          'thumbnail': 'assets/img/portafolio/k9_gde.jpg',
          'large': 'assets/img/portafolio/k9_gde.jpg',
          'description': 'E-commerce - Codeigniter'
        },
        {
          'name': 'Centro Atlético LeCoq',
          'thumbnail': 'assets/img/portafolio/lecoq.jpg',
          'large': 'assets/img/portafolio/lecoq_gde.jpg',
          'description': 'Wordpress - Custom Theme'
        },
        {
          'name': 'livelongpetnutrition.com',
          'thumbnail': 'assets/img/portafolio/live.jpg',
          'large': 'assets/img/portafolio/live_gde.jpg',
          'description': 'Wordpress / Woocommerce - Custom Theme'
        },
        {
          'name': 'MC Tours',
          'thumbnail': 'assets/img/portafolio/mctoursth.jpg',
          'large': 'assets/img/portafolio/mctours.jpg',
          'description': 'Wordpress / Woocommerce - Custom Theme'
        },
        {
          'name': 'Previsión Nubes de Gloria',
          'thumbnail': 'assets/img/portafolio/nubes.jpg',
          'large': 'assets/img/portafolio/nubes_gde.jpg',
          'description': 'Static Site'
        },
        {
          'name': 'Original Cool',
          'thumbnail': 'assets/img/portafolio/oc.jpg',
          'large': 'assets/img/portafolio/oc_gde.jpg',
          'description': 'Codeigniter - E-commerce'
        },
        {
          'name': 'Vins d\'une oreille',
          'thumbnail': 'assets/img/portafolio/vinsth.jpg',
          'large': 'assets/img/portafolio/vins.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'StrateGo',
          'thumbnail': 'assets/img/portafolio/straegoth.jpg',
          'large': 'assets/img/portafolio/strategocr.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'Parque Jardín la Puerta',
          'thumbnail': 'assets/img/portafolio/pque.jpg',
          'large': 'assets/img/portafolio/parque_gde.jpg',
          'description': 'Static Site'
        },
        {
          'name': 'BarcelonaStuff Admin',
          'thumbnail': 'assets/img/portafolio/ref_bcnadm.jpg',
          'large': 'assets/img/portafolio/bcnadm_gde.jpg',
          'description': 'Static Site'
        },
        {
          'name': 'Tu Carnet',
          'thumbnail': 'assets/img/portafolio/tucarnet.jpg',
          'large': 'assets/img/portafolio/tucarnetlg.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'ViewMed',
          'thumbnail': 'assets/img/portafolio/viemedth.jpg',
          'large': 'assets/img/portafolio/viemedbig.jpg',
          'description': 'Static Site'
        },
        {
          'name': 'Wsonido',
          'thumbnail': 'assets/img/portafolio/wsonidoth.jpg',
          'large': 'assets/img/portafolio/wsonidolong.jpg',
          'description': 'Static Site'
        },
        {
          'name': 'Vitolas Cigar',
          'thumbnail': 'assets/img/portafolio/ref_vitolas.jpg',
          'large': 'assets/img/portafolio/vitolas_gde.jpg',
          'description': 'Wordpress Custom Theme'
        },
        {
          'name': 'Avae',
          'thumbnail': 'assets/img/portafolio/avaecv02.jpg',
          'large': 'assets/img/portafolio/avaecv_gde.jpg',
          'description': 'Personal Portfolio website'
        },
        {
          'name': 'Azalea',
          'thumbnail': 'assets/img/portafolio/azalea.jpg',
          'large': 'assets/img/portafolio/azalea_gde.jpg',
          'description': 'Codeigniter based e-commerce'
        },
        {
          'name': 'Babydoo',
          'thumbnail': 'assets/img/portafolio/babydoo.jpg',
          'large': 'assets/img/portafolio/babydoolg.jpg',
          'description': 'Wordpress-Woocommerce site. Custom Theme'
        },
        {
          'name': 'BarcelonaStuff',
          'thumbnail': 'assets/img/portafolio/barcelona02.jpg',
          'large': 'assets/img/portafolio/bcna_gde.jpg',
          'description': 'Short Time Property Rental Front End - Codeigniter'
        },
        {
          'name': 'BarcelonaStuff',
          'thumbnail': 'assets/img/portafolio/bcnadm_gde.jpg',
          'large': 'assets/img/portafolio/bcnadm_gde.jpg',
          'description': 'Short Time Property Rental Admin Back End - Codeigniter'
        }
      ]
      // this.loading = true
      this.items = fakeapi
      /* this.$axios
        .get('https://my.api.mockaroo.com/portafolio.json?key=429a6dc0')
        .then(response => {
          this.$q.localStorage.set('portfolio', response.data)
          this.items = response.data
          this.loading = false
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'bottom',
            message: 'Loading failed. Could not connect to server. Please try again later or let me know at federicodib@gmail.com',
            icon: 'report_problem'
          })
          this.$q.localStorage.set('portfolio', 'oh fuck')
          this.loading = false
        }) */
    },
    openModal (data) {
      this.opened = true
      this.selectedItem = data
    }
  },
  beforeMount () {
    this.loadData()
  }
}
</script>
