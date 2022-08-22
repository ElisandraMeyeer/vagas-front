<template>
  <!-- Pesquisar vaga -->
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <!-- Vagas disponíveis -->
    <!-- <lista-vagas v-slot:default="slotProps">
    {{slotProps.vagas}}
    </lista-vagas> -->

    <lista-vagas></lista-vagas>

    <!-- Indicadores -->
    <div class="row mt-5">
      <div class="col-4">
        <indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>

      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>



<script>
import Indicador from "../comuns/Indicador.vue";
import PesquisarVaga from "../comuns/PesquisarVaga.vue";
import ListaVagas from "../comuns/ListaVagas.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },
  data: () => ({
    usuariosOnline: 0, //método getUsuariosOnline()
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },

  created() {
    setInterval(this.getUsuariosOnline, 2000); //a cada 2 segundos
  },
};
</script>

<style scoped >
</style>
