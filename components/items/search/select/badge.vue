<template>
  <div class="flex gap-2 rounded bg-black/50 p-2">
    <span class="self-center">
      <slot name="head" />
    </span>

    <slot name="body" />
  </div>
</template>
