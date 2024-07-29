<script setup>
import companies from "./mockDB/companies.ts";
let search = ref("");

const filteredCompanies = computed(()=>{
  return companies.filter((company)=>{
    return company.name.match(search.value.toLowerCase());
  })
})




</script>

<template>
  <UContainer>
<!--    <UCard class="mt-10">-->
<!--      <template #header>-->
<!--        <div class="flex justify-between">-->
<!--          <h1>Welcome to Nuxt UI Starter</h1>-->
<!--          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>-->
<!--        </div>-->
<!--      </template>-->
<!--      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>-->
<!--    </UCard>-->
    <UCard class="my-6">
      <template #header class="flex justify-center">
        <input v-model="search" placeholder="Bir marka veya şirket ismi giriniz..." type="search" name="searchCompany" id="searchCompany" class="rounded p-2 my-4 m-auto w-full text-lg">
      </template>
    </UCard>

    <TheCompany v-for="company in filteredCompanies"
                :name="company.name"
                :is-boycott="company.isBoycott"
                :why-boycott="company.whyBoycott"
                :alternatives="company.alternatives"
    />

  </UContainer>
</template>
