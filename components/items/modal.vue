<script lang="ts" setup>
type Emits = {
  (e: "on-close"): void;
};

defineEmits<Emits>();
</script>

<template>
  <Teleport to="#items-modal">
    <section
      class="fixed left-0 top-0 flex h-full w-full place-content-center place-items-center bg-black/50"
      @click.self="$emit('on-close')"
    >
      <section class="max-w-xs bg-black/80 p-4">
        <slot />
      </section>
    </section>
  </Teleport>
</template>
