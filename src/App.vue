<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active {
  animation: slidePageIn 0.4s forwards;
  animation-timing-function: cubic-bezier(.8, -0.49, .36, 1);
}
.fade-leave-active {
  animation: slidePageDown 0.6s forwards;
  animation-timing-function: cubic-bezier(.8, -0.49, .36, 1);
}

@keyframes slidePageIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes slidePageDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
