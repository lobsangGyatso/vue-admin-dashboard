<template>
    <v-container>
        <v-card>
<childSlot>
  <template slot-scope="props">
    <v-row>
      <v-col class="ml-3"
      md="4"
      sm="3">
      <v-card class="pa-2"   outlined
            tile>
        <v-card-title> {{props.user.name}}</v-card-title>
        <v-card-text>
          <v-img class="card-img" :src="props.user.img"></v-img>
        </v-card-text>
      </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </template>
</childSlot>
        </v-card>
    </v-container>
</template>

<script>
import childSlot from './childslot'

export default {
  components: {
    childSlot
  },
  data () {
    return {}
  }
}
</script>
