<script setup>
// No need to import RouterLink in Nuxt
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Navbar -->
    <header class="flex items-center justify-between w-full px-6 py-4 text-white bg-[#008289]">
      <h1 class="text-lg italic font-semibold">Eventful Moments.</h1>
      <nav>
        <NuxtLink to="/Login" class="mr-4 hover:underline">Login</NuxtLink>
        <NuxtLink to="/MyBucket" class="hover:underline">My Bucket</NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center flex-grow px-6 py-8">
      <div class="w-full max-w-7xl">
        <h1 class="mt-5 text-3xl font-bold text-gray-900">{{ title }}</h1>
        <p class="mt-2 text-sm text-blue-600">{{ date }}</p>

        <div class="mt-10 space-y-10 text-gray-700">
          <p v-for="(paragraph, index) in content" :key="index">{{ paragraph }}</p>
        </div>

        <!-- Buttons -->
        <div class="flex mt-6 mb-20 space-x-4">
          <NuxtLink
            to="/EditItem"
            class="w-[150px] h-[40px] bg-[#06C3B4] border rounded-[15px] text-white font-semibold flex items-center justify-center hover:bg-[#05A194] transition"
          >
            Edit
          </NuxtLink>
          <button
            class="w-[150px] h-[40px] bg-[#C34F06] border rounded-[15px] text-white font-semibold hover:bg-[#A53F04] transition"
            @click="deleteItem"
          >
            Delete
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full py-4 pr-6 text-right text-gray-900 bg-[#60CED4]">
      Eventful Moments by Place Your Name Here
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century",
      date: "20/06/2025",
      content: [
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
        "Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
        "Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
        "Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real."
      ]
    };
  },
  methods: {
    deleteItem() {
      console.log("Delete button clicked");
    }
  }
};
</script>