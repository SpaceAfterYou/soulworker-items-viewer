<template>
  <section class="flex min-h-screen flex-col bg-neutral-800">
    <LayoutHeader />

    <section class="flex grow gap-4 p-4">
      <SidebarItems class="flex w-min flex-col gap-4">
        <SoundsSidebarArchiveSelector />
      </SidebarItems>

      <section class="grow">
        <slot />
      </section>
    </section>

    <LayoutFooter class="" />
  </section>
</template>
