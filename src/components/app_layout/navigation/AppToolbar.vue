<template>
<div>
    <app-side-bar></app-side-bar>
    <v-app-bar
        color="indigo"
        dark
        app
        clipped-left
    >
        <v-app-bar-nav-icon @click.stop="toggleNavigationDrawer(!showDrawer)"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>

<script>
import {NAVIGATION_DRAWER_EVENT_BUS} from './js/NavigationDrawerEventBus';

const AppSideBar = () => import('./AppSideBar.vue');

export default {
    components: {
        AppSideBar
    },
    data:() => ({
        showDrawer: false
    }),
    methods:{
        async toggleNavigationDrawer(value){
            // console.log({value})
            //this method is for toggling navigation drawer
            this.showDrawer = await !value;

            NAVIGATION_DRAWER_EVENT_BUS.$emit('showNavDrawer', value);

            //this code is use to avoid double clicking to the side bar icon 
            //to toggle the navigation drawer
            this.showDrawer = await !value;
        }
    }
}
</script>