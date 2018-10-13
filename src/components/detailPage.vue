<template>
<div class="container">
  <p>动漫详情</p>
  <table width="100%">
      <thead>
        <tr>
          <th>name</th>
          <th>author</th>
          <th>national</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in movies" :key="index">
            <td>{{item.title}}</td>
            <td>{{item.doctor}}</td>
            <td>{{item.country}}</td>
            <td>{{item.year}}</td>
          </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    this.getCartoonDetail()
  },
  methods: {
    // 获取动漫信息
    getCartoonDetail () {
      const _id = this.$route.params.id
      axios.get('/api/findCartoonById', {
        params: {
          _id: _id
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.movies = res.data.result
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
