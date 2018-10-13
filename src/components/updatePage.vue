<template>
  <div>
    <p>更改动漫信息</p>
    <form action="" :model="params">
      <div class="form-item">
        name: <input type="text" name="name" id="" v-model="params.title">
      </div>
      <div class="form-item">
        author: <input type="text" v-model="params.doctor">
      </div>
      <div class="form-item">
        national: <input type="text" v-model="params.country">
      </div>
    </form>
    <p></p>
    <button @click="updateCartoon(params)">confirm</button>
    <button @click="getBack">go back</button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultParams = {
  title: '',
  doctor: '',
  country: ''
}
export default {
  data () {
    return {
      params: {...defaultParams}
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
          this.params = res.data.result[0]
        }
      })
    },
    // 更改此动漫信息
    updateCartoon (params) {
      axios.post('/api/updateCartoon', {
        ...params
      }).then(res => {
        if (res.data.code === 200) {
          window.alert('Update cartoon successfully!')
        }
      })
    },
    getBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.form-item {
  margin: 10px;
  font-size: 16px;
}
</style>
