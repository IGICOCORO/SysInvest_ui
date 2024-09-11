<template>
  <div class="form-container">
    <h2>Create Entry</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="formData.category" required>
          <option value="HOP">Hopital</option>
          <option value="PHA">Pharmacie</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" v-model="formData.nom" required />
      </div>

      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input type="text" v-model="formData.adresse" required />
      </div>

      <div class="form-group">
        <label for="telephone">Telephone</label>
        <input type="text" v-model="formData.telephone" required />
      </div>

      <div class="form-group">
        <label for="nif">NIF</label>
        <input type="text" v-model="formData.nif" required />
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      formData: {
        category: "",
        nom: "",
        adresse: "",
        telephone: "",
        nif: "",
      },
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/partners",
          this.formData
        );
        console.log("response", response.data);
        alert("Data submitted successfully!", this.formData);
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
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

input,
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus,
select:focus {
  border-color: #007bff;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .form-container {
    padding: 15px;
  }

  input,
  select {
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
  }
}
</style>
