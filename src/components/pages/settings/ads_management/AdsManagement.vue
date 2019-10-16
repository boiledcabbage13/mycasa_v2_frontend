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
                        <v-btn color="primary">
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
        pageTitle: 'Ads Management',
        search: '',
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Image', value: 'image' },
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