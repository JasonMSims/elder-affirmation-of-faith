<template>
  <div class="mx-auto flex flex-col items-center justify-center font-serif print:block">
    <section class="cover sticky top-0 flex h-screen max-w-3xl flex-col items-center justify-center text-center">
      <!-- <h2 class="my-16 max-w-sm font-harbins text-3xl font-medium uppercase">
        <HarbinsLogo class="my-4 mx-auto w-24 fill-current" />
        {{ author }}
      </h2> -->
      <h2 class="font-harbins my-12 max-w-sm text-3xl font-medium uppercase print:my-6">
        <HarbinsLogo class="mx-auto w-48 fill-current" />
      </h2>
      <h1
        class="mb-12 text-center font-serif text-6xl font-medium leading-tight after:mx-auto after:mt-4 after:block after:h-0.5 after:w-24 after:bg-red-500 after:content-[''] print:text-5xl"
      >
        {{ document.title }}
      </h1>
      <h3 class="text-3xl font-thin tracking-wide text-gray-400 print:max-w-md print:text-xl" v-html="document.abstract"></h3>
    </section>
    <DocumentTableOfContents :chapters="document.content" />
    <section class="main">
      <template v-for="content in document.content">
        <DocumentChapter :chapter="content" :key="content.id" v-if="content.type === 'chapter'" />
      </template>
    </section>
  </div>
</template>

<script setup>
import HarbinsLogo from '@/assets/hcbc_logo.svg'
// import document from '@/data/constitution_by-laws'
import DocumentChapter from '@/components/DocumentChapter.vue'
import DocumentTableOfContents from '@/components/DocumentTableOfContents.vue'
// import { computed, ref } from 'vue'

import document from '@/data/elder_affirmation_of_faith'

// const author = document.author.map((author) => author.name).join(', ')
</script>

<style lang="postcss">
h2 {
  string-set: chapter_number content();
}
h3 {
  string-set: chapter_title content();
}
.cover {
  page: cover;
}
.main {
  page: main;
  counter-reset: page 1;
}
@prince-pdf {
  prince-pdf-print-scaling: auto;
}
@page {
  margin: 10mm;
}
@page cover {
  @bottom-left {
    content: none;
  }
  @bottom-right {
    content: none;
  }
}
@page main {
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25;
  color: #6b7280;

  @bottom-center {
    border-top: 1px solid #e5e7eb;
  }

  @bottom-right {
    border-top: 1px solid #e5e7eb;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    content: counter(page);
  }
  @bottom-left {
    border-top: 1px solid #e5e7eb;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    content: string(chapter_number) ' – ' string(chapter_title);
  }
}
</style>
