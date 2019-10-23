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
                        <v-btn class="app-button--primary">
                            <v-icon>mdi-plus</v-icon>
                            Create New
                        </v-btn>
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
        pageTitle: 'Cost Estimates',
        search: '',
        headers: [
          { text: 'CE#', value: 'ce' },
          { text: 'Services', value: 'services' },
          { text: 'Client', value: 'client' },
          { text: 'Vehicle', value: 'vehicle' },
          { text: 'Price', value: 'price' },
          { text: 'Schedule', value: 'schedule' },
          { text: 'Address', value: 'address' },
          { text: 'Status', value: 'status' },
          { text: 'Action', value: 'action' },
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