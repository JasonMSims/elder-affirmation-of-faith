<template>
  <article class="max-w-4xl break-inside-avoid-page py-12 print:py-3 print:px-10">
    <h4
      class="font-harbins text-center text-xl font-extralight uppercase tracking-widest before:mx-auto before:mb-6 before:block before:h-0.5 before:w-4 before:bg-gray-200 print:text-base print:before:mb-3"
    >
      Paragraph {{ paragraph.id }}
    </h4>
    <template :key="idx" v-for="(section, idx) in paragraph.content">
      <DocumentTable :key="idx" :table-data="section" v-if="section?.type === 'table'" />
      <p class="py-4 print:py-2" v-else v-html="formatParagraph(section)"></p>
    </template>
    <section class="mx-4 px-2 pt-2 pb-4 text-sm font-light" v-if="footnotes.length > 0 || references.length > 0">
      <hr class="mx-auto mb-4 w-full" />
      <ol class="text-gray-500" v-if="footnotes.length > 0">
        <li :key="id" v-for="{ content, id } in footnotes">
          <sup>{{ alphabet[id - 1] }}</sup
          >{{ ' ' }}
          <span :key="idx + 1" v-for="(footnote, idx) in content">{{ footnote }}</span>
        </li>
      </ol>
      <ol class="text-gray-500" v-if="references.length > 0">
        <li :key="id" v-for="{ content, id } in references">
          <sup>{{ id }}</sup
          >{{ ' ' }}
          <a :href="formatScriptureLinks(reference)" :key="idx" target="_blank" v-for="(reference, idx) in content">
            {{ reference }}<span v-if="idx + 1 < content.length">; </span>
          </a>
        </li>
      </ol>
    </section>
  </article>
</template>
<style lang="postcss">
sub,
sup {
  @apply text-gray-400;
  @apply text-[70%] !important;
}
</style>

<script setup>
import { computed } from 'vue'
import DocumentTable from './DocumentTable.vue'

const { footnotes, paragraph, references } = defineProps({
  footnotes: Array,
  paragraph: Object,
  references: Array,
})

const formatReferences = (paragraph) =>
  paragraph
    .split('<reference>')
    .reduce((a, c, i) => (c = i > 0 && references[i - 1] ? `${a}<sup>${references[i - 1]?.id}</sup>${c}` : `${a}${c}`), '')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const formatFootnotes = (paragraph) =>
  paragraph.split('<footnote>').reduce((a, c, i) => (c = i > 0 ? `${a}<sup>${alphabet[footnotes[i - 1]?.id - 1]}</sup>${c}` : ''))

const formatParagraph = (paragraph) => formatReferences(formatFootnotes(paragraph))

const formatScriptureLinks = (reference) => `https://biblia.com/bible/esv/${encodeURIComponent(reference.replace(/[:]+/, '.'))}`
</script>
