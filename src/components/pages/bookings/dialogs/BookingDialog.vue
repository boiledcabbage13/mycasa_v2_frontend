<template>
    <v-dialog
      v-model="showDialog"
      persistent
      scrollable 
    >
      <v-card class="card-custom">
        <v-card-title class="headline">
            JO# {{ form.jo_number }}
        </v-card-title>
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
              <v-col cols="2" offset="10">
                <status-select-box label="Status"></status-select-box>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.requestDate" label="Request Date" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.vehicle" label="Vehicle" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.user" label="User" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.plateNumber" label="Plate Number" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.branch" label="Branch" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <!-- must be select box -->
                <v-text-field v-model="form.technician " label="Technician" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-text-field v-model="form.serviceLocation " label="Service Location" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <!-- must be select box -->
                <v-text-field v-model="form.serviceSchedule " label="Service Schedule" required :rules="requiredRules"></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                  pull="6"
              >
                <v-text-field v-model="form.value " label="Value" required :rules="requiredRules"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-textarea v-model="form.concerns" label="Concerns" required :rules="requiredRules"></v-textarea>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-textarea v-model="form.assessments" label="Assessments" required :rules="requiredRules"></v-textarea>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
              >
                <v-textarea v-model="form.materials" label="Materials Needed" required :rules="requiredRules"></v-textarea>
              </v-col>
            </v-row>
          </v-form>
            <!-- {{ form }} -->
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="closeDialog()">Close</v-btn>
          <v-btn color="primary" @click="closeDialog()">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
const StatusSelectBox = () => import('../../../miscellaneous/selects/StatusSelectBox.vue')

export default {
    components: {
      StatusSelectBox
    },
    data: () => ({
      valid: true,
      requiredRules: [
        v => !!v || 'This field  is required',
      ],
    }),
    computed: {
      showDialog: {
        get: function() {
          return this.dialog;
        },
        set: function() {
          return false;
        }
      }
    },
    props: {
      dialog: {
          type: Boolean,
          default: false
      },
      form: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    methods: {
      closeDialog() {
        this.showDialog = false;
        this.$emit('closeDialog', this.showDialog);
      }
    }
}
</script>