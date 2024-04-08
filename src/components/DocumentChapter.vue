<template>
  <article :id="`chapter-${chapter.id}`" class="flex w-full break-inside-avoid-page break-after-page flex-col items-center bg-white print:block">
    <header
      class="sticky top-0 z-20 -mb-[1px] flex w-full break-after-avoid-page flex-col items-center border-t border-gray-200 bg-white/75 pt-16 backdrop-blur-md print:relative print:border-0 print:pt-0 print:backdrop-blur-none"
    >
      <h3
        class="mb-12 w-1/2 text-center font-serif text-7xl font-medium leading-tight after:mx-auto after:mt-4 after:block after:h-0.5 after:w-24 after:bg-red-500 after:content-[''] print:mb-3 print:text-3xl print:after:mt-3 print:after:w-8"
      >
        {{ chapter.title }}
      </h3>
      <h2 class="font-serif text-4xl text-gray-400 print:text-xl">Chapter {{ chapter.id }}</h2>
      <hr class="mt-16 w-9/12 print:my-4" />
    </header>
    <template v-for="content in chapter.content">
      <template v-if="content.type === 'paragraph'">
        <DocumentParagraph
          :footnotes="footnotes[content.id]"
          :key="content.id"
          :paragraph="content"
          :references="references[content.id]"
          class="z-10 bg-white"
        />
      </template>
    </template>
  </article>
</template>

<script setup>
import DocumentParagraph from '@/components/DocumentParagraph.vue'
import { computed } from 'vue'

const { chapter } = defineProps({ chapter: Object })

const references = computed(() => {
  let i = 0
  return chapter.content.reduce(
    (a, c) => ({
      ...a,
      ...{
        [c.id]: c?.reference ? c.reference.map((r) => ({ ...r, ...{ id: ++i } })) : [],
      },
    }),
    {}
  )
})
const footnotes = computed(() => {
  let i = 0
  return chapter.content.reduce(
    (a, c) => ({
      ...a,
      ...{
        [c.id]: c?.footnote ? c.footnote.map((r) => ({ ...r, ...{ id: ++i } })) : [],
      },
    }),
    {}
  )
})
</script>
