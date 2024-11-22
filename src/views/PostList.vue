<template>
  <div>
    <h2 class="mb-4">Danh sách bài viết</h2>

    <!-- Duyệt qua danh sách bài viết -->
    <div
      v-for="post in posts"
      :key="post.id"
      class="card mb-3"
      :class="{ 'border-success': post.id % 2 === 0, 'border-danger': post.id % 2 !== 0 }"
      :style="{ backgroundColor: post.id % 2 === 0 ? '#f9f9f9' : '#ffe6e6' }"
    >
      <div class="card-body">
        <!-- Hiển thị hình ảnh nếu có -->
        <div v-if="post.image">
          <img :src="post.image" alt="Bài viết hình ảnh" class="card-img-top" />
        </div>

        <h5 class="card-title mt-3">{{ post.title }}</h5>
        <h6 class="card-subtitle text-muted">Tác giả: {{ post.author }}</h6>
        <p class="card-text mt-3">{{ post.content }}</p>
        <p class="text-muted">Ngày đăng: {{ post.date.toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
