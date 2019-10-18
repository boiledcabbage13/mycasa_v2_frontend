<template>
    <v-container >
        <page-title :title="pageTitle"></page-title>
        <v-row class="mx-auto">
            <v-col
                cols="12"
            >
                <v-card>
                    <v-card-title>
                        <v-row class="align-center">
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
                                <v-row class="justify-end pa-2">
                                    <create-dialog></create-dialog>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :items-per-page="5"
                        class="elevation-1"
                        disable-sort
                    >
                        <template v-slot:item.action="{ item }">
                            <create-dialog :button="editDialog.button" title="Edit Partner Operator" :form="item"></create-dialog>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
const CreateDialog = () => import('./dialogs/CreateDialog.vue');

const defaultState = () => {
    return {
        pageTitle: 'Partners',
        search: '',
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'lastName' },
          { text: 'Position', value: 'position' },
          { text: 'E-mail', value: 'email' },
          { text: 'Contact Number', value: 'contactNumber' },
          { text: 'Branch', value: 'branch' },
          { text: 'Date Created', value: 'dateCreated' },
          { text: 'Actions', value: 'action' },
        ],
        items: [
            {
                id: '1',
                firstName: 'Edrich',
                lastName: 'Bonifacio',
                position: 'Developer',
                email: 'dev@dev.com',
                contactNumber: '0999222499',
                branch: 'Mandaluyong',
                dateCreated: '2019-10-18',
                gender: 'Male',
                address: 'Mandaluyong',
                password: 'test',
                birthdate: '2019-08-13'
            }
        ],
        editDialog:{
            button:{
                isIcon: true,
                icon: 'mdi-pencil'
            }
        }
    }
}

//for testing purpose only
export default {
    components: {
        CreateDialog
    },
    data: defaultState,
    destroyed(){
        //defaultState();
    }
}
</script>