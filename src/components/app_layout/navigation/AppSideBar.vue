<template>
    <v-navigation-drawer
        v-model="showDrawer"
        clipped
        temporary
        app
        class="app"
    >
        <v-list 
            v-for="(item, key) in items"
            :key="key"
            dense
        >
            <v-list-group
                v-if="item.children"
                :prepend-icon="item.icon"
                :value="false"
            >
                <template v-slot:activator>
                    <v-list-item-title>{{item.text}}</v-list-item-title>
                </template>

                <v-list-item
                    v-for="(child, key_child) in item.children"
                    :key="key_child"
                    @click="mixins_goToPage(child.path)"
                >
                    <v-list-item-title>{{child.text}}</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>{{child.icon}}</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>

            <v-list-item 
                v-else
                @click="mixins_goToPage(item.path)"
            >
                <v-list-item-action>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { NAVIGATION_DRAWER_EVENT_BUS } from './js/NavigationDrawerEventBus'


export default {
    data: () => ({
        iconColor: 'warning',
        showDrawer : false,
        items:[
            { icon: 'mdi-view-dashboard-outline', text:'Dashboard', path:'/dashboard', role:''},
            { icon: 'mdi-message-outline', text:'Messages',path:'/messages',role:''},
            { icon: 'mdi-content-paste', text:'Cost Estimates',path:'/cost-estimates',role:'' },
            { icon: 'mdi-account-clock-outline', text:'Job Orders',path:'/bookings' ,role:''},
            { icon: 'mdi-newspaper', text: 'Data Analysis',
                children:[
                    { icon: 'mdi-chart-bar', text: 'Service Reports',path:'/service-reports' },
                    { icon: 'mdi-cash', text: 'Sales',path:'/sales'  },
                    { icon: 'mdi-car-side', text: 'Vehicles',path:'vehicles' },
                ]
            },
            { icon: 'mdi-account-multiple-outline', text:'Users',path:'/users' ,role:'super_admin' },
            { icon: 'mdi-office-building', text:'Partner Operators',path:'/partner-operators',role:'super_admin'},
            { icon: 'mdi-wrench-outline', text:'Technicians',path:'/technicians' ,role:'super_admin' },
            { icon: 'mdi-toolbox-outline', text:'Products',path:'/products' ,role:'super_admin'},
            { icon: 'mdi-tools', text:'Services',path:'/services' ,role:'super_admin'},
            { icon: 'mdi-wallet-membership', text:'Loyalty',path:'/loyalty' ,role:'super_admin'},
            { icon: 'mdi-settings-outline', text:'Settings',
                children:[
                    { icon: 'mdi-google-spreadsheet', text: 'Ads Management', path:'/settings/ads-management'}
                ]
            },
        ]
    }),
    methods:{
        showNavigationDrawer(){
            NAVIGATION_DRAWER_EVENT_BUS.$off('showNavDrawer');
            NAVIGATION_DRAWER_EVENT_BUS.$on('showNavDrawer', (data) => {
                // console.log({data},'shit')
                this.showDrawer = data;
            });
        }
    },
    created(){
        this.showNavigationDrawer();
    }
}
</script>