<script setup lang="ts">
defineProps<({
  name: string,
  isBoycott: boolean,
  whyBoycott: string[];
  alternatives?: string[];
})>()

</script>

<template>
  <UCard  class="mb-4">
    <template #header >
      <div class="flex justify-between">
      <h3 class="capitalize font-bold text-2xl">
      {{ name }}
      </h3>
      <p :style="isBoycott ?  'background-color:#dc2626' : 'background-color:#4d7c0f' " class="inline px-4 py-2 rounded">
        {{ isBoycott ? "Boykot" : "Boykot değil" }}
      </p>
      </div>
    </template>
    <template #footer>
      <p v-if="isBoycott" class="font-bold text-lg mb-2">Neden Boykot ?</p>
      <p v-if="whyBoycott.length<2">
        - {{whyBoycott[0]}}
      </p>
      <ol v-else>
        <li v-for="w in whyBoycott"  class="list-disc ml-3">
          {{w}}
        </li>
      </ol>
      <p v-if="alternatives?.length>0" class="font-bold text-lg mt-4 mb-2">Alternatifleri :</p>
      <ul>
        <li v-for="alt in alternatives" class="p-1 bg-sky-700 inline-block mr-2 mb-2 rounded">
          <p class="capitalize">
          {{alt}}
          </p>
        </li>
      </ul>
    </template>
  </UCard>
</template>

<style scoped>

</style>
