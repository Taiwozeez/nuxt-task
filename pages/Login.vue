<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const isLoading = ref(false); // Add isLoading state
const router = useRouter();

const handleSubmit = async () => {
  isLoading.value = true; // Set loading state to true
  try {
    const { data, error } = await useFetch('https://eventful-moments-api.onrender.com/api/v1/users/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (error.value) {
      throw new Error(error.value.message || 'Login failed');
    }

    if (data.value) {
      console.log('Login successful:', data.value);

      // Store the token in localStorage or a state management solution
      localStorage.setItem('token', data.value.token);

      // Redirect to the desired page
      router.push('/MyBucket');
    }
  } catch (error) {
    console.error('Login failed:', error);
    alert('Login failed. Please check your credentials and try again.');
  } finally {
    isLoading.value = false; // Set loading state to false
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

    <!-- Login Form -->
    <div class="flex items-center justify-center flex-grow">
      <div class="w-full max-w-md p-2">
        <h2 class="text-2xl font-bold text-gray-900">Welcome back,</h2>
        <p class="mt-2 text-gray-600">
          Hi, my name is Eventful Moments, I am a bucket... no, not the bucket of water but I store
          awesome moments you will like to have in coming years.
        </p>

        <!-- Form -->
        <form class="mt-6" @submit.prevent="handleSubmit">
          <div>
            <label class="block font-medium text-gray-700">Email</label>
            <input 
              v-model="email" 
              type="email" 
              class="w-full px-4 py-2 mt-1 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" 
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mt-4">
            <label class="block font-medium text-gray-700">Password</label>
            <input 
              v-model="password" 
              type="password" 
              class="w-full px-4 py-2 mt-1 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" 
              placeholder="Enter your password"
              required
            />
          </div>

          <!-- Centered Smaller Button -->
          <div class="flex justify-center mt-6">
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-[150px] h-[40px] bg-[#5271FF] border rounded-[15px] text-white font-semibold opacity-100 hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? 'Logging in...' : 'Login' }} <!-- Dynamic button text -->
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