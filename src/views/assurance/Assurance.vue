<template>
  <div class="form-container">
    <h2>Create Assurance</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Nom -->
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" v-model="formData.nom" required />
      </div>

      <!-- Adresse -->
      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input type="text" v-model="formData.adresse" required />
      </div>

      <!-- Capital -->
      <div class="form-group">
        <label for="capital">Capital</label>
        <input type="number" v-model="formData.capital" required step="0.01" />
      </div>

      <!-- NIF -->
      <div class="form-group">
        <label for="nif">NIF</label>
        <input type="text" v-model="formData.nif" required />
      </div>

      <!-- Téléphone -->
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="text" v-model="formData.telephone" required />
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nom: "",
        adresse: "",
        capital: 0,
        nif: "",
        telephone: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Simulate API call to create assurance
      axios
        .post(this.$store.state.url + "/assurance/", this.data, this.headers)
        .then((Response) => {
          console.log("Assurance créée:", Response.data);
          this.$store.state.assurance.push(Response.data);
        });
      console.log("Assurance créée:", this.formData);
    },
  },
};
</script>
