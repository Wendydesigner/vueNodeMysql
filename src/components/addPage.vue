<template>
  <div>
    <p>添加动漫</p>
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
      <div class="form-item">
        year: <input type="text" v-model="params.year">
      </div>
    </form>
    <p></p>
    <button @click="addCartoon(params)">Add cartoon</button>
    <button @click="getBack">go back</button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultParams = {
  title: '',
  doctor: '',
  country: '',
  year: ''
}
export default {
  data () {
    return {
      params: {...defaultParams}
    }
  },
  methods: {
    // 添加一条动漫信息
    addCartoon (params) {
      axios.post('/api/addCartoon', {
        ...params
      }).then(res => {
        if (res.data.code === 200) {
          window.alert('Add cartoon successfully!')
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
