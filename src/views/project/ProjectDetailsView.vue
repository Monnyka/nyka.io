<template>

<div class="container grid grid-cols-3 gap-4 h-4 m-auto">
  <div class="bg-green-500 col-span-1 h-full">

  </div>
  <div class="col-span-2 flex flex-col items-start p-8">
    <p class="font-1xl ">Project name</p>
    <h1 class="text-3xl font-black mt-2 text-green-500 text-start">
      {{project.title}}
    </h1>
    <p class="text-sm text-bold">Initiated by: {{project.owner}}</p>
    <p v-if="project.isComplete" class="text-sm mt-8 uppercase font-bold">Status is completed</p>

    <!-- Category -->
    <p v-if="project.category" class="text-sm uppercase mt-8 font-bold">category</p>
    <div v-if="project.category" class="flex flex-row items-start">
        <div v-for="category in project.category" :key="category" class="bg-green-500 text-sm font-semibold rounded-full text-white p-1 px-4 mt-2 mr-2">
          <p>{{category}}</p>
        </div>
    </div>

        <!-- Task -->
    <p v-if="project.task" class="text-sm uppercase mt-8 font-bold">Task</p>
    <div v-if="project.task" class="flex flex-col items-start">
        <div v-for="task in project.task" :key="task" class="bg-gray-200 text-md font-semibold rounded-md text-gray-500 p-1 px-4 mt-2 mr-2 max-w-auto">
          <p>{{task}}</p>
        </div>
    </div>

    <!-- Assignee -->
    <p class="text-sm uppercase mt-8 font-bold">assign to</p>
    <p class="text-sm mt-8 uppercase font-bold ">Description</p>
    <p class="text-left">{{project.description}}</p>
    <p class="text-sm mt-8 uppercase font-bold">Create Date</p>
    <p class="">{{project.date}}</p>
    <p class="text-sm mt-8 uppercase font-bold">Deadline</p>
    <p class="">{{project.deadline}}</p>
  </div>
</div>

</template>

<script>
export default {
  props: ["id"],
  data(){
    return{
    project:[]
    }

  },
  mounted() {

      fetch('http://localhost:3000/posts/' + this.id)
      .then(res => res.json())
      .then(data => this.project = data)
      .catch(err => console.log(err.message))

  },
};
</script>

<style></style>
