<template>
  <div class="info-screen" :class="{ closing: smartClose }">
    <img
      src="/back_arrow.svg"
      alt=""
      class="back-arrow"
      :class="{ closing: smartClose }"
      @click="closeGameStructure"
    />
    <div class="game-structure">
      <h2>Typical Game Structure</h2>
      <div class="phase">
        <div class="phase-title">Intro</div>
        <div class="phase-description">
          <ul>
            <li>The participants connect to the platform</li>
            <li>They are randomly split into teams of 5</li>
            <li>The rules are explained</li>
          </ul>
        </div>
        <div class="phase-timing">15 Min</div>
      </div>
      <div class="phase">
        <div class="phase-title">Game</div>
        <div class="phase-description">
          <ul>
            <li>The participants compete in teams to raise their score</li>
            <li>
              All teams play simultaneaously and can see the progress of other
              teams on the leaderboard
            </li>
          </ul>
        </div>
        <div class="phase-timing">1 Hour</div>
      </div>
      <div class="phase">
        <div class="phase-title">Closing</div>
        <div class="phase-description">
          <ul>
            <li>The final leaderboards are shown</li>
            <li>The winning team is announced</li>
          </ul>
        </div>
        <div class="phase-timing">15 Min</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      smartClose: false,
    }
  },
  methods: {
    closeGameStructure(event) {
      this.smartClose = true
      setTimeout(() => {
        this.$emit('closingGameStructure', false)
        setTimeout(() => {
          this.smartClose = false
        }, 200)
      }, 1000)
    },
  },
}
</script>
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
  transition: ease all 1s;
  animation: infoScreenOpener 1s ease normal backwards;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.closing {
    width: 0%;
  }
  h2 {
    color: rgb(55, 163, 149);
    margin-top: 7rem;
    border-bottom: none;
    border-left: none;
  }
  .game-structure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    max-width: 700px;
    max-height: 100vh;
    color: $spaceBlue;
    overflow: visible;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba($color: $almostWhite, $alpha: 0.1);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba($color: #50bfb0, $alpha: 0.6);
      border-radius: 5px;
      transition: ease all 0.5s;
      margin: 1rem;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba($color: #50bfb0, $alpha: 0.8);
    }
    .phase {
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-content: stretch;
      margin: 1rem 1rem 1rem 1rem;
      box-shadow: 0 15px 30px 0 rgba(0, 126, 109, 0.493),
        0 4px 8px 0 rgba(16, 0, 95, 0.288);
      border-radius: 10px;
      .phase-title {
        flex-basis: 30%;
        border: 3px solid rgb(55, 163, 149);
        border: none;
        color: rgb(55, 163, 149);
        font-weight: 600;
        border-radius: 10px 0 0 10px;
        text-align: center;
        padding: 0 1rem 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .phase-description {
        flex-basis: 50%;
        border: 3px solid rgb(55, 163, 149);
        border: none;
        border-right: none;
        border-left: none;
        ul {
          text-align: left;
          margin: 0 0 0 0;
        }
      }
      .phase-timing {
        flex-basis: 20%;
        border: 3px solid rgb(55, 163, 149);
        border: none;
        color: rgb(55, 163, 149);
        font-weight: 600;
        border-radius: 0 10px 10px 0;
        text-align: center;
        padding: 0 1rem 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .back-arrow {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    width: 2rem;
    cursor: pointer;
    transition: ease all 0.5s;
    &.closing {
      opacity: 0;
    }
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
