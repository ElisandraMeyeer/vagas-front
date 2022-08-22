<template>
  <div class="estiloDivPesquisarVaga">
    <div class="h-100 p-5 bg-light border rounded-3">
      <h2>Pesquisar Vagas</h2>
      <small class="form-text text-muted"
        >Informe palavras que estejam relacionadas com a vaga que você
        procura.</small
      >
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label> Título da Vaga</label>
            <input
              type="text"
              class="form-control"
              placeholder="Pesquise por palavras chaves, por exemplo: 'PHP', 'Pleno', 'Analista'"
              v-model="titulo"
            />
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-outline-dark mt-2" @click="pesquisarVaga()">
            Buscar
          </button>

          <button class="btn btn-outline-dark mt-2" @click="limparVaga()">
            Limpar
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisarVaga",
  data: () => ({
    titulo: "",
  }),
  methods: {
    pesquisarVaga() {
      this.emitter.emit("filtrarVagas", { titulo: this.titulo });
    },

    limparVaga() {
      this.titulo = "";
      this.emitter.emit("limparVagas", { titulo: this.titulo });
    },
  },
};
</script>

<style scoped>
.estiloDivPesquisarVaga {
  margin-top: 50px;
}

button {
  margin-right: 20px;
}
</style>
