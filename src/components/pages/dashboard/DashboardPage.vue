<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row>
            <v-col>
                <date-range-dialog></date-range-dialog>
            </v-col>
        </v-row>
        <v-row :class="[breakpoints.row.margin]">
            <v-col 
                :class="[breakpoints.column.spacing, breakpoints.column.size, breakpoints.row.margin]"
            >
                <v-card>
                    <v-card-title>{{total.sales}} TOTAL SALES</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row :class="[breakpoints.row.margin]">
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                    <v-card-title>{{total.estimates}} ESTIMATES</v-card-title>
                </v-card>
            </v-col>
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                    <v-card-title>{{total.users}} USERS</v-card-title>
                </v-card>
            </v-col>
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                    <v-card-title>{{total.closed_job_orders}} CLOSED JOB ORDERS</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row :class="[breakpoints.row.margin]">
            <v-col
                :class="[breakpoints.column.size]"
            >
                <v-card>
                    <v-card-title>
                        Open Job Orders
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :items-per-page="5"
                        class="elevation-1"
                        disable-sort
                    ></v-data-table>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

const defaultState = () => {
    return {
        pageTitle: 'Dashboard',
        headers: [
          { text: 'CE#', value: 'ce' },
          { text: 'Schedule', value: 'schedule' },
          { text: 'Client', value: 'client' },
          { text: 'Service', value: 'service' },
          { text: 'Vehicle', value: 'vehicle' },
          { text: 'Price', value: 'price' },
          { text: 'Address', value: 'address' },
          { text: 'Technician', value: 'technician' },
          { text: 'PO', value: 'po' },
          { text: 'Action', value: 'action' },
        ],
        items: [],
        total: {
            users: 0,
            sales: 0,
            estimates: 0,
            closed_job_orders: 0,
        },
        breakpoints: {
            column: {
                size: 'col-12',
                spacing: 'col-sm-12 col-md-4 col-lg-4 col-xl-4'
            },
            row: {
                margin: 'mx-auto'
            }
        }
    }
}

//for testing purpose only
export default {
    data: defaultState,
    destroyed(){
        //defaultState();
    },
    mounted() {
        EventBus.$off('passFilterDate');
        EventBus.$on('passFilterDate', (data)=> {
            console.log({data}, 'dashboard')
        });
    }
}
</script>