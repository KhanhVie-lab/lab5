<template>
  <header></header>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4">Ứng dụng Blog</h1>

    <!-- Tìm kiếm bài viết -->
    <div class="mb-3">
      <input
        type="text"
        v-model="searchQuery"
        class="form-control"
        placeholder="Tìm kiếm bài viết..."
      />
    </div>

    <!-- Sắp xếp bài viết -->
    <div class="mb-3">
      <button class="btn btn-info" @click="sortPosts('title')">Sắp xếp theo Tiêu đề</button>
      <button class="btn btn-warning" @click="sortPosts('date')">Sắp xếp theo Ngày</button>
    </div>

    <!-- Thành phần tạo bài viết mới -->
    <CreatePost @createPost="addPost" />

    <!-- Thành phần hiển thị danh sách bài viết -->
    <PostList :posts="filteredPosts" />
  </div>

  <RouterView />
</template>

<script>
import PostList from '../views/PostList.vue'
import CreatePost from '../views/CreatePost.vue'

export default {
  name: 'App',
  components: { PostList, CreatePost },
  data() {
    return {
      posts: [],
      searchQuery: '', // Dữ liệu tìm kiếm
    }
  },
  computed: {
    // Lọc bài viết theo từ khóa tìm kiếm
    filteredPosts() {
      return this.posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    },
  },
  methods: {
    // Sắp xếp bài viết theo tiêu đề hoặc ngày đăng
    sortPosts(criteria) {
      if (criteria === 'title') {
        this.posts.sort((a, b) => a.title.localeCompare(b.title))
      } else if (criteria === 'date') {
        this.posts.sort((a, b) => b.date - a.date) // Sắp xếp theo ngày giảm dần
      }
    },
    // Thêm bài viết mới vào danh sách
    addPost(post) {
      post.date = new Date()
      this.posts.push(post)
    },
  },
}
</script>
