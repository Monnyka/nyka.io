<template>
  <h1>Project title</h1>
    <div>
    <div class=" relative mx-auto container flex flex-col items-center justify-center h-[145px]">
    <h1 class="text-3xl font-bold">NYKA.IO</h1>
    <h1 class="text-1xl mt-4">Please log in to continue</h1>
    </div>
    </div>

  <div class="relative mx-auto px-8 container grid grid-cols-4 gap-10">
    <div v-for="job in jobs" :key="job.id" class="flex flex-col bg-[#f9f9f9] items-start border-[#f9f9f9] border rounded-xl p-6 w-[270px] h-[320px] hover:border-[#4dcb36]">
      <h1 class="text-bold text-sm text-gray-500">{{job.date}}</h1>
      <router-link :to="{name: 'projectdetails', params: {id: job.id}}" class="text-gray-700 font-bold text-[1.2rem] text-left text-clip mt-4"> <h1>{{job.title}}</h1> </router-link>
      <p class="mt-4 text-sm text-gray-500">Project ID: {{job.id}}</p>
      <p class="mt-1 text-gray-500">{{job.description}}</p>
      <div class="absolute w-auto mt-[240px] text-white bg-green-500 flex items-center h-8 rounded-full px-6 font-semibold">
          <button class="text-sm">View Details</button>
      </div>
    </div>
  </div>

</template>
<script>
export default {
    data(){
        return {
            jobs: [
                {date: '24 Jan, 2022',title: 'Android is the best os on the mobile app so', id: 199, description: 'android description'},
                {date: '16 Aug', title: 'iOS', id: 2, description: 'iOS description'},
                {date: '16 Aug',title: 'Vue', id: 3, description: 'Vue description'},
                {date: '16 Aug',title: 'React', id: 4, description: 'React description'},
                {date: '16 Aug',title: 'Node', id: 5, description: 'Node description'}
            ]
        }
    }
}
</script>

<style>

</style>