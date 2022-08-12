<template>
  <div class="container grid grid-cols-3 gap-4 h-4 m-auto">
    <div class="bg-green-500 col-span-1 h-full">
      <p class="text-3xl font-black text-white mt-8">Create New Project</p>
    </div>
    <div class="col-span-2 flex flex-col items-start p-8 w-full">
      <form
        @submit.prevent=""
        class="container flex flex-col items-start"
      >
        <label
          class="Inter block text-sm font-medium text-gray-700"
          >Project title</label
        >
        <input
          v-model="title"
          required
          type="text"
          class="forminput focus:border-green-500 focus:ring-green-500 border-gray-300"
        />
        <label
          class="block text-sm font-medium text-gray-700 mt-4"
          >Description</label
        >
        <textarea
          v-model="description"
          type="form-textarea"
          class="forminput"
        />
        <label
          class="block text-sm font-medium text-gray-700 mt-4"
          >Owner</label
        >
        <input
          v-model="owner"
          type="text"
          class="forminput"
        />
        <label class="block text-sm font-medium text-gray-700 mt-4"
          >Deadline</label
        >
        <input
          v-model="deadLine"
          type="text"
          class="forminput"
        />
        <label
          class="block text-sm font-medium text-gray-700 mt-4"
          >Task</label
        >

        <div v-if="task" class="container flex flex-col items-start mb-1">
            <div v-for="task in task" :key="task" class="bg-gray-200 text-md rounded-md text-gray-500 p-1 px-4 mt-2 mr-2 max-w-auto">
            <h1 class="font-semibold ">{{task}}</h1>
            </div>
        </div>

        <div class="container flex flex-row ">
        <input
          v-model="tempTask"
          type="text"
          class="forminput"
        />

        <button
          @click="addTask"
          class="btn mt-1 ml-2"
        >Add</button>
        </div>

        <label
          class="block text-sm font-medium text-gray-700 mt-4"
          >Category</label
        >
        <input
          @keyup="addCategory"
          v-model="tempCategory"
          type="text"
          class="forminput"
        />
        <div class="flex flex-row items-start my-4 justify-item-center">
          <input
            v-model="isComplete"
            type="checkbox"
            class="form-checkbox mr-2 mt-[3px] bg-slate-500"
          />
          <p class="text-sm">Completed</p>
        </div>
        <button
          @click="handleSubmit"
          class="btn"
        >
          Create Project
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      owner: "",
      tempTask: "",
      task: [],
      deadLine: "",
      tempCategory: "",
      category: [],
      isComplete: false,
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        description: this.description,
        owner: this.owner,
        deadline: this.deadLine,
        task: this.task,
        category: this.category,
        isComplete: this.isComplete,
      };

      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
    },

    addTask() {
      if (this.tempTask) {
        if (!this.task.includes(this.tempTask)) {
          this.task.push(this.tempTask);
        }
        this.tempTask = "";
        console.log(this.task);
      }
    },

    addCategory(e) {
      if (e.keyCode === 32 && this.tempCategory) {
        if (!this.category.includes(this.tempCategory)) {
          this.category.push(this.tempCategory);
        }
        this.tempCategory = "";
        console.log(this.category);
      }
    },
  },
};
</script>

<style></style>
