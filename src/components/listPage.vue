<template>
  <div>
    <p>列表页</p>
    <table width="100%">
      <thead>
        <tr>
          <th>name</th>
          <th>author</th>
          <th>national</th>
          <th>year</th>
          <th>check</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in movies" :key="index">
            <td>{{item.title}}</td>
            <td>{{item.doctor}}</td>
            <td>{{item.country}}</td>
            <td>{{item.year}}</td>
            <td><button @click="getHref(item)">check</button></td>
            <td><button @click="update(item)">update</button></td>
            <td><button @click="deleteContent(item, index)">delete</button></td>
          </tr>
      </tbody>
    </table>
    <p><button @click="addContent()">添加动漫</button></p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    // 获取全部的动漫信息
    getMovies () {
      axios.get('/api/findAllCartoon').then(res => {
        if (res.data.code === 200) {
          this.movies = res.data.result
        }
      })
    },
    getHref (item) {
      this.$router.push(`/detail/${item._id}`)
    },
    update (item) {
      this.$router.push(`/updateCartoon/${item._id}`)
    },
    // 删除此动漫信息
    deleteContent (item, index) {
      axios.post('/api/deleteCartoon', {
        _id: item._id
      }).then(res => {
        if (res.data.code === 200) {
          this.movies.splice(index, 1)
          window.alert('Delete cartoon successfully!')
        }
      })
    },
    addContent () {
      this.$router.push(`/addCartoon`)
    }
  }
}
</script>
