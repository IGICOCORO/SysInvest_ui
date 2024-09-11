<template>
  <div class="form-container">
    <h2>Create Souscripteur</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Type de Souscripteur -->
      <div class="form-group">
        <label for="type_soucripteur">Type de Souscripteur</label>
        <select v-model="formData.type_soucripteur" required>
          <option value="Individu">Individu</option>
          <option value="Entreprise">Entreprise</option>
        </select>
      </div>

      <!-- Fields for "Individu" -->
      <div v-if="isIndividu">
        <div class="form-group small-input">
          <label for="nom">Nom</label>
          <input type="text" v-model="formData.nom" required />
        </div>
        <div class="form-group small-input">
          <label for="prenom">Prenom</label>
          <input type="text" v-model="formData.prenom" required />
        </div>
        <div class="form-group small-input">
          <label for="date_naissance">Date de Naissance</label>
          <input type="date" v-model="formData.date_naissance" required />
        </div>
      </div>

      <!-- Fields for "Entreprise" -->
      <div v-if="isEntreprise">
        <div class="form-group small-input">
          <label for="RC">RC</label>
          <input type="text" v-model="formData.RC" required />
        </div>
        <div class="form-group small-input">
          <label for="NIF">NIF</label>
          <input type="text" v-model="formData.NIF" required />
        </div>
      </div>

      <!-- Common Fields -->
      <div class="form-group small-input">
        <label for="adresse">Adresse</label>
        <input type="text" v-model="formData.adresse" required />
      </div>
      <div class="form-group small-input">
        <label for="telephone">Telephone</label>
        <input type="text" v-model="formData.telephone" required />
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        type_soucripteur: "Individu",
        nom: "",
        prenom: "",
        date_naissance: "",
        RC: "",
        NIF: "",
        adresse: "",
        telephone: "",
      },
    };
  },
  computed: {
    headers() {
      return {
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      };
    },
    isIndividu() {
      return this.formData.type_soucripteur === "Individu";
    },
    isEntreprise() {
      return this.formData.type_soucripteur === "Entreprise";
    },
  },
  methods: {
    async handleSubmit() {
      try {
        await axios
          .post(
            this.$store.state.url + "/souscriptor/",
            this.formData,
            this.headers
          )
          .then((Response) => {
            // alert("Souscripteur created successfully!");
            console.log("first response", response.data);
            this.$store.state.souscriptor.push(Response);
          });
      } catch (error) {
        console.error(error);
        alert("An error occurred.");
      }
    },
  },
};
</script>

<style scoped>
/* General styles */
.form-container {
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Form group layout */
.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

/* Input fields */
input,
select {
  width: 100%;
  padding: 5px;
  font-size: 12px; /* Smaller font for input */
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.2s;
}

input:focus,
select:focus {
  border-color: #007bff;
}

/* Button styles */
.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Small input styles */
.small-input input {
  max-width: 250px;
}
</style>
