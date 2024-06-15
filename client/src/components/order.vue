<template>
    <tr>
      <td>#{{ order.id }}</td>
      <td class="date">{{ formattedOrderDate }}</td>
      <td class="status">{{ order.status }}</td>
      <td>{{ order.totalPrice }} ₪ <span class="products">for {{  orderLength }} product<span v-if="orderLength>1">s</span></span></td>
    </tr>
  </template>
  
  <script>
  export default {
    name: 'Order',
    props: {
      order: {
        type: Object,
        required: true,
      },
    },
    computed: {
      formattedOrderDate() {
        return new Date(this.order.orderDate).toLocaleDateString();
      },
      orderLength() {
        return this.order.products ? this.order.products.length : 0;
      }
    },
  };
  </script>
<style scoped>
.date {
  color: grey;
}

.status {
  color: grey;
}

.products {
  color: grey;
  font-size: 0.9rem;
  margin-right: 0;
  margin-left: 5px
}
</style>