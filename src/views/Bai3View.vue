<template>
  <div id="app" class="container mt-5">
    <h2 class="text-center">Nhập thông tin cá nhân</h2>

    <!-- Form nhập liệu -->
    <form class="mt-4">
      <div class="mb-3">
        <!-- Họ và Tên -->
        <label for="name" class="form-label">Họ và Tên:</label>
        <input
          id="name"
          type="text"
          v-model="user.name"
          class="form-control"
          placeholder="Nhập họ và tên"
        />
      </div>

      <div class="mb-3">
        <!-- Tuổi -->
        <label for="age" class="form-label">Tuổi:</label>
        <input
          id="age"
          type="number"
          v-model="user.age"
          class="form-control"
          placeholder="Nhập tuổi"
        />
      </div>

      <div class="mb-3">
        <!-- Email -->
        <label for="email" class="form-label">Email:</label>
        <input
          id="email"
          type="email"
          v-model="user.email"
          class="form-control"
          placeholder="Nhập email"
        />
      </div>
    </form>

    <!-- Hiển thị thông tin -->
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Thông tin của bạn</h5>
        <p class="card-text"><strong>Họ và Tên:</strong> {{ user.name || 'Chưa nhập' }}</p>
        <p class="card-text"><strong>Tuổi:</strong> {{ user.age || 'Chưa nhập' }}</p>
        <p class="card-text"><strong>Email:</strong> {{ user.email || 'Chưa nhập' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '', // Biến lưu họ và tên
        age: '', // Biến lưu tuổi
        email: '', // Biến lưu email
      },
    }
  },
}
</script>

<style scoped></style>
