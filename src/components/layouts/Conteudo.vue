<template>
  <div> 

    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
// o @ remete ao diretório src
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
export default {
  name: "Conteudo",
  props: {
    conteudo: {
      type: String,
      required: true
    }

  },
  components: {
    Home,
    PublicarVaga,
  },
  data: () => ({
    teste: " - o componentes foi criado",
  }),
  methods: {
    atualizarComponente() {
      this.titulo += "*";
    },
  },

};
</script>

<style scoped >

</style>
