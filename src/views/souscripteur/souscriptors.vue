<template>
  <div class="filter-container">
    <label for="filter">Filter by type:</label>
    <select v-model="selectedType" @change="filterSouscripteurs">
      <option value="All">All</option>
      <option value="Individu">Individu</option>
      <option value="Entreprise">Entreprise</option>
    </select>
  </div>
  <div class="table">
    <table class="table">
      <thead>
        <tr>
          <!-- Conditions to render headers -->
          <th v-if="selectedType !== 'Entreprise'">Nom</th>
          <th v-if="selectedType !== 'Entreprise'">Prénom</th>
          <th v-if="selectedType !== 'Individu'">RC</th>
          <th v-if="selectedType !== 'Individu'">NIF</th>
          <th>Adresse</th>
          <th>Telephone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="souscripteur in filterSouscripteurs" key="souscripteur.id">
          <td v-if="souscripteur.type_soucripteur === 'INDIVIDU'">
            {{ souscripteur.NOM }}
          </td>
          <td v-if="souscripteur.type_soucripteur === 'INDIVIDU'">
            {{ souscripteur.prenom }}
          </td>
          <td v-if="souscripteur.type_soucripteur === 'Entreprise'">
            {{ souscripteur.RC }}
          </td>
          <td v-if="souscripteur.type_soucripteur === 'Entreprise'">
            {{ souscripteur.NIF }}
          </td>
          <td>{{ souscripteur.adresse }}</td>
          <td>{{ souscripteur.telephone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      souscripteurs: [], // All souscripteurs from the API
      filteredSouscripteurs: [], // Filtered souscripteurs
      selectedType: "All", // Selected filter type ('All', 'Individu', 'Entreprise')
    };
  },

  mounted() {
    // Fetch souscripteurs when component mounts
    this.fetchSouscripteurs();
  },

  // const api = this.$store.state.url,

  methods: {
    async fetchSouscripteurs() {
      try {
        const response = await axios.get(
          this.$store.state.url + "/souscripteurs",
          this.headers
        );
        this.souscripteurs = response.data;
        this.filteredSouscripteurs = this.souscripteurs; // Initially show all
      } catch (error) {
        console.error("Error fetching souscripteurs:", error);
      }
    },
    filterSouscripteurs() {
      if (this.selectedType === "All") {
        this.filteredSouscripteurs = this.souscripteurs;
      } else {
        this.filteredSouscripteurs = this.souscripteurs.filter(
          (souscripteur) => souscripteur.type_soucripteur === this.selectedType
        );
      }
    },
  },
};
</script>

<style scoped></style>
