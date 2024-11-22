<template>
  <div id="app">
    <!-- Hiển thị thông báo -->
    <p>{{ message }}</p>
    <img v-if="image" :src="image" alt="Dynamic Image" class="image" />
    <br />
    <!-- Nút bấm thay đổi thông báo -->
    <button class="btn btn-secondary" @click="updateMessage">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Biến message với giá trị mặc định
      message: 'Đây là thông báo mặc định!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVJkUeQQxEU6HvsuciokFucCYaEu9wdBA47HH1J2feHwRX8UdDoIhJJiyCm8rrrPYK3Y&usqp=CAU',
    }
  },
  methods: {
    // Hàm thay đổi giá trị message
    updateMessage() {
      this.message = 'Thông điệp đã được thay đổi!'
      this.image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDb2M7GGRXQsUroUcAVVHxTmMQwAzw-WfUw&s'
    },
  },
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
