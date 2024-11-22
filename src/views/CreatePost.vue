<template>
  <div class="mb-4">
    <h2>Tạo Bài Viết Mới</h2>
    <form @submit.prevent="submitPost">
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input type="text" id="title" v-model="newPost.title" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="author" class="form-label">Tác giả</label>
        <input type="text" id="author" v-model="newPost.author" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Nội dung</label>
        <textarea
          id="content"
          v-model="newPost.content"
          class="form-control"
          rows="4"
          required
        ></textarea>
      </div>

      <!-- Chọn hình ảnh cho bài viết -->
      <div class="mb-3">
        <label for="image" class="form-label">Chọn hình ảnh</label>
        <input type="file" id="image" @change="handleImageUpload" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Thêm Bài Viết</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      newPost: {
        title: '',
        author: '',
        content: '',
        image: null, // Trường chứa đường dẫn hình ảnh
      },
    }
  },
  methods: {
    submitPost() {
      // Emit event để truyền bài viết mới lên thành phần cha
      this.$emit('createPost', { ...this.newPost })
      // Reset form
      this.newPost.title = ''
      this.newPost.author = ''
      this.newPost.content = ''
      this.newPost.image = null
    },
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        // Đọc file hình ảnh và chuyển thành URL sử dụng FileReader API
        const reader = new FileReader()
        reader.onload = (e) => {
          this.newPost.image = e.target.result // Gán đường dẫn hình ảnh cho bài viết
        }
        reader.readAsDataURL(file) // Đọc file và chuyển sang dạng base64
      }
    },
  },
}
</script>
