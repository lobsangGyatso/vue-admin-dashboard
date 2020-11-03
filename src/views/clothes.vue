<template>
    <v-container >
        <v-card>
          <v-row>
            <v-col cols="12" md="6">
               <div class="mx-3" width="200px" height="200px">
                <img :src="image" width="400px" >
               </div>
            </v-col>
           <v-col cols="12" md="6">
             <div class="home-view-container">Cart:{{cart}}
               <ul>
                 <li>ll</li>
               </ul>
             </div>
              <v-card-title>{{title}}</v-card-title>
              <v-span class="li"  v-if=" inventory >10">In Stock</v-span>
              <v-span v-else-if=" inventory <=10 && inventory>0">Almost sold out</v-span>
              <v-span v-else>Out of Stock</v-span><hr>
           color:
            <ul>
            <li class="li" v-for="(variant, idx) in variants" :key="idx"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(idx)">
            </li>
            </ul>
            <v-btn @click="addToCart"
            :disabled ="inventory == 0 "
            >Add To Cart </v-btn>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'solid men turtle neck purple t-shirt',
      selectedVariant: 0,
      cart: 0,
      // image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      variants: [
        {
          variantColor: 'black',
          variantImage: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          variantQuantity: 0
        },
        {
          variantColor: 'blue',
          variantImage: 'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
          variantQuantity: 4
        }
      ]
    }
  },
  methods: {
    addToCart () {
      this.cart += 1
    },
    updateProduct (indx) {
      this.selectedVariant = indx
    }
  },
  computed: {
    image () {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory () {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
}
</script>
