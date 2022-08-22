<template>
  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
      </div>
    </div>
  </slot>
</template>

<script>
import Vaga from "../comuns/Vaga.vue";
export default {
  name: "ListaVagas",
  data: () => ({
    vagas: [], //método activated em methods
  }),
  components: {
    Vaga,
  },

  //o método activated vai disparar sempre que o home estiver sendo utilizado (por causa do keep alive)
  //método mounted não funciona neste caso pois seria preciso sempre atualizar a página sempre que cadastrar uma nova vaga
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas")); //busca do local storage os dados salvos em publicar vaga
  },

  //é filtrado dentro de vagas, na função de callback os títulos são passados para letras minúsculas
  //e depois é verificado através do includes a ocorrencia com o determinado titulo (parametro v-model do componente PesquisarVaga)
  // true ou false: O método filter cria um novo array com todos os elementos que passaram no teste
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      console.log(vaga);
      const vagas = (this.vagas = JSON.parse(localStorage.getItem("vagas")));

      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    }),
      this.emitter.on("limparVagas", (vaga) => {
        console.log(vaga);
        this.vagas = this.vagas = JSON.parse(localStorage.getItem("vagas"));
      });
  },
};
</script>