<template>
    <v-card class="card-custom" :loading="loading">
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
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.firstName" label="First Name" required :rules="requiredRules"></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.lastName" label="Last Name" required :rules="requiredRules"></v-text-field>
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
                        <v-text-field v-model="form.address" label="Address" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

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
                </v-row>

                <v-row>
                    <v-col cols="12" class="sub-header --size --black">Accounts</v-col>
                    <v-divider></v-divider>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.email" label="E-mail" required :rules="requiredRules"></v-text-field> 
                    </v-col>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.password" label="Password" type="password" required :rules="requiredRules"></v-text-field> 
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="sub-header --size --black">Branch & Specialty</v-col>
                    <v-divider></v-divider>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <!-- Create component that accept just URL and put the return on select box items -->
                        <v-text-field v-model="form.branch" label="Branch" required :rules="requiredRules"></v-text-field> 
                    </v-col>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.position" label="Position" required :rules="requiredRules"></v-text-field> 
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="formInDialog" text color="error" @click="closeDialog()">Close</v-btn>
            <v-btn class="app-button--primary" :disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";

const technicianRepository = RepositoryFactory.get("technician");

const GenderSelectBox = () => import('../../../miscellaneous/selects/GenderSelectBox.vue');

export default {
    components: {
        GenderSelectBox
    },
    data: () => ({
        valid: true,
        form:{},
        requiredRules: [
            v => !!v || 'This field  is required',
        ],
        loading: false
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        formInDialog: {
            // true = CreateForm.vue is on v-dialog
            type: Boolean,
            default: true
        },
        eventName: {
            type: String,
            default: 'closeDialog'
        },
        formId: {
            //check if form is use for create
            //if not formId value should be the id that is used for the request
            type: Number,
            default: 0
        }
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                this.loading = await true;

                let snackbarText = '';

                if(this.formId) {
                    snackbarText = 'Successfully Updated.';

                    await this.update()
                } else {
                    snackbarText = 'Successfully Created.';

                    await this.create();
                }

                this.loading = await false;

                EventBus.$emit('loadData', snackbarText);
            }
        },
        async create() {
            await technicianRepository.create(this.form)
            .then( reponse => {
                // setTimeout( () => {
                    this.closeDialog();
                // }, 1000);
            })
            .catch(error => {
                console.log(error)
            });
        },
        async update() {
            await technicianRepository.update(this.form, this.formId)
            .then( reponse => {
                // setTimeout( () => {
                    this.closeDialog();
                // }, 1000);
            })
            .catch(error => {
                console.log(error)
            });
        },
        closeDialog() {
            this.dialog = false;
            this.$emit(this.eventName, this.dialog);
        },
        async checkEditView() {
            //check if form is used for edit or view
            this.loading = await true;

            if (this.formId) {
                let {data} = await technicianRepository.getUsingId(this.formId);

                this.form = await data;
            } else {
                this.form = {}
            }

            this.loading = await false;
        }
    },
    mounted(){
        this.checkEditView();
    }
}
</script>