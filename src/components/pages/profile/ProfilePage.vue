<template>
    <v-card class="card-custom ma-4">
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-row>
                    <v-col cols="12"><span class="sub-header --size --black">Information</span></v-col>
                    <v-divider></v-divider>
                </v-row>
                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-text-field v-model="form.fullname" label="Full Name" required :rules="requiredRules"></v-text-field>
                    </v-col>
                    
                    <!-- <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.firstName" label="First Name" required :rules="requiredRules"></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.lastName" label="Last Name" required :rules="requiredRules"></v-text-field>
                    </v-col> -->

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <gender-select-box
                            v-model="form.gender"
                            label="Gender"
                            required 
                            :rules="requiredRules"
                        >
                        </gender-select-box>
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        Birthdate
                        <v-date-picker 
                            v-model="form.birthdate" 
                            no-title full-width 
                            :max="new Date().toISOString().substr(0,10)"
                        ></v-date-picker>
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                            <v-text-field v-model="form.email" label="Email" required :rules="requiredRules"></v-text-field>
                    </v-col>
                         
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.contactNumber" label="Contact Number" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.position" label="Position" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.branch" label="Branch" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.address" label="Address" required :rules="requiredRules"></v-text-field> 
                    </v-col>  
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <update-password-dialog></update-password-dialog>
            <confirm-update-profile-dialog class="px-2"></confirm-update-profile-dialog>
            <v-btn class="app-button--primary" :disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";
import Storage from '@/storage.js';

const userRepository = RepositoryFactory.get("user");
let storage = new Storage();

const GenderSelectBox = () => import('../../miscellaneous/selects/GenderSelectBox.vue');
const UpdatePasswordDialog = () => import('./dialogs/UpdatePasswordDialog.vue');
const ConfirmUpdateProfileDialog = () => import('./dialogs/ConfirmUpdateProfileDialog.vue');

export default {
    components: {
        GenderSelectBox,
        UpdatePasswordDialog,
        ConfirmUpdateProfileDialog
    },
    data: () => ({
        title: 'Profile',
        valid: true,
        form:{},
        requiredRules: [
            v => !!v || 'This field  is required',
        ]
    }),
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                console.log(this.form)
            }
        },
        testingUser(){
            this.form = {
                firstName: 'Edrich',
                lastName: 'Bonifacio',
                gender: 'Male',
                birthdate: '1996-08-13',
                email: 'dev@dev.com',
                contactNumber: '09992448669',
                position: 'Developer',
                branch: 'Mandaluyong',
                address: 'Guadalupe',
                password: 'password'
            }
        },
        async getUser() {
            let user = await storage.get('user');
            // console.log({user})
            let { data } = await userRepository.getUsingId(user.id);
            console.log({data});
            console.log(data.information);

            this.form =  {
                fullname: data.information.fullname,
                // lastName: 'Bonifacio',
                gender: data.information.gender,
                birthdate: data.information.birthdate,
                email: data.email,
                contactNumber: data.mobile_number,
                // position: 'Developer',
                branch: data.information.branch.name,
                address: data.information.addresss,
                // password: 'password'
            }
        }
    },
    mounted(){
        // this.testingUser();
        this.getUser()
        // this.form.birthdate = new Date().toISOString().substr(0,10);
    }
}
</script>