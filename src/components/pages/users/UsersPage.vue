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
import { RepositoryFactory } from "@/repositories/repositoryFactory";

const userRepository = RepositoryFactory.get("user");

export default {
    data: () => ({
        pageTitle: 'Users',
        search: '',
        headers: [
          { text: 'E-mail', value: 'email' },
          { text: 'Full Name', value: 'fullname' },
          { text: 'Contact Number', value: 'contact_number' },
          { text: 'Address', value: 'address' },
          { text: 'Gender', value: 'gender' },
          { text: 'Birthdate', value: 'birthdate' },
        ],
        items: [],
    }),
    methods: {
        getData(){
            userRepository.get();
            userRepository.create({id:1});
            userRepository.update({id:1}, 1);
            userRepository.getUsingId(1);
            userRepository.getAll();
        }
    },
    mounted(){
        this.getData();
    }
   
}
</script>