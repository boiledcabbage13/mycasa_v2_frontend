<template>
    <div>
        <app-toolbar></app-toolbar>
        <v-content>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <router-view></router-view>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
const AppToolbar = () => import('./navigation/AppToolbar.vue');

export default {
    components:{
        AppToolbar
    },
    data: () => ({

    }),
    methods:{
        showDrawer(){
            this.drawer = !this.drawer;
        }
    }
}
</script>
