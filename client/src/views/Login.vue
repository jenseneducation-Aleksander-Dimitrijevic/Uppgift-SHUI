<template>
  <div>
    <app-content>
      <form @submit.prevent>
        <input type="text" placeholder="Användarnamn" />
        <input type="password" placeholder="Lösenord" />
        <button>Logga in</button>
      </form>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
export default {
  name: "Login",
  components: {
    AppContent,
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  padding: 0 2rem;

  input,
  button {
    width: 100%;
    color: #fff;
    margin: 1rem 0;
    border-radius: 3px;
    padding: 12px 10px;
    text-align: center;
    background: transparent;
    border: 2px solid #fff;
    &::placeholder {
      color: #fff;
      letter-spacing: 2px;
    }
  }

  button {
    color: #000;
    cursor: pointer;
    font-weight: bold;
    background: #fff;
  }
}
</style>
