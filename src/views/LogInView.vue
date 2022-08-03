<template>
  <div class="LogIn">
    <div class=" relative mx-auto container flex flex-col items-center justify-center h-[145px]">
    <h1 class="text-3xl font-bold">NYKA.IO</h1>
    <h1 class="text-1xl mt-4">Please log in to continue</h1>
    </div>

    <!-- form -->
    <div class="container block flex-col items-start mx-auto w-[440px]">
    <form class="flex flex-col items-start text-left">
      <label class="mt-[10px] font-semibold">Email or username</label>
      <input type="text" placeholder="Email or username" class="w-full border-inherit font-bold rounded-md border-2 p-[14px]"/>
      <label class="mt-[24px] font-semibold">Password</label>
      <input type="password" placeholder="Password" class="w-full border-inherit font-bold rounded-md border-2 p-[14px]"/>
      <button class="mt-[28px] items-end text-white font-bold rounded-full self-baseline px-6 py-2 bg-slate-500 hover:bg-slate-300 hover:text-black">LOG IN</button>
    </form>
    </div>
  </div>
</template>