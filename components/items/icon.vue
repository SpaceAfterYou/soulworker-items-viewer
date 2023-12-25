<script lang="ts" setup>
type Props = {
  icon: string;
};

defineProps<Props>();

const iconOf = (icon: string) => ({
  backgroundImage: `url(./${icon}), url(./GUI/Icon/Item/Dummy.png)`,
});
</script>

<template>
  <button class="h-min w-min outline transition-all hover:outline-pink-500" type="button">
    <div class="h-12 w-12 bg-contain bg-center bg-no-repeat transition-opacity hover:opacity-50" :style="iconOf(icon)">
      <slot />
    </div>
  </button>
</template>
