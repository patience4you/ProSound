<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>

export default {
  name: 'my-input',

  props: {
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  font-weight: 600;
  color: #A1A1A1;

  width: 300px;
  padding: 10px 15px;
  font-size: 20px;

  background-color: #48484B;
  border: 0;
  border-radius: 10px;
}

.input.empty {
  outline: 2px solid #df5151;
}

.input.empty:focus {
  outline: 2px solid #df5151;
}

.input:hover {
  outline: 1px solid #DFB751;
}

.input:focus {
  outline: 2px solid #DFB751;
}

.input::placeholder  {
  color: #868686;
}

</style>