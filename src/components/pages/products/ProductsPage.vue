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
        pageTitle: 'Products',
        search: '',
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Brand', value: 'brand' },
          { text: 'Price', value: 'price' },
          { text: 'Category', value: 'category' },
          { text: 'Action', value: 'action' },
        ],
        items: [
            {id: 1, name: 'Test', brand: 'Nike', price: 100, category: 'Sample', year: 2009, model: 'MG400', make: 'metal', body: 'mecha', code: '0013', description: 'sample product'}
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