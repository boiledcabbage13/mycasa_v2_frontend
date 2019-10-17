<template>
    <div :key="componentKey">
        <v-btn
            :color="button.color"
            dark
            @click.stop="showDialog()"
        >
            <v-icon v-if="button.icon">{{button.icon}}</v-icon>
            {{ button.name }}
        </v-btn>

        <v-dialog
            v-model="dialog"
            persistent
            scrollable 
        >
            <partner-operators-form @closeDialogPartnerOperators="closeDialog($event)"></partner-operators-form>
        </v-dialog>
    </div>
</template>

<script>
const PartnerOperatorsForm = () => import('../forms/CreatePartnerOperatorsForm.vue')
export default {
    components: {
        PartnerOperatorsForm
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
                    name: 'Create New',
                    color: 'primary',
                    icon: 'mdi-plus'
                }
            }
        },
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