<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row class="mx-auto">
            <v-col
                cols="12"
            >
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
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
        pageTitle: 'Bookings',
        search: '',
        headers: [
          { text: '#', value: 'number' },
          { text: 'Client', value: 'client' },
          { text: 'Vehicle', value: 'vehicle' },
          { text: 'Address', value: 'address' },
          { text: 'Services', value: 'services' },
          { text: 'Service Date', value: 'date' },
          { text: 'Service Time', value: 'time' }
        ],
        items: [],
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