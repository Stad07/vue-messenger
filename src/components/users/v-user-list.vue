<template>
  <div class="v-user-list">
    <v-user
      v-for="chat in chats"
      :key="chat.id"
      :user_data="chat"
    />
  </div>
</template>

<script>
import vUser from './v-user'
import { mapAction, mapActions, mapState } from 'vuex'

export default {
  name: 'v-user-list',
  props: {},
  data () {
    return {}
  },
  components: { vUser },
  computed: {
    ...mapState([
      'chats'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CHATS',
      'SET_USER_TO_HEADER'
    ])
  },
  mounted () {
    this.FETCH_CHATS()
    this.SET_USER_TO_HEADER()
  }
}
</script>
