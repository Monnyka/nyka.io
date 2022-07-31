<template>
<div class="bg-slate-200">
  <nav class="relative flex container mx-auto p-3">
    <div class="flex items-center justify-between">
      <div class="font-bold space-x-10 md:flex ">
        <router-link to="/" class="hover:text-blue-500 hover:underline"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:text-blue-500 hover:underline"
          >About</router-link
        >

        <router-link
          to="/project"
          class="hover:text-blue-500 hover:underline"
          >Project</router-link
        >
        <router-link
          to="/about"
          class="hover:text-blue-500 hover:underline"
          >Blog</router-link
        >
      </div>
    </div>

       <div class="flex flex-row justify-end flex-auto">
      <router-link to="/login" class="justify-end text-white font-bold rounded-full self-baseline px-6 py-2 bg-slate-500 hover:bg-slate-300 hover:text-black">Log In</router-link>
      <img src="../src/assets/profile.jpeg" alt="Image Profile" class="self-center w-10 h-10 rounded-full ml-5"/>
   </div>
  </nav>
  </div>
  <router-view />
</template>

<script>

export default {

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
