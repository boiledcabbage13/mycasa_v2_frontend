<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row class="mx-auto">
            <v-col 
                class="mx-auto" 
                cols="12"
                sm="12" 
                md="4" 
                lg="4" 
                xl="4"
            >
                <v-card>
                    <v-card-title>{{total.sales}} TOTAL SALES</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col
                cols="12"
                sm="12" 
                md="4" 
                lg="4" 
                xl="4"
            >
                <v-card>
                    <v-card-title>{{total.estimates}} ESTIMATES</v-card-title>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="12" 
                md="4" 
                lg="4" 
                xl="4"
            >
                <v-card>
                    <v-card-title>{{total.users}} USERS</v-card-title>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="12" 
                md="4" 
                lg="4" 
                xl="4"
            >
                <v-card>
                    <v-card-title>{{total.closed_job_orders}} CLOSED JOB ORDERS</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col
                cols="12"
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
        }
    }
}

//for testing purpose only
export default {
    data: defaultState,
    destroyed(){
        //defaultState();
    }
}
</script>