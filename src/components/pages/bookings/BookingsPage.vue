<template>
<v-container>
    <page-title :title="pageTitle"></page-title>
    <v-row>
        <v-col>
            <v-card class="pa-4">
                <v-row>
                    <v-col 
                        cols="6"
                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-btn block depressed class="pa-2 my-4" @click="calendayType = 'day'">Day View</v-btn>
                        <v-btn block depressed class="pa-2 my-4" @click="calendayType = 'week'">Week View</v-btn>
                        <v-btn block depressed class="pa-2 my-4" @click="calendayType = 'month'">Month View</v-btn>
                    </v-col>
                    <v-col 
                        cols="6"
                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-date-picker
                            v-model="today"
                            no-title 
                            full-width 
                        ></v-date-picker>
                    </v-col>
                </v-row>
            </v-card>  
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <test-dialog @closeDialog="closeDialog($event)" :dialog="showDialog" :form="clickedEvent"></test-dialog>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card>
                <v-sheet height="400">
                    <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        :event-color="getEventColor"
                        color="primary"
                        :type="calendayType"
                        @click:event="showEvent"
                        @click:more="showMore"
                    >
                    </v-calendar>
                </v-sheet>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
const TestDialog = () => import('./dialogs/BookingDialog.vue');

  export default {
      components: {
          TestDialog
      },
    data: () => ({
        pageTitle: 'Bookings',
        showDialog: false,
        calendayType: 'week',
        today: new Date().toISOString().substr(0, 10),
        events: [
            {
                name: 'DXM-19-0807-0001',
                start: '2019-10-22 09:00',
                end: '2019-10-22 11:00',
                color: 'blue'
            },
            {
                name: 'DXM-19-0807-0002',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0003',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0004',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0005',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0006',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0007',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0008',
                start: '2019-10-23 09:00',
                end: ''
            },
            {
                name: 'DXM-19-0807-0009',
                start: '2019-10-25 12:30',
                end: ''
            },
        ],
        clickedEvent: {}
 
    }),
    methods: {
        showEvent (event) {
            this.showDialog = true;
            event.jo_number = 'DXM-19-0807-0061';
            this.clickedEvent = event
        },
        showMore(event) {
            console.log({event})    
            this.today = event.date;
            this.calendayType = 'day';
        },
        closeDialog(event) {
            this.showDialog = !event;
        },
        getEventColor(event) {
            if(!event.color) {
                return 'red';
            }

            return event.color;
        }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
  }
</script>