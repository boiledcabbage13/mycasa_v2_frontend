<template>
<div class="app">
    <app-side-bar></app-side-bar>
    <v-app-bar
        dark
        app
        clipped-left
        class="theme"
    >
        <v-app-bar-nav-icon @click.stop="toggleNavigationDrawer(!showDrawer)"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <v-img 
                :src="require('../../../assets/logo/mycasalogo.png')" 
                contain 
                height="50" 
                position="left"
            />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="mixins_goToPage('/profile')">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon @click="mixins_goToPage('/')">
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
        showDrawer: false,
        appName: "MyCasa"
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