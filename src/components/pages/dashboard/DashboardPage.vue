<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row :class="[breakpoints.row.margin]">
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                        <v-row class="pa-2 text--bold text--wrap">
                            <v-col cols="6">
                                PENDING CONCERNS
                            </v-col>
                            <v-col cols="6" class="text-right">
                                {{total.estimates}}
                            </v-col>
                        </v-row>
                </v-card>
            </v-col>
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                        <v-row class="pa-2 text--bold text--wrap">
                            <v-col cols="6">
                                OPEN JOB ORDERS
                            </v-col>
                            <v-col cols="6" class="text-right">
                                {{total.users}}
                            </v-col>
                        </v-row>
                </v-card>
            </v-col>
            <v-col
                :class="[breakpoints.column.spacing, breakpoints.column.size]"
            >
                <v-card>
                        <v-row class="pa-2 text--bold text--wrap">
                            <v-col cols="6">
                                CLOSED JOB ORDERS
                            </v-col>
                            <v-col cols="6" class="text-right">
                                {{total.closed_job_orders}}
                            </v-col>
                        </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row :class="[breakpoints.row.margin]">
            <v-col
                cols="12"
                class="col-sm-12 col-md-12 col-lg-6 col-xl-6"
            >
                <v-card>
                    <v-card-title>
                        Bookings For Today
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :items-per-page="5"
                        class="elevation-1"
                        disable-sort
                    >
                        <template v-slot:item.action="{ item }">
                            <v-btn color="primary">View</v-btn>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>

            <v-col
                cols="12"
                class="col-sm-12 col-md-12 col-lg-6 col-xl-6"
            >
                <v-card>
                    <v-date-picker
                        v-model="date1"
                        no-title 
                        full-width 
                        :events="arrayEvents"
                        event-color="green lighten-1"
                    ></v-date-picker>
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
        //   { text: 'CE#', value: 'ce' },
          { text: 'Client', value: 'client' },
        //   { text: 'Service', value: 'service' },
          { text: 'Vehicle', value: 'vehicle' },
          { text: 'Schedule', value: 'schedule' },
        //   { text: 'Price', value: 'price' },
        //   { text: 'Address', value: 'address' },
        //   { text: 'Technician', value: 'technician' },
        //   { text: 'PO', value: 'po' },
          { text: 'Action', value: 'action' },
        ],
        items: [
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
            {client: 'Fourello', vehicle: '123QWE', schedule: '08:00 AM'},
        ],
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
        },
        date1: new Date().toISOString().substr(0, 10),
        arrayEvents: null
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

        console.log(this.date1)

        this.arrayEvents = [
            '2019-10-22',
            '2019-10-21',
            '2019-10-13',
        ]

        // this.arrayEvents = [...Array(6)].map(() => {
        //     const day = Math.floor(Math.random() * 30)
        //     const d = new Date()
        //     d.setDate(day)
        //     return d.toISOString().substr(0, 10)
        // })
    }
}
</script>