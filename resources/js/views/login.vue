<template>
  <q-page class="full-width row wrap justify-center content-center">
    <div id="background" />
    <q-card class="col-md-8 col-sm-12 col-xs-12 shadow-24">
      <q-card-section class="row justify-center">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <img style="width: 100%" :src="require('../assets/scrum_board.svg')" />
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 text-center">
            <div><img width="250" :src="require('../assets/aproma.svg')"/></div>
          <q-form class="q-gutter-md">
            <q-input outlined rounded v-model="login.user" label="Correo Electrónico" />
            <q-input outlined rounded v-model="login.password" type="password" label="Contraseña" />
            <div class="text-center">
              <q-btn class="full-width" color="primary" label="Entrar" rounded />
            </div>
            <div class="text-center cursor-pointer">¿Olvidó su contraseña?</div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      login: {
        user: null,
        password: null,
      },
    };
  },
};
</script>

<style scoped>
#background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 150, 0.8) ), url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}
</style>