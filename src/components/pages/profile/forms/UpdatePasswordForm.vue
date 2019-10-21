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
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-text-field v-model="form.currentPassword" label="Current Password" type="password" required :rules="requiredRules"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-text-field v-model="form.newPassword" label="New Password" type="password" required :rules="requiredRules"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    >
                        <v-text-field v-model="form.retypePassword" label="Retype Password" type="password" required :rules="requiredRules"></v-text-field>
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
            default: 'Update Password'
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
            default: () => {
                return {}
            }
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                let checkPass = this.checkPassword();

                if(checkPass){
                    console.log(this.form)
                    this.dialog = false;
                    this.$emit(this.eventName, this.dialog);
                } else {
                    alert('Check Password');
                }
            }
        },
        checkPassword(){
            let password = this.form.password;
            let currentPassword = this.form.currentPassword;
            let retypePassword = this.form.retypePassword;
            let newPassword = this.form.newPassword;

            if( (password === currentPassword) && (retypePassword === newPassword) ){
                return true;
            }

            return false;
        },
        closeDialog() {
            this.dialog = false;
            this.$emit(this.eventName, this.dialog);
        }
    }
}
</script>