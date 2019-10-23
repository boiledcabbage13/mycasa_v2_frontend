<template>
    <v-select
        v-bind="$attrs"
        :items="items"
    ></v-select>
</template>

<script>
export default {
    data:() => ({
        items: [
            'TBS',
            'Scheduled',
            'Pending',
            'Assessed'
        ]
    })
}
</script>