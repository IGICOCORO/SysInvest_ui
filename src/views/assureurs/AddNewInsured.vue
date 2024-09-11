<template>
  <div class="form-container">
    <h2>Create Assure</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Souscripteur -->
      <div class="form-group">
        <label for="souscripteur">Souscripteur</label>
        <select v-model="formData.souscripteur" required>
          <option
            v-for="souscripteur in souscripteurs"
            :key="souscripteur.id"
            :value="souscripteur.id"
          >
            {{ souscripteur.nom }} {{ souscripteur.prenom }}
          </option>
        </select>
      </div>

      <!-- Nom -->
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" v-model="formData.nom" required />
      </div>

      <!-- Prenom -->
      <div class="form-group">
        <label for="prenom">Prenom</label>
        <input type="text" v-model="formData.prenom" required />
      </div>

      <!-- Date de Naissance -->
      <div class="form-group">
        <label for="date_naissance">Date de Naissance</label>
        <input type="date" v-model="formData.date_naissance" required />
      </div>

      <!-- Relationship -->
      <div class="form-group">
        <label for="relationship">Relationship</label>
        <select v-model="formData.relationship" required>
          <option value="CONJOINT">Conjoint</option>
          <option value="ENFANT">Enfant</option>
          <option value="EMPLOYE">Employé</option>
        </select>
      </div>

      <!-- Photo -->
      <div class="form-group">
        <label for="photo">Photo</label>
        <input type="file" @change="handleFileUpload('photo', $event)" />
      </div>

      <!-- Document -->
      <div class="form-group">
        <label for="document">Document</label>
        <input type="file" @change="handleFileUpload('document', $event)" />
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
        souscripteur: "",
        nom: "",
        prenom: "",
        date_naissance: "",
        relationship: "",
        photo: null,
        document: null,
      },
      souscripteurs: [], // List of souscripteurs from API
    };
  },

  mounted() {
    // Fetch souscripteurs for the dropdown
    this.fetchSouscripteurs();
  },

  computed: {
    headers() {
      return {
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
          "Content-Type": "multipart/form-data",
        },
      };
    },
  },

  methods: {
    fetchSouscripteurs() {
      axios
        .get(this.$store.state.url + "/souscriptor/", this.headers)
        .then((response) => {
          this.souscripteurs = response.data;
        })
        .catch((error) => {
          console.error("Error fetching souscripteurs:", error);
        });
    },
    handleFileUpload(field, event) {
      this.formData[field] = event.target.files[0];
    },
    async handleSubmit() {
      try {
        const formData = new FormData();
        Object.keys(this.formData).forEach((key) => {
          formData.append(key, this.formData[key]);
        });

        const response = await axios.post(
          this.$store.state.url + "/assures",
          formData,
          this.headers
        );
        console.log("assure response", response.data);
        this.$store.state.souscriptor.push(Response.data);
        alert("Assure created successfully!");
      } catch (error) {
        console.error(error);
        alert("An error occurred.");
      }
    },
  },
};
</script>

<style scoped>
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

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

input,
select {
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="file"] {
  padding: 3px;
}

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
</style>
