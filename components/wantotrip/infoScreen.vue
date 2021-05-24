<template>
  <div v-if="1 == 2" class="info-screen">
    <img src="/back_arrow.svg" alt="" class="back-arrow" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
.info-screen {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: $almostWhite;
  top: 0;
  left: 0;
  z-index: 15000000000;
  transition: ease all 0.5s;
  animation: infoScreenOpener 1s ease normal backwards;
  overflow: hidden;
  .back-arrow {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 2rem;
    cursor: pointer;
  }
}
@keyframes infoScreenOpener {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
