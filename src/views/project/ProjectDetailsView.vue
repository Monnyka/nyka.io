<template>

<div class="container grid grid-cols-3 gap-4 h-4 m-auto">
  <div class="bg-green-500 col-span-1 h-full">
    <p class="text-3xl font-black text-white mt-8">Project Details</p>
  </div>
  <div class="col-span-2 flex flex-col items-start p-8">
    <p class="font-1xl ">Project name</p>
    <div class="flex flex-row items-center">
      <div v-if="project.isComplete" class="rounded-full px-4 mr-4 border-2 mt-2 p-2 border-green-500">
        <p class="font-bold text-gray-500">Complete</p>
      </div>
    <h1 class="text-3xl font-black mt-2 text-green-500 text-start">
      {{project.title}}
    </h1>
</div>
    <p class="text-sm text-bold mt-2">Initiated by: {{project.owner}}</p>
    <!-- Category -->
    <div v-if="project.category" class="flex flex-row items-start">
        <div v-for="category in project.category" :key="category" class="bg-green-500 text-sm font-semibold rounded-full text-white p-1 px-4 mt-2 mr-2">
          <p>{{category}}</p>
        </div>
    </div>

        <!-- Project Option -->
    <p class="text-sm uppercase mt-8 font-bold">Options</p>
    <div class="flex flex-row">
          <!-- Update -->
    <div class="delete flex flex-row p-1 px-4 mt-2 mr-2 max-w-auto rounded-md bg-gray-200 cursor-pointer hover:shadow-sm hover:bg-slate-300 hover:font-white">
      <span class="material-icons text-gray-500">edit</span>
      <p class="text-gray-500 font-bold ml-2 ">Update</p>
      </div>

    <!-- edit -->
    <div @click="completeProject()" class="delete flex flex-row p-1 px-4 mt-2 mr-2 max-w-auto rounded-md bg-gray-200 cursor-pointer hover:shadow-sm hover:bg-slate-300">
      <span class="material-icons text-gray-500">check_circle_outline</span>
      <p class="text-gray-500 font-bold ml-2">Complete</p>
      </div>

    <!-- delete -->
      <div @click="deleteProject()" class="delete flex flex-row p-1 px-4 mt-2 mr-2 max-w-auto rounded-md bg-red-400 cursor-pointer hover:shadow-sm hover:bg-red-500">
      <span class="material-icons text-white">delete</span>
      <p class="text-white font-bold ml-2">{{isDeleted}}</p>
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
import { functionExpression } from '@babel/types';

export default {
  props: ["id"],
  data(){
    return{
    project:[],
    URI: 'http://localhost:3000/posts/'+this.id,
    isDeleted: 'Delete'
    }

  },
  mounted() {
      fetch('http://localhost:3000/posts/' + this.id)
      .then(res => res.json())
      .then(data => this.project = data)
      .catch(err => console.log(err.message))
  },
  methods:{
    deleteProject(){
      fetch(this.URI,{method: 'DELETE'})
      .then(this.isDeleted='This project has been deleted')
    },

    completeProject(){
      fetch(this.URI, {method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({isComplete: !this.project.isComplete})
      })
      .then(this.project.isComplete = !this.project.isComplete)
    }
  }
};
</script>

<style></style>
