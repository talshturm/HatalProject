<template>
  <div>
    <header class="page-header">
      <h1 class="page-title">Jewelry</h1>
    </header>
    <div class="search-sort-container">
    <div class="search-container">
      <input type="text" v-model="input" placeholder="Search" @input="filterProducts" class="search-input">
    </div>
    <div class="sort-container">
      <div class="dropdown">
          <button class="dropbtn">{{ sortLabel }}</button>
          <div class="dropdown-content">
            <a href="#" @click.prevent="setSortOption('sortBy')">Sort by</a>
            <a href="#" @click.prevent="setSortOption('lowToHigh')">Price (low to high)</a>
            <a href="#" @click.prevent="setSortOption('highToLow')">Price (high to low)</a>
            <a href="#" @click.prevent="setSortOption('nameAsc')">Name (A to Z)</a>
            <a href="#" @click.prevent="setSortOption('nameDesc')">Name (Z to A)</a>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="product-list">
      <product v-for="product in filteredAndSortedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import api from '../services/products';
import product from '../components/product';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      input: '',
      sortOption: 'newest',
      sortLabel: 'Sort by',
    };
  },
  components: {
    product 
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    filteredAndSortedProducts() {
      let filteredProducts = this.filterProducts();

      switch (this.sortOption) {
        case 'lowToHigh':
          return filteredProducts.slice().sort((a, b) => a.price - b.price);
        case 'highToLow':
          return filteredProducts.slice().sort((a, b) => b.price - a.price);
        case 'nameAsc':
          return filteredProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
        case 'nameDesc':
          return filteredProducts.slice().sort((a, b) => b.name.localeCompare(a.name));
        case 'sortBy':
          return filteredProducts;
        default:
          return filteredProducts;
      }
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await api.getProducts();
        this.products = response.data;
      } catch (error) {
        console.error(error); 
      }
    },
    filterProducts() {
      const input = this.input.trim().toLowerCase();
      
      if (!input) {
        return this.products.slice();
      } else {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(input)
        );
      }
    },
    setSortOption(option) {
      this.sortOption = option;
      switch(option) {
        case 'lowToHigh':
          this.sortLabel = 'Price (low to high)';
          break;
        case 'highToLow':
          this.sortLabel = 'Price (high to low)';
          break;
        case 'nameAsc':
          this.sortLabel = 'Name (A to Z)';
          break;
        case 'nameDesc':
          this.sortLabel = 'Name (Z to A)';
          break;
        case 'sortBy':
        this.sortLabel = 'Sort by';
      }
    }
  },
};
</script>

  <style>
.page-header {
  padding: 20px;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  color: #333;
  font-family: 'Pacifico', cursive;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 60px;
  gap: 60px;
  padding: 0 10px;
  justify-content: flex-start;
} 

.search-sort-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 55%;
  margin-bottom: 20px;
  margin-left: 38%;
}

.search-container {
  flex: 1; 
}

.sort-container {
  margin-left: 20px;
}

.search-input {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  max-width: 400px;
}

.sort-container label {
  font-size: 1rem;
  margin-right: 8px;
}

.sort-container select {
  padding: 6px 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 180px;
}

.dropbtn {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #ddd;
}
</style>