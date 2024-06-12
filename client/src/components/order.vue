<template>
    <tr>
      <td>#{{ order.id }}</td>
      <td class="date">{{ formattedOrderDate }}</td>
      <td class="status">{{ order.status }}</td>
      <td>{{ order.totalPrice }} ₪</td>
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
</style>