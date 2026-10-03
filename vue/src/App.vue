<template>
  <section
    class="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center"
  >
    <input
      type="text"
      class="border h-12 w-60 rounded-lg outline-0 pl-2 overflow-x-scroll"
      placeholder="Input something"
      v-model="inp"
    />
    <p class="mt-4 text-xl" :class="isPalindrome ? 'text-green-500' : 'text-red-500'">
      {{ output }}
    </p>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const inp = ref("");
const output = ref("");
const isPalindrome = ref(false);

watch(inp, (newValue) => {
  if (!newValue) {
    output.value = "";
    return;
  }
  if (newValue.length == 1) {
    output.value = "It's not a palindrome.";
    isPalindrome.value = false;
    return;
  }
  const lower = newValue.toLowerCase();
  const reverse = lower.split("").reverse().join("");

  if (lower === reverse) {
    output.value = "It's a palindrome.";
    isPalindrome.value = true;
  } else {
    output.value = "It's not a palindrome.";
    isPalindrome.value = false;
  }
});
</script>

<style scoped></style>
