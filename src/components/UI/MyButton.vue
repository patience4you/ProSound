<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'my-button'
}

</script>

<style scoped>

.btn {
  width: 150px;
  height: 55px;

  font-weight: 700;

  background-color: #DFB751;
  color: #131313;
  border: none;
  border-radius: 45px;
  cursor: pointer;

  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ffd979;
}

</style>