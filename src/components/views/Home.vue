<template>


  <!-- Pesquisar vaga -->
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>





    <!-- Vagas disponíveis -->
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
      </div>
    </div>






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
import Vaga from "../comuns/Vaga.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    Vaga,
  },
  data: () => ({
    usuariosOnline: 0,//método getUsuariosOnline()
    vagas: [],//método activated em methods 
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },

  created() {
    setInterval(this.getUsuariosOnline, 2000); //a cada 2 segundos
  },
  //método mounted não funciona pois seria preciso sempre atualizar a página sempre que cadastrar uma nova vaga
  //mounted(){
    //o método activated vai disparar sempre que o home estiver sendo utilizado (por causa do keep alive)
    activated(){
    this.vagas = JSON.parse(localStorage.getItem('vagas'))//busca do local storage os dados salvos em publicar vaga
  }
};
</script>

<style scoped >
</style>
