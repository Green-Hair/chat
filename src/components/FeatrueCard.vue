<template>
  <div class="feac overflow-hidden">
    <div
      class="h-full flex overflow-hidden feacPic"
      :style="{ width: `${width * features.length}px` }"
    >
      <div
        :style="{ width: `${width}px`, background: feature.src }"
        class="flex justify-center items-center"
        v-for="feature in features"
        :key="feature.id"
      >
        {{ feature.id }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface IFeature {
  id: string;
  src: string;
}
let features: IFeature[];

export default {
  name: "FeatureCard",
  data() {
    return {
      features: features,
      // 卡片最小宽度323px
      width: 323,
    };
  },
  beforeCreate: function () {
    features = [
      {
        id: "1",
        src: "#dfe6e9",
      },
      {
        id: "2",
        src: "#a29bfe",
      },
      {
        id: "3",
        src: "#74b9ff",
      },
      {
        id: "4",
        src: "#81ecec",
      },
      {
        id: "5",
        src: "#55efc4",
      },
    ];
  },
  mounted: function () {
    this.width = document.querySelector(".feac")!.clientWidth;
    window.onresize = () => {
      this.width = document.querySelector(".feac")!.clientWidth;
    };
  },
};
</script>

<style scoped>
@keyframes feacMove {
  0%,
  20% {
    left: 0%;
  }
  30%,
  40% {
    left: -100%;
  }
  50%,
  60% {
    left: -200%;
  }
  70%,
  80% {
    left: -300%;
  }
  90%,
  100% {
    left: -400%;
  }
}
.feac {
  background: linear-gradient(#6de1ca, #54c5b9);
}
.feacPic {
  animation: feacMove 8s ease infinite normal;
}
</style>
