<template>
  <article class="table-of-contents hidden w-full break-after-page flex-col items-center print:flex">
    <header
      class="sticky top-0 z-10 flex w-full break-after-avoid-page flex-col items-center border-t border-gray-200 bg-white/90 pt-16 backdrop-blur print:relative print:border-0 print:pt-0 print:backdrop-blur-none"
    >
      <h3
        class="mb-12 w-1/2 text-center font-serif text-7xl font-medium leading-tight after:mx-auto after:mt-4 after:block after:h-0.5 after:w-24 after:bg-red-500 after:content-[''] print:mb-3 print:text-3xl print:after:mt-3 print:after:w-8"
      >
        Elder Affirmation of Faith
      </h3>
      <h2 class="font-serif text-4xl text-gray-400 print:text-xl">Table of Contents</h2>
      <hr class="mt-16 w-9/12 print:my-4" />
    </header>
    <ul class="break-after-page print:px-10">
      <li :key="idx" class="my-0.5" v-for="(chapter, idx) in chapters">
        <a :href="`#chapter-${chapter.id}`"
          ><span class="font-light text-gray-400">Chapter {{ chapter.id }} – </span>{{ chapter.title }}</a
        >
      </li>
    </ul>
  </article>
</template>

<script setup>
defineProps({ chapters: Array })
</script>

<style lang="postcss" scoped>
.table-of-contents ul li a::after {
  content: leader(dotted) target-counter(attr(href), page);
}
</style>
