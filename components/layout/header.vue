<template>
  <div>
    <div class="grid grid-cols-[1fr_2fr_1fr] gap-4 bg-black/40">
      <nav class="flex justify-center gap-8 self-center py-4">
        <LayoutHeaderLink to="/">
          {{ $t("header.menu.home") }}
        </LayoutHeaderLink>

        <LayoutHeaderLink to="settings">
          {{ $t("header.menu.settings") }}
        </LayoutHeaderLink>
      </nav>

      <ItemsSearch class="h-full w-full" />

      <LayoutLocaleButtonGroup class="flex justify-center self-center" />
    </div>
    <div class="bg-red-500/50 p-8">
      <ol>
        <li>Need translators to translate user interface</li>
        <li>인터페이스 텍스트를 번역하려면 번역기가 필요합니다.</li>
        <li>需要翻译人员翻译界面文本</li>
      </ol>
    </div>
  </div>
</template>
