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
                            <v-btn class="app-button--primary">View</v-btn>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>

            <v-col
                cols="12"
                class="col-sm-12 col-md-12 col-lg-6 col-xl-6"
            >
                <v-card>
                    <v-row 
                        class="pb-3"
                    >
                        <v-col 
                            align="center"
                            justify="center"
                        >
                            <v-btn
                                class="app-button--primary"
                                @click="previousMonth"
                            >
                                <v-icon dark>mdi-chevron-left</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col 
                            align="center"
                            justify="center"
                            @click="calendarType = 'month'"
                        >
                            <p class="text--bold text__title -size -nowrap" style="cursor:pointer"> {{ now | getCurrentMonthText }} </p>
                        </v-col>
                        <v-col 
                            align="center"
                            justify="center"
                        >
                            <v-btn
                                class="app-button--primary"
                                @click="nextMonth"
                            >
                                <v-icon dark>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-sheet height="400">
                        <v-calendar
                            v-model="now"
                            ref="calendar"
                            :now="now"
                            :events="events"
                            :event-color="getEventColor"
                            color="primary"
                            :type="calendarType"
                            @change="updateRange"
                            @click:more="showEventDay"
                            event-more-text="test"
                            event-name="test"
                        >
                        </v-calendar>
                    </v-sheet>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        pageTitle: 'Dashboard',
        headers: [
          { text: 'Client', value: 'client' },
          { text: 'Vehicle', value: 'vehicle' },
          { text: 'Schedule', value: 'schedule' },
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
        now: new Date().toISOString().substr(0, 10),
        calendarType: 'month',
        events:[
            {
                test:'<span class="delete-class">EDRICH</span>',
                name:'edrich',
                start: '2019-10-22 09:00',
                color: 'blue'
            },
            // {
            //     name:'',
            //     start: '2019-10-22',
            //     color: 'red'
            // },
            // {
            //     name:'',
            //     start: '2019-10-22',
            //     color: 'pink'
            // },
        ],
        arrayEvents: null,
    }),
    filters: {
        getCurrentMonthText(value) {
            if(value) {
                let date = new Date(value)
                let monthNumber = date.getMonth();
                let year = date.getFullYear();
    
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];

                return `${monthNames[monthNumber]}, ${year}`;
            }

            return null;
        }
    },
    methods: {
        async testAxios() {
            const data = await Repository.get('/test');
            console.log({data})
        },
        getEventColor(event) {
            if(!event.color) {
                return 'red';
            }

            return event.color;
        },
        nextMonth(){
            this.$refs.calendar.next()
        },
        previousMonth(){
            this.$refs.calendar.prev()
        },
        updateRange ({ start, end }) {
            console.log({ start, end });
            // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
            // this.start = start
            // this.end = end

        },
        showEventDay(event){
            this.now = event.date;
            this.calendarType = 'day';
        }
    },
    destroyed(){
        //defaultState();
    },
    mounted() {
        // this.testAxios();

        EventBus.$off('passFilterDate');
        EventBus.$on('passFilterDate', (data)=> {
            console.log({data}, 'dashboard')
        });

        this.arrayEvents = [
            '2019-10-22',
            '2019-10-21',
            '2019-10-13',
        ]
    }
}
</script>