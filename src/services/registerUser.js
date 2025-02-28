import React from 'react';
  
  const RegisterUser = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default RegisterUser;
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