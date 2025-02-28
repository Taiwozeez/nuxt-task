<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '@/src/services/register'; // Correct import

const form = ref({
    fullname: 'Samuel',
    email: 'daspecialman@gmail.com',
    password: 'password',
});

const isLoading = ref(false);
const router = useRouter();

const handleSubmit = async () => {
  isLoading.value = true;
  try {
    const response = await registerUser(
      form.value.fullname,
      form.value.email,
      form.value.password
    );
    console.log('Registration successful:', response);
    localStorage.setItem('token', response.token);
    router.push('/MyBucket');
  } catch (error) {
    console.error('Registration failed:', error);
    alert('Registration failed. Please check your details and try again.');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Navbar -->
    <header class="flex items-center justify-between w-full px-6 py-4 text-white bg-[#008289]">
      <h1 class="text-lg italic font-semibold">Eventful Moments.</h1>
      <nav>
        <NuxtLink to="/login" class="mr-4 hover:underline">Login</NuxtLink>
        <NuxtLink to="/register" class="hover:underline">Register</NuxtLink>
      </nav>
    </header>

    <!-- Signup Form -->
    <div class="flex items-center justify-center flex-grow">
      <div class="w-full max-w-md p-2">
        <h2 class="text-2xl font-bold text-gray-900">Create an account,</h2>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="mt-6">
          <div>
            <label class="block font-medium text-gray-700">Fullname</label>
            <input 
              v-model="form.fullname"
              type="text" 
              class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" 
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="mt-4">
            <label class="block font-medium text-gray-700">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" 
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mt-4">
            <label class="block font-medium text-gray-700">Password</label>
            <input 
              v-model="form.password"
              type="password" 
              class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" 
              placeholder="Enter your password"
              required
            />
          </div>

          <!-- Centered Button -->
          <div class="flex justify-center mt-6">
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-[150px] h-[40px] bg-[#5271FF] border rounded-xl text-white font-semibold opacity-100 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? 'Creating...' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer class="w-full py-4 pr-6 text-right text-gray-900 bg-[#60CED4]">
      Eventful Moments by Place Your Name Here
    </footer>
  </div>
</template>