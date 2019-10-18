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
                                <create-dialog></create-dialog>
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
                            <create-dialog :button="editDialog.button" title="Edit Product" :form="item"></create-dialog>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
    </template>

<script>
const CreateDialog = () => import('./dialogs/CreateDialog.vue')

export default {
    components: {
        CreateDialog
    },
    data: () => ({
        pageTitle: 'Technicians',
        search: '',
        headers: [
            { text: 'E-mail', value: 'email' },
            { text: 'First Name', value: 'firstName' },
            { text: 'Last Name', value: 'lastName' },
            { text: 'Contact Number', value: 'contactNumber' },
            { text: 'Address', value: 'address' },
            { text: 'Branch', value: 'branch' },
            { text: 'Gender', value: 'gender' },
            { text: 'Birthdate', value: 'birthdate' },
            { text: 'Action', value: 'action' }
        ],
        items: [
            {
                email: 'technician@tech.com',
                firstName: 'Tech',
                lastName: 'Nician',
                contactNumber: '8-7000',
                address: 'Guadalupe',
                branch: 'Mandaluyong',
                gender: 'Female',
                birthdate: '2018-12-25',
                password: 'test',
                position: 'Lead Mechanic'
            }
        ],
        editDialog:{
            button:{
                isIcon: true,
                icon: 'mdi-pencil'
            }
        }
    })
}
</script>