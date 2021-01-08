<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
      <div class="form">
        <div v-if="!started">
          <label for="portsAmount"> Quantas portas?</label>
          <input type="text" id="portsAmount" size='3' v-model.number ="portsAmount">
        </div>
        <div v-if="!started">
          <label for="selectedPort">Qual porta é a premiada?</label>
          <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
        </div>

        <button v-if="!started" @click="started = true">Iniciar</button>
        <button v-if="started" @click="started=false">Reiniciar</button>
      </div>

      <div class="doors" v-if="started">
        <div v-for="i in portsAmount" :key="i">
          <Door :hasGift="i===selectedPort" :number="i"/>
        </div>
      </div>
  </div>
</template>

<script>
import Door from './components/Door'

export default {
  name: "App",
  components: {Door},
  data: function(){
    return{
      started: false,
      portsAmount: 3,
      selectedPort: null
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: monospace;
}

body {
  color: white;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1{
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.267);
  padding: 20px;
  margin-bottom: 60px;
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom: 40px;
}

.form, .form input, .form button{
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors{
  align-self: stretch;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
}
</style>
