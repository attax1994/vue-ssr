<template>
  <div>
    <h1>This is Item Component</h1>
    <div>{{ item.title }}</div>
  </div>
</template>

<script>
  import ItemStore from '../stores/item.store'

  export default {
    name: "Item",
    asyncData({store, route}) {
      // 异步获取store
      store.registerModule('item', ItemStore)
      return store.dispatch('item/fetchItem', route.params.id)
    },
    destroyed() {
      this.$store.unregisterModule('item')
    },
    computed: {
      item() {
        return this.$store.state.item.items[this.$route.params.id]
      },
    },
  }
</script>

<style scoped>

</style>