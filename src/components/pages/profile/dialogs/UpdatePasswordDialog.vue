<template>
    <div :key="componentKey">
        <v-btn
            :icon="button.isIcon"
            :color="button.color"
            @click.stop="showDialog()"
        >
            <v-icon v-if="button.icon">{{button.icon}}</v-icon>
            {{ button.isIcon ? '' : button.name }}
        </v-btn>

        <v-dialog
            v-model="dialog"
            persistent
            scrollable 
            max-width="50%"
        >   
            <update-password-form @closeDialog="closeDialog($event)"></update-password-form>
        </v-dialog>
    </div>
</template>

<script>
const UpdatePasswordForm = () => import('../forms/UpdatePasswordForm.vue')
export default {
    components: {
        UpdatePasswordForm
    },
    data: () => ({
        dialog: false,
        componentKey: 0 //use to re-render component
    }),
    props: {
        button: {
            type: Object,
            default: () => {
                return {
                    name: 'Update Password',
                    color: 'success',
                    // icon: 'mdi-plus',
                    isIcon: false //button will change to icon
                }
            }
        }
    },
    methods: {
        showDialog(){
            this.componentKey++;
            this.dialog = true;
        },
        closeDialog(event){
            this.dialog = event;
        }
    }
}
</script>