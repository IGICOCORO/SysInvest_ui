<template>
  <div class="home">
    <div id="tabs" class="container">
      <div class="tabs">
        <a
          v-on:click="activetab = 1"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >Véhicules Locales</a
        >
        <a
          v-on:click="activetab = 2"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >Importation de Japon à Dar-Es-Salam</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >Importation de Dar-Es-Salam à Bujumbura
        </a>
      </div>
      <div class="content">
        <vehiculeLocale v-if="activetab === 1" class="tabcontent" />
        <importJapToDar v-if="activetab === 2" class="tabcontent" />
        <importDarToBuja v-if="activetab === 3" class="tabcontent" />
      </div>
    </div>
  </div>
</template>
<script>
import importDarToBuja from "../components/importDartoBuja.vue";
import importJapToDar from "../components/importJaptoDar.vue";
import vehiculeLocale from "../components/vehicule_locale.vue";
export default {
  components: {
    vehiculeLocale,
    importDarToBuja,
    importJapToDar,
  },
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  margin-left: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-left: 95px;
  margin-bottom: -2px;
  margin-top: 10px;
}

.tabs a {
  float: left;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  text-decoration: none;
}

.tabs a:last-child {
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #fff;
  color: #000;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  height: 100%;
  width: 100%;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.content {
  width: 100%;
}
</style>
