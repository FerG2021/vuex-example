<template>
  <div>
    <Ejemplo :mensaje="mensajeProps" :numero1="1" :numero2="4" />

    <h2>Total socios: {{ socios }}</h2>
    <div>
      <button @click="incrementSocios()" class="mr-5">Agregar socio</button>
      <button @click="decrementSocios()" class="mr-5">Quitar socio</button>
      <button @click="resetSocios()" class="mr-5">Reiniciar valor</button>
    </div>

    <div class="mt-20">
      <button @click="incrementActionSocios(number)">
        Incrementar {{ number }} socios
      </button>

      <button @click="decrementActionSocios(number)">
        Decrementar {{ number }} socios
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      mensajeProps: "Hola mundo desde props",
      number: 10,
      numero: "afsd",
    };
  },

  computed: {
    ...mapState(["socios"]),
  },

  methods: {
    ...mapMutations(["incrementSocios", "decrementSocios", "resetSocios"]),

    ...mapActions(["incrementActionSocios", "decrementActionSocios"]),
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.mr-5 {
  margin-right: 5px;
}

.mt-20 {
  margin-top: 20px;
}
</style>
