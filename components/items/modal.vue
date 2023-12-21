<script lang="ts" setup>
type Emits = {
  (e: "on-close"): void;
};

defineEmits<Emits>();
</script>

<template>
  <teleport to="#items-modal">
    <section
      class="fixed left-0 top-0 flex h-full w-full place-content-center place-items-center bg-black/50 leading-relaxed backdrop-blur-md"
      @click.self="$emit('on-close')"
    >
      <section class="max-w-3xl bg-black/50 p-4">
        <slot />
      </section>
    </section>
  </teleport>
</template>
