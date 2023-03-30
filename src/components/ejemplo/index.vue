<template>
  <div>
    <h1>{{ mensaje }}</h1>
    <h2>{{ numero1 + numero2 }}</h2>

    <h2>Total invitados: {{ invitados }}</h2>

    <div>
      <button @click="increment()" class="mr-5">Agregar invitado</button>
      <button @click="decrement()" class="mr-5">Quitar invitado</button>
      <button @click="reset()" class="mr-5">Reiniciar valor</button>
    </div>

    <div class="mt-20">
      <button @click="incrementAction(number)" class="mr-5">
        Incrementar {{ number }}
      </button>

      <button @click="decrementAction(number)" class="mr-5">
        Decrementar {{ number }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      number: 20,
    };
  },

  props: {
    mensaje: {
      type: String,
      default: null,
    },

    numero1: {
      type: Number,
      default: 0,
    },

    numero2: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    ...mapState(["invitados"]),
  },

  methods: {
    ...mapMutations(["increment", "decrement", "reset"]),

    ...mapActions(["incrementAction", "decrementAction"]),

    // agregarInvitado() {
    //   this.$store.commit("increment");
    // },

    // quitarInvitado() {
    //   this.$store.commit("decrement");
    // },

    // reiniciarInvitados() {
    //   this.$store.commit("reset");
    // },
  },
};
</script>

<style>
.mt-20 {
  margin-top: 20px;
}

.mr-5 {
  margin-right: 5px;
}
</style>