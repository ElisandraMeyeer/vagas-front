<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente sua vaga para milhares de profissionais de graça</h4>
      </div>
    </div>

    <!-- Título da vaga -->
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da Vaga</label>
        <input tipe="text" class="form-control" v-model="titulo" />
        <div class="form-text">
          Por exemplo: Programador JavaScript e VueJS.
        </div>
      </div>
    </div>

    <!-- Descrição da vaga -->
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea
          tipe="text"
          class="form-control"
          v-model="descricao"
        ></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <!-- Empresa -->
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Empresa</label>
        <input tipe="text" class="form-control" v-model="empresa" />
        <div class="form-text">Informe a empresa ofertando a vaga</div>
      </div>
    </div>

    <!-- Salário -->
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input tipe="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário.</div>
      </div>

      <!-- Modalidade -->
      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option disabled value="">--Selecione</option>
          <option value="1">Home Oficce</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">
          Informe onde as atividades serão realizadas.
        </div>
      </div>

      <!-- Tipo -->
      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option disabled value="">--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <!-- Botão cadastrar -->
    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
  data: () => ({
    titulo: "",
    descricao: "",
    empresa: "",
    salario: "",
    modalidade: "",
    tipo: "",
  }),
  methods: {
    salvarVaga() {
      let tempoDecorrido = Date.now();
      let dataAtual = new Date(tempoDecorrido);

      //o get itens retorna string então é preciso fazer um
      //parse para transformar em objeto e assim fzer um
      //array de objetos para que os dados não sejam
      //sobrescritos
      let vagas = JSON.parse(localStorage.getItem("vagas"));
      if (!vagas) vagas = [];

      vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        empresa: this.empresa,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString(),
      });

      if (this.validaFormulario()) {
        localStorage.setItem("vagas", JSON.stringify(vagas));
        this.emitter.emit("alerta", {//aqui está sendo encaminhado um objeto como parâmetro
          tipo: 'sucesso',
          titulo: `A vaga ${this.titulo} foi cadastrada com sucesso!`,
          descricao: "Você pode visualizá-la no menu Home",
        })

        this.resetaFormularioCadastroVaga();
      } else {
        this.emitter.emit("alerta", {
          //aqui está sendo encaminhado um objeto como parâmetro
          tipo: 'erro',
          titulo: "Não foi possível cadastrar a vaga",
          descricao: "Os dados não foram preenchidos corretamente",
        });
      }

      // armazenar no próprio navegador
      //primeiro valor é a chave do dado que estamos armazenando
      //o segundo valor deve ser uma string (por isso que se tentar
      //armazenar o vaga direto não vai dar certo, pois vai armazenar apenas uma descrição do objeto)

      
    },

    resetaFormularioCadastroVaga() {
      this.titulo = "";
      this.descricao = "";
      this.empresa = "";
      this.salario = "";
      this.modalidade = "";
      this.tipo = "";
    },
    validaFormulario() {
      let valido = true;
      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.empresa === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;
      return valido;
    },
  },
};
</script>

<style >
</style>
