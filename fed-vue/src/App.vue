<template>
  <div id="app">
    <h1>PETstock FED Test</h1>
    <div class="controls">
      <section class="categories">
        <ul>
          <li v-for="i in ['adult','mature','puppy']" :key="i">
            <button class="category-btn" v-on:click="selectCategory(i)">{{ i }}</button>
          </li>
          <li :key="all">
            <button class="category-btn" v-on:click="selectCategory()">View All</button>
          </li>
        </ul>
      </section>
    </div>
    <div class="results">
      <p>Found <strong>{{filterProducts.length}}</strong> results</p >
      <ul class="products">
        <li v-for="product in filterProducts" :key="product.sku" class="product-item">
          <img :src="product.img" :alt="product.name">
          <img
            v-if="product.fullPrice > product.listPrice"
            class="sale-badge"
            src="../public/images/sale.png"
            alt="sale-badge"
          >
          <a :href="product.href" title="Product 1">
            {{ product.name }}
          </a >
          <div class="price">
            <div v-if="product.fullPrice > product.listPrice">
              <div class="price-before">Was <del>${{product.fullPrice}}</del></div>
              <div class="price-now">Now ${{product.listPrice}}</div>
            </div>
            <div v-else>
              ${{product.listPrice}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import response from './data.json';
  export default {
    name: 'app',
    data() {
      return {
        /** @type {Array} Category response. */
        categories: [],
        /** @type {Array} Product response. */
        products: [],
        /** @type {String} Selected viewing category or null. */
        selectedCategory: null,
      };
    },
    computed: {
      filterProducts () {
        return this.products.filter(product =>
          product.category === this.selectedCategory || !this.selectedCategory
        );
      }
    },
    methods: {
      selectCategory(category) {
        this.selectedCategory = category;
      }
    },
    mounted () {
      setTimeout(() => {
        this.categories = response.categories;
        this.products = response.products;
        console.log(this.categories);
        console.log(this.products);
      }, 250);
    }
  };
</script>

<style lang="scss">
  $size-mobile-max: 37.5rem;
  $size-large: 2 * $size-mobile-max;

  $color-gray: #6B6B6B;
  $color-white: #fefefe;
  $color-sale: #82B366;
  $color-controls: #3333FF;

  #app {
    font-family: Helvetica, Arial, sans-serif;
    > * {
      max-width: 75rem;
      margin: 0 auto;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .categories {
      ul {
        display: flex;
        li {
          margin-right: 0.25rem;
          .category-btn {
            background-color: #2d6fa7;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 13px;
            padding: 5px 10px;
            font-weight: 500;
          }
        }
      }
    }
    .controls {
      display: grid;
      grid-template-columns: 3fr 2fr;
    }
    .controls button {
      border: 1px solid $color-controls;
      background-color: $color-white;
    }
    .results > ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: $size-mobile-max) {
      .results > ul {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .product-item {
      color: #535353;
      padding: 10px;
      position: relative;
      img {
        max-width: 100%;
      }
      .sale-badge {
        position: absolute;
        z-index: 10;
        right: 5px;
        top: 0;
      }
      a, a:visited {
        text-decoration: none;
        color: #919191;
        display: inline-block;
      }
      .price {
        margin-top: 10px;
      }
      .price-before {
        font-size: 12px;
      }
      .price-now {
        color: #ec008c;
      }
    }
  }
</style>
