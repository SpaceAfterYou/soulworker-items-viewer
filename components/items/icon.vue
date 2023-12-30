<script lang="ts" setup>
type Props = {
  icon: string;
};

const { icon } = defineProps<Props>();

const src = ref<string | null>(null);

const width = ref(0);
const height = ref(0);

const img = new Image();

img.onload = () => {
  src.value = `./${icon}`;

  width.value = img.naturalWidth;
  height.value = img.naturalHeight;
};

img.src = icon;
</script>

<template>
  <button class="h-min w-min outline transition-all hover:outline-pink-500" type="button">
    <!-- <div class="h-12 w-12 bg-contain bg-center bg-no-repeat transition-opacity hover:opacity-50" :style="iconOf(icon)"> -->
    <div class="flex h-14 w-14 place-content-center place-items-center transition-opacity hover:opacity-50">
      <div class="flex place-content-center place-items-center">
        <img :height="height" :width="width" :src="src" v-if="src" />
        <img src="/GUI/Icon/Item/Dummy.png" height="48" width="48" v-else />
      </div>
      <slot />
    </div>
  </button>
</template>
