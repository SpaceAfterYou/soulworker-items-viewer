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
  <div
    class="h-12 w-12 bg-contain bg-center bg-no-repeat"
    :style="iconOf(icon)"
  >
    <slot />
  </div>
</template>
