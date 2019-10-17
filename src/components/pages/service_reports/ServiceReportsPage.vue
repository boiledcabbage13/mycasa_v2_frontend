<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row>
            <v-col>
                <date-range-dialog></date-range-dialog>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col
                cols="12"
                sm="12"
                md="6"
                lg="8"
                xl="8"
            >
                <v-card>
                    <v-card-title>
                        SERVICE RATING OVERALL AVERAGE
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                                lg="3"
                                xl="3"
                            >
                                <h4>TECHNICAL</h4>
                                <v-icon color="yellow">mdi-star</v-icon>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                                lg="3"
                                xl="3"
                            >
                                <h4>CLEANLINESS</h4>
                                <v-icon color="yellow">mdi-star</v-icon>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                                lg="3"
                                xl="3"
                            >
                                <h4>POLITENESS</h4>
                                <v-icon color="yellow">mdi-star</v-icon>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                                lg="3"
                                xl="3"
                            >
                                <h4>VALUE FOR MONEY</h4>
                                <v-icon color="yellow">mdi-star</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="6"
                lg="4"
                xl="4"
            >
                <v-card>
                    <v-card-title>
                        TOTAL SERVICE DONE
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-icon color="primary">mdi-check-bold</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col
                cols="12"
            >
                <v-card>
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
         <v-row class="mx-auto">
            <v-col
                cols="12"
            >
                <v-card>
                    <v-card-title>Service Report</v-card-title>
                    <v-data-table
                        :headers="serviceReportsHeader"
                        :items="itemsServiceReports"
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
        pageTitle: 'Services',
        headers: [
          { text: 'CE#', value: 'ce' },
          { text: 'Branch', value: 'branch' },
          { text: 'Technical', value: 'technical' },
          { text: 'Cleanliness', value: 'cleanliness' },
          { text: 'Politeness', value: 'politeness' },
          { text: 'Value for Money', value: 'value_for_money' },
          { text: 'Service Done', value: 'service_done' },
        ],
        items: [],
        serviceReportsHeader:[
            { text: '#', value: 'id' },
            { text: 'Client', value: 'client' },
            { text: 'Vehicle', value: 'vehicle' },
            { text: 'Services', value: 'services' },
            { text: 'Date Of Completion', value: 'date_of_completion' },
            { text: 'Next Check Up', value: 'next_check_up' },
            { text: 'Technician', value: 'technician' },
            { text: 'PO', value: 'po' },
            { text: 'Action', value: 'action' },
        ],
        itemsServiceReports:[]
    }
}

//for testing purpose only
export default {
    data: defaultState,
    mounted() {
        EventBus.$off('passFilterDate');
        EventBus.$on('passFilterDate', (data)=> {
            console.log({data}, 'service')
        });
    },
    destroyed(){
        //defaultState();
    }
}
</script>