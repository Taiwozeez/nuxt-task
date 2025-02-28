const isLoading = ref(false);

const handleSubmit = async () => {
    isLoading.value = true;
    try {
        const { data, error } = await useFetch('https://eventful-moments-api.onrender.com/api/v1/users/login', {
            method: 'POST',
            body: {
                email: 'emeka.akpan@uatdrive.com',
                password: 'password',
            },
        });

        if (error.value) {
            throw new Error(error.value.message || 'Login failed');
        }

        if (data.value) {
            localStorage.setItem('token', data.value.token);
            router.push('/MyBucket');
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
    } finally {
        isLoading.value = false;
    }
};