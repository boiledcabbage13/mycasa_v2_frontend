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
        >   
            <confirm-update-profile-form @closeDialog="closeDialog($event)"></confirm-update-profile-form>
        </v-dialog>
    </div>
</template>

<script>
const ConfirmUpdateProfileForm = () => import('../forms/ConfirmUpdateProfileForm.vue')
export default {
    components: {
        ConfirmUpdateProfileForm
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
                    name: 'Update Profile',
                    color: 'warning',
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