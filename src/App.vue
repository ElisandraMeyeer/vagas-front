<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event" />
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>

      <template v-slot:descricao>
        <p>{{ alerta.descricao }}</p>
      </template>
    </alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
  </div>
</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import VagasFavoritas from "./components/comuns/VagasFavoritas.vue";
import Alerta from "./components/comuns/Alerta.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false,
    alerta: {titulo: '', descricao: '', tipo: ''}
  }),
  methods: {
    acao(p1, p2) {
      console.log("Chamando a função ação de pai para filho");
      console.log("p1: ", p1);
      console.log("p2: ", p2);
    },
  },
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
    Alerta,
  },
  mounted() {
    this.emitter.on("alerta", (a) => {// o (a) é um parâmetro que está sendo recebido do PublicarVaga no método salvarVaga
      this.alerta = a
      this.exibirAlerta = true;
      setTimeout(() => (this.exibirAlerta = false), 4000);
    });
  },
};
</script>

<style scoped>
</style>
