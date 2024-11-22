<template>
  <div id="app">
    <!-- Trường nhập liệu -->
    <input type="text" v-model="userInput" placeholder="Nhập vào bất kỳ..." class="input-box" />

    <!-- Hiển thị giá trị nhập -->
    <p>
      Bạn vừa nhập: <strong>{{ userInput }}</strong>
    </p>

    <!-- Hiển thị thông báo nâng cao -->
    <p v-if="userInput">
      <span v-if="userInput.length < 5" class="short-text">Chuỗi bạn nhập quá ngắn!</span>
      <span v-else-if="userInput.length > 20" class="long-text">Chuỗi bạn nhập quá dài!</span>
      <span v-else class="valid-text">Chuỗi bạn nhập có độ dài hợp lý.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Biến lưu giá trị nhập từ input
      userInput: '',
    }
  },
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}

.input-box {
  padding: 10px;
  width: 50%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-top: 10px;
}

.short-text {
  color: red;
}

.long-text {
  color: orange;
}

.valid-text {
  color: green;
}
</style>
