<template>
    <v-autocomplete
        v-bind="$attrs"
        :items="items"
    ></v-autocomplete>
</template>

<script>
export default {
    data:() => ({
        items: []
    }),
    props: {
        fromYear: {
            type: Number,
            default: 50
        }  
    },
    methods: {
        async setSpanYears(){
            let currentYear = new Date().getFullYear();
            let fromYear = currentYear - this.fromYear;
      
            const years = await this.getYears(fromYear, currentYear);

            this.items = await years;
        },
        getYears(fromYear, currentYear){
            let years = [];

            for (let index = fromYear; index <= currentYear; index++) {
                years.push(index)
            }

            return years.reverse();
        }
    },
    mounted() {
        this.setSpanYears();
    }
}
</script>