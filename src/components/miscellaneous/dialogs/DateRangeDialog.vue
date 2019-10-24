<template>
    <div :key="componentKey">
        <v-btn
            :color="button.color"
            dark
            @click.stop="showDialog()"
            
        >
            <v-icon v-if="button.icon">{{button.icon}}</v-icon>
            {{ button.name }}
        </v-btn>

        <v-dialog
            v-model="dialog"
            persistent
            scrollable
            max-width="50%"
        >
            <v-card class="card-custom">
                <v-card-title class="headline">{{title}}</v-card-title>
                <v-divider></v-divider>

                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-row>
                                <v-col
                                    cols="6"
                                >
                                    <v-row>
                                        <v-col>
                                            <h3 class="sub-header --black">Presets</h3>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn block depressed class="pa-2" @click="setDate('today')">Today</v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn block depressed class="pa-2" @click="setDate('yesterday')">Yesterday</v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn block depressed class="pa-2" @click="setDate('month')">Last 30 Days</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col
                                    cols="6"
                                >
                                    <v-row>
                                        <v-col>
                                            <v-text-field v-model="dateRangeText" label="Date range" prepend-icon="mdi-calendar" readonly></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-date-picker v-model="dates" range full-width></v-date-picker>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="error"
                        text
                        @click="dialog = false"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                        @click="setDateFilter()"
                        class="app-button--primary"
                    >
                        Apply
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dates: [],
        componentKey: 0 //use to re-render component
    }),
    props: {
        title: {
            type: String,
            default: 'Date Range'
        },
        button: {
            type: Object,
            default: () => {
                return {
                    name: 'Set Date',
                    color: 'primary',
                    icon: 'mdi-calendar'
                }
            }
        },
        eventName: {
            type: String,
            default: 'passFilterDate'
        }
        
    },
    computed: {
        dateRangeText() {
            let arrangeDate = new Date(this.dates[0]) - new Date(this.dates[1]);

            if(arrangeDate > 0)
            {
                this.dates = [this.dates[1], this.dates[0]]
            }

            return this.dates.join(' ~ ')
        }
    },
    methods: {
        async showDialog(){
            this.componentKey++
            this.dates = [new Date().toISOString().substr(0,10), new Date().toISOString().substr(0,10)];
            this.dialog = await true;
        },
        subtractDays(days){
            let date = new Date();
 
            let pastDate = date.getDate() - days;
            date.setDate(pastDate);
            
            return date.toISOString().substr(0,10);
        },
        setDate(interval) {
            let currentDate = new Date().toISOString().substr(0,10);
            switch (interval) {
                case 'yesterday':
                    this.dates = [this.subtractDays(1), currentDate];
                    break;
                case 'month':
                    this.dates = [this.subtractDays(30), currentDate];
                    break;
                default:
                    this.dates = [new Date().toISOString().substr(0,10), currentDate];
                    break;
            }
        },
        async setDateFilter(){
            await EventBus.$emit(this.eventName, this.dates);
            this.dialog = await false;
        }
    }
}
</script>