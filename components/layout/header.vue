<template>
  <div class="grid grid-cols-[1fr_2fr_1fr] gap-4 bg-black/40">
    <nav class="flex justify-center gap-8 self-center py-4">
      <LayoutHeaderLink to="/">
        {{ $t("header.menu.home") }}
      </LayoutHeaderLink>

      <LayoutHeaderLink to="settings">
        {{ $t("header.menu.settings") }}
      </LayoutHeaderLink>
    </nav>

    <ItemsSearchInput class="py-2" />

    <LayoutLocaleButtonGroup class="flex justify-center self-center" />
  </div>
</template>
