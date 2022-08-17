<template>
  <div class="h-100 p-5 rounded-3 border bg-dark text-white">
    <p>{{ titulo }}</p>
    <h2>{{ indicador }}</h2>
  </div>



</template>

<script>
export default {
  name: "Indicador",
  props:['titulo', 'indicador', 'bg', 'color'],//funciona como a priedade data
  computed:{
    // estilo(){
    //     return 'h-100 p-5 rounded-3 border ${this.bg} ${this.color}'

    // }
}
};
</script>