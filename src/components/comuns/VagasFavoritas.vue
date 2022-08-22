<template>
  <div>
    <div class="divVagasFavoritas">
      <button
        class="btn btn-outline-dark mt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Vagas favoritas
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritadas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(vaga,index) in vagas" :key="index">
          {{vaga}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  data: () => ({
    vagas: [],
  }),
  mounted() {
    this.emitter.on("favoritarVaga", (titulo) => {
      this.vagas.push(titulo);//adiciona o titulo das vagas no array
    console.log("vagas:", this.vagas)
    }); //com o .on ele vai fazer uma ação | com a função de callback ele vai receber parâmetros para poderem ser utilizados

    this.emitter.on("desfavoritarVaga", (titulo) => {
      let indiceArray = this.vagas.indexOf(titulo);
      if (indiceArray !== -1) this.vagas.splice(indiceArray, 1); //remove um elemento a partir de um índice de um array, neste caso apenas a posição em si encontrada
    });
  },
};
</script>

<style scoped>
.divVagasFavoritas {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 0px;
}
</style>
