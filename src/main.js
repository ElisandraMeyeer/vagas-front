import { createApp } from 'vue'
import App from './App.vue'

//o emitter dá acesso a todos os componentes 
//assim não precisa de um relacionamento direto, ex: passando de um para outro

//importar o pacote mitt
import mitt from 'mitt'

//criar a instancia do pacote mitt

const emitter = mitt()

//iniciar a instancia do Vue com base no componente
//createApp(App).mount('#app')
const app = createApp(App)

//configurar a instancia do pacote mitt sendo uma propriedade global
//essa propriedade estará disponível para todas as instânciasde componentes dentro do app


app.config.globalProperties.emitter = emitter

//associar a instancia do vue com o elemento html de id app
app.mount('#app')
