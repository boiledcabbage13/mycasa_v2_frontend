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
            <create-form @closeDialog="closeDialog($event)" :title="title" :form="form"></create-form>
        </v-dialog>
    </div>
</template>

<script>
const CreateForm = () => import('../forms/CreateForm.vue');
export default {
    components: {
        CreateForm
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
                    icon: 'mdi-plus',
                    isIcon: false //button will change to icon
                }
            }
        },
        title: {
            type: String,
            default: 'Create Product'
        },
        form: {
            type: Object,
            default: () => {
                return {}
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