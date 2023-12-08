<template>
  <div class="flex gap-2 rounded bg-black/50">
    <span class="self-center pl-2">
      <slot name="head" />
    </span>

    <slot name="body" />
  </div>
</template>
