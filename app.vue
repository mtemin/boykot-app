<script setup>
import companies from "./mockDB/companies.ts";
let search = ref("");

const filteredCompanies = computed(()=>{
  return companies.filter((company)=>{
    return company.name.match(search.value.toLowerCase());
  })
})

const boycotSitesHTML =
    `<ul><li><a href="https://www.boykot.co/" target="_blank">https://www.boykot.co/</a></li><li><a href="https://boykothareketi.com/" target="_blank">https://boykothareketi.com/</a></li><li><a href="https://boycott.thewitness.news/browse/1" target="_blank">https://boycott.thewitness.news/browse/1</a></li></ul>`;




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
                :proofs="company.proofs"
    />
    <UCard class="my-2">
      <p class="mb-2">
        Bu sitede yeterli bilgi bulamadınız mı? Diğer boykot bilgi sitelerini deneyin :
      </p>
      <a class="text-sky-400 mr-4 mb-4 p-1 border border-sky-400 rounded"  href="https://boycott.thewitness.news/browse/1" target="_blank">https://boycott.thewitness.news/browse/1</a>
      <a class="text-sky-400 mr-4 mb-4 p-1 border border-sky-400 rounded" href="https://www.boykot.co/" target="_blank">https://www.boykot.co/</a>
      <a class="text-sky-400 mr-4 mb-4 p-1 border border-sky-400 rounded" href="https://boykothareketi.com/" target="_blank">https://boykothareketi.com/</a>
    </UCard>

  </UContainer>
</template>
