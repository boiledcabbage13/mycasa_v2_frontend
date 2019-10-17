<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row class="mx-auto">
            <v-col
                cols="12"
            >
                <v-card>
                    <v-card-title>
                        <v-row>
                            <v-col
                                cols="12"
                                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            >
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            >
                                <create-partner-operators-dialog></create-partner-operators-dialog>
                            </v-col>
                        </v-row>
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
const CreatePartnerOperatorsDialog = () => import('./dialogs/CreatePartnerOperatorsDialog.vue');

const defaultState = () => {
    return {
        pageTitle: 'Partners',
        search: '',
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Full Name', value: 'fullname' },
          { text: 'Position', value: 'position' },
          { text: 'E-mail', value: 'email' },
          { text: 'Mobile Number', value: 'mobile_number' },
          { text: 'Branch', value: 'branch' },
          { text: 'Date Created', value: 'date_created' },
        ],
        items: [],
    }
}

//for testing purpose only
export default {
    components: {
        CreatePartnerOperatorsDialog
    },
    data: defaultState,
    destroyed(){
        //defaultState();
    }
}
</script>