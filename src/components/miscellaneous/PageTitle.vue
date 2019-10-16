<template>
    <div class="mb-6">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            default: 'Page Title'
        }
    }
}
</script>