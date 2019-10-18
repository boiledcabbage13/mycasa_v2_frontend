<template>
    <v-card class="card-custom">
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
                    <v-col cols="12"><span class="sub-header --size --black">Accounts</span></v-col>
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
                    <v-col cols="12"><span class="sub-header --size --black">Branch & Position</span></v-col>
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
            <v-btn color="primary" :disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
const GenderSelectBox = () => import('../../../miscellaneous/selects/GenderSelectBox.vue');

export default {
    components: {
        GenderSelectBox
    },
    data: () => ({
        valid: true,
        // form:{},
        requiredRules: [
            v => !!v || 'This field  is required',
        ]
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
        form: {
            type: Object,
            required: true
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                console.log(this.form)
                this.dialog = false;
                this.$emit(this.eventName, this.dialog);
            }
        },
        closeDialog() {
            this.dialog = false;
            this.$emit(this.eventName, this.dialog);
        }
    },
    mounted(){
        if(!this.form.birthdate) {
            this.form.birthdate = new Date().toISOString().substr(0,10);
        }
    }
}
</script>