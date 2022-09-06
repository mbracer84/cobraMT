<!-- Please remove this file from your project -->
<template>
 <div class="bg-cyan-600">

    <button v-if="$auth.loggedIn" @click="logout">Abmelden</button>
    <button v-else @click="login">Anmelden</button><br>
    
    <br/>
    <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/">Startseite</a><br/>
    <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/Events">Liste der Events</a><br/>
    <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/Create">->Neues Event erstellen</a><br/>
    <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/usermanagement">Benutzerverwaltung</a><br/>
    <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/usermanagement/Export">->Exportieren</a><br/>
 </div>
</template>

<script>
export default {
  name: "rose-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
        login() {
            this.$auth.loginWith("custom");
        },
        logout() {
           this.$auth.strategy.token.set(false)
          this.$auth.strategy.refreshToken.set(false)
          this.$axios.setHeader('Authorization', false)
            this.$auth.logout();
        }
    },
}
</script>