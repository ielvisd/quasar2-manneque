<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    <component
      :is="test"
      class="model"
      :xposition="xPosition"
      :yposition="yPosition"
      :zposition="zPosition"
      :bend="bend"
      :turn="turn"
      :tilt="tilt"
      :headNod="headNod"
      :headTurn="headTurn"
      :headTilt="headTilt"
      :torsoBend="torsoBend"
      :torsoTurn="torsoTurn"
      :torsoTilt="torsoTilt"
      :rightArmBend="rightArmBend"
      :rightArmTilt="rightArmTilt"
      :rightArmTurn="rightArmTurn"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Stage from "components/Stage.vue";

export default defineComponent({
  name: "PageIndex",
  components: { Stage },
  data() {
    return {
      checked1: false,
      xPosition: 0,
      yPosition: -5,
      zPosition: 0,
      bend: 20,
      turn: 0,
      tilt: 0,
      headNod: 0,
      headTurn: 0,
      headTilt: 0,
      torsoBend: 0,
      torsoTurn: 0,
      torsoTilt: 0,
      rightArmBend: 90,
      rightArmTurn: 0,
      rightArmTilt: 0,
      value1: "Left",
      options: ["Left", "Right"],
      test: "Stage",
      showPositionControls: false,
      showFigureControls: false,
      showHeadMotionControls: false,
      showTorsoMotionControls: false,
      showRightArmControls: false,
    };
  },
});
</script>


<style lang="scss" scoped>

.model {
  border: 5px solid green;
  width: 100%;
   height: 100vh; 
}

</style>