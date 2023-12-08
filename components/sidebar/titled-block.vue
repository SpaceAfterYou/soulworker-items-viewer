<template>
  <section class="flex w-full flex-col">
    <header class="bg-black/50 px-4 py-2 text-center uppercase">
      <slot name="head" />
    </header>

    <SidebarBlock>
      <slot name="body" />
    </SidebarBlock>
  </section>
</template>
