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
                        <v-text-field v-model="form.name" label="Name" required :rules="requiredRules"></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <year-select-box
                            v-model="form.year"
                            label="Year"
                            required 
                            :rules="requiredRules"
                        >
                        </year-select-box>
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.brand" label="Brand" required :rules="requiredRules"></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                            <v-text-field v-model="form.model" label="Model" required :rules="requiredRules"></v-text-field>
                    </v-col>
                         
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.make" label="Make" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.price" label="Price" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.body" label="Body" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <!-- should be select box -->
                        <v-text-field v-model="form.category" label="Category" required :rules="requiredRules"></v-text-field> 
                    </v-col>  

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    >
                        <v-text-field v-model="form.code" label="Code" required :rules="requiredRules"></v-text-field> 
                    </v-col>

                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-textarea v-model="form.description" label="Description" required :rules="requiredRules"></v-textarea> 
                    </v-col>  
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="formInDialog" text color="error" @click="closeDialog()">Close</v-btn>
            <v-btn class="app-button--primary":disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";

const productRepository = RepositoryFactory.get("product");

const YearSelectBox = () => import('../../../miscellaneous/selects/YearSelectBox.vue');

export default {
    components: {
        YearSelectBox
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
            // true = CreateFrom.vue is on v-dialog
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
            await productRepository.create(this.form)
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
            await productRepository.update(this.form, this.formId)
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
                let {data} = await productRepository.getUsingId(this.formId);
                console.log({data})

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