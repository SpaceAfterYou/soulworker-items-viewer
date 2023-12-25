<script lang="ts" setup>
type Props = { href: string };

defineProps<Props>();
</script>

<template>
  <a class="lowercase" :href="href">
    <slot />
  </a>
</template>
