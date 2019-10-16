import Vue from 'vue';

Vue.mixin({
    methods: {
        mixins_goToPage(page){
            this.$router.push(page).catch(() => {});
        }
    }
});