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
                            <create-dialog :button="editDialog.button" title="Edit Ad" :form="item"></create-dialog>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
const CreateDialog = () => import('../ads_management/dialogs/CreateDialog.vue')

export default {
    components: {
        CreateDialog
    },
    data: () => ({
        pageTitle: 'Ads Management',
        search: '',
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Image', value: 'image' },
          { text: 'Action', value: 'action' },
        ],
        items: [
            {
                id: 1,
                image: 'test.jpg'
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