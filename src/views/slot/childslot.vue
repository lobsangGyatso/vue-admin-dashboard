<template>
    <v-container>
        <div v-for="user in users" :key="user.name">
            <slot :user="user"></slot>
        </div>
        <h2></h2>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      users: [
        { name: 'lobsang', img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { name: 'gyatso', img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' }
      ]
    }
  }
}
</script>
