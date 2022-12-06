<template>
  <div class="app-container">
    <h1>Hello</h1>
    <p>{{ arr }}</p>
    <p>obj: {{ obj }}</p>
    <button @click="addItem">add Item</button>
  </div>
</template>

<script>

export default {
  name: "Test",
  data() {
    return {
      arr: [1, 2, 3],
      obj: {
        a: "old property",
      },
    };
  },
  methods: {
    addItem() {
      //   this.arr[0] = 10;
      this.arr.length += 1;
      this.obj.b = "new Porperty";
      console.log(this.obj);
      console.log(this.arr);
    },
  },
  created() {
    axios.get("/hello").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style></style>
