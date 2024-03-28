<script setup>
import {
    ref
} from 'vue';

const items = ref([

    {
        "title": "What is HTML?",
        "content": "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
        "open": true
    },
    {
        "title": "What Is CSS?",
        "content": "CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
        "open": true
    },
    {
        "title": "What is JavaScript?",
        "content": "JavaScript is a high-level programming language that is commonly used to create interactive effects within web browsers. It is an essential technology for modern web development, enabling dynamic content, interactive elements, and asynchronous communication.",
        "open": true
    }

])

const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false,
  }));
};
</script>


<template>
    <div class="accordion-container">
      <div v-for="(item, index) in items" :key="index" class="accordion">
        <div class="accordion-header" @click="toggleAccordion(index)">
          {{ item.title }}
          <span class="arrow-icon">{{ item.open ? "▼" : "▶" }}</span>
        </div>
        <div v-show="item.open" class="accordion-content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </template>

<style scoped>
.accordion-container {
  max-width: 600px;
  margin: 50px auto;
}

.accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.accordion-header {
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow-icon {
  font-size: 20px;
}

.accordion-content {
  padding: 15px;
  display: none;
  border-top: 1px solid #ddd;
  background-color: #fff;
  color: #333;
}

.accordion-content[style] {
  display: block;
}
</style>