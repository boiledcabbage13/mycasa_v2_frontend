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
            <v-btn color="primary" :disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
const YearSelectBox = () => import('../../../miscellaneous/selects/YearSelectBox.vue');

export default {
    components: {
        YearSelectBox
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
            // true = CreateFrom.vue is on v-dialog
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
    }
}
</script>