<template>
    <button @click="onClick">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'TestButton',
    props: {
        text: {
            default: 'text'
        }
    },
    methods: {
        onClick() {
            this.$log(this.text)
        }
    }
}
</script>