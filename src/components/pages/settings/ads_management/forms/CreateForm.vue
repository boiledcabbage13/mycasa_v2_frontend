<template>
    <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-file-input label="File input" v-model="form.file" required :rules="requiredRules"></v-file-input>
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
export default {
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
    }
}
</script>