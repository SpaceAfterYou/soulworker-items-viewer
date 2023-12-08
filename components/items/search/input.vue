<script lang="ts" setup>
const request = ref("");

const type = [
  { value: "includes", name: "Includes" },
  { value: "starts-with", name: "Starts with" },
];

const where = [
  { value: "any-of", name: "Any of" },
  { value: "id", name: "Id" },
  { value: "name", name: "Name" },
  { value: "description", name: "Description" },
];

const selectedType = ref(type[0].value);
const selectedWhere = ref(where[0].value);
</script>

<template>
  <form class="flex gap-4">
    <input
      class="w-full rounded bg-neutral-700 px-4"
      placeholder="Search request..."
      v-model="request"
      type="text"
    />

    <ItemsSearchSelectBadge>
      <template #head> method </template>

      <template #body>
        <ItemsSearchSelect v-model="selectedType">
          <ItemsSearchSelectOption
            v-for="{ name, value } of type"
            :value="value"
            :key="value"
          >
            {{ name }}
          </ItemsSearchSelectOption>
        </ItemsSearchSelect>
      </template>
    </ItemsSearchSelectBadge>

    <ItemsSearchSelectBadge>
      <template #head> where </template>

      <template #body>
        <ItemsSearchSelect v-model="selectedWhere">
          <ItemsSearchSelectOption
            v-for="{ name, value } of where"
            :value="value"
            :key="value"
          >
            {{ name }}
          </ItemsSearchSelectOption>
        </ItemsSearchSelect>
      </template>
    </ItemsSearchSelectBadge>
  </form>

  <!-- https://youtu.be/5pxpOYSERz4 -->
</template>
