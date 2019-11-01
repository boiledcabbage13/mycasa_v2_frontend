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
                        :loading="loading"
                        :headers="headers"
                        :items="items"
                        class="elevation-1"
                        disable-sort
                        :options.sync="options"
                        :server-items-length="totalItems"
                    >
                        <template v-slot:item.action="{ item }">
                            <create-dialog :button="editDialog.button" title="Edit Service" :form="item" :formId="item.id"></create-dialog>
                        </template>
                    </v-data-table>
                </v-card>  
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar.show"
            :timeout="snackbar.timeout"
            :color="snackbar.color"
        >
            {{ snackbar.text }}
            <v-btn
                :color="snackbar.button.color"
                text
                @click="snackbar.show = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";

const serviceRepository = RepositoryFactory.get("service");

const CreateDialog = () => import('./dialogs/CreateDialog.vue') 

export default {
    components: {
        CreateDialog
    },
    data: () => ({
        pageTitle: 'Services',
        search: '',
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Price', value: 'price' },
          { text: 'Category', value: 'category' },
          { text: 'Action', value: 'action' },
        ],
        items: [],
        editDialog:{
            button:{
                isIcon: true,
                icon: 'mdi-pencil'
            }
        },
        snackbar: {
			show: false,
			timeout: 2000,
			text: '',
			color: 'success',
			button: {
				color: 'black'
			}
        },
        loading: false,
        totalItems: 0,
        options: {
            itemsPerPage: 5
        }
    }),
    watch: {
        options: {
            handler () {
                this.getData();
            },
            deep: true
        }
    }, 
    methods: {
        async getData(){
            this.loading = await true;

            let limit = await this.setRequestLimit(this.options.itemsPerPage);

            await serviceRepository.get({limit: limit, page: this.options.page})
            .then(response => {
                let {data : { data : items } } = response;

                this.totalItems = response.data.total;

                this.items = items;
            })
            .catch(error => {
                console.log({error})
            });
            
            this.loading = await false;
        },
        setRequestLimit(limit) {
            if(limit <= 0) {
                return this.totalItems;
            }

            return limit;
        }
    },
    mounted(){
        EventBus.$on('loadData', (snackbarText) => {
            this.snackbar = {
                show: true,
                timeout: 2000,
                text: snackbarText,
                color: 'success',
                button: {
                    color: 'black'
                }
            };

            this.getData();
        });
    }
}
</script>