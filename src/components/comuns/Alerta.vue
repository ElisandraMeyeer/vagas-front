<template>
  <div class="alert alert-success" role="alert" >
    <slot name="titulo">
      <h3>
        {{ titulo }}
      </h3>
    </slot>
    <hr>
    <slot>
      {{ mensagem }}
    </slot>



  </div>
</template>


<script>
export default {
  name: "Alerta",
};
</script>