
<template>
  <div class="dialog" v-if="show === true" @click.stop="closeDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
        default: false
      }

    },

    methods: {
      closeDialog () {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;

  backdrop-filter: blur(3px);
}

.dialog__content {
  margin: auto;
  background: #ffce5d;
}


</style>