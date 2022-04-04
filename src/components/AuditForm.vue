<template>
<div class="audit_form">
    <!-- <div class="toolbar">
        <button @click="close"><i class="fas fa-times"></i></button>
    </div> -->
    <div class="form">
        <div class="detail">
            <v-form ref="form" @submit.prevent="submit">
            <v-row>
                <v-col cols="2"></v-col>
                <v-col>
                    <h3>ข้อมูลการตรวจสอบภายใน</h3>
                </v-col>
                <v-col cols="2" style="text-align: right;">
                    <button type="reset" class="close" @click="close"><i class="fas fa-times"></i></button>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="4" style="text-align: right;">
                    <span class="field">ประจำปี พ.ศ. :</span> 
                </v-col>
                <v-col>
                    <v-text-field
                        ref="year"
                        class="txt"
                        v-model="year"
                        dense
                        label=""
                        placeholder="ปี พ.ศ."
                        maxlength="4"
                        outlined
                        :rules="[rules.required,rules.year]"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" style="text-align: right;">
                    <span class="field">ครั้งที่ :</span> 
                </v-col>
                <v-col>
                    <v-text-field
                        ref="order"
                        class="txt"
                        v-model="order"
                        dense
                        label=""
                        placeholder="ครั้งที่"
                        maxlength="1"
                        outlined
                        :rules="[rules.required]"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" style="text-align: right;">
                    <span class="field">ระหว่างวันที่ :</span> 
                </v-col>
                <v-col>
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="dates"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="dateRangeText"
                            label=""
                            append-outer-icon="mdi-calendar"
                            readonly
                            outlined
                            dense
                            clearable
                            @click:clear="clearDates"
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                            range
                            v-model="dates"
                            scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(dates)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col style="text-align: left;">
                    <button class="submit" type="submit">บันทึก</button>                    
                </v-col>
            </v-row>
        </v-form>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    data:()=>({
        modal: false,
        dates: [null, null],
        year: '',
        order: '',
        rules: {
          required: value => !!value || 'Required.',
          year: value => value.length == 4 || 'Max 4 characters',          
        },
    }),
    computed: {
        dateRangeText: {
            get: function(){
                return this.dates || this.dates.length > 0 ? this.dates.join(' ~ ') : '';
            },
            set: function(newValue){
                if (newValue){
                    return ''
                }
            }
            
        },
    },
    methods:{
        async submit(){
            await Swal.fire({
                icon: 'success',
                title: 'บันทึกข้อมูลสำเร็จ',                
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,                
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            await this.$emit("saveAudit");
        },
        async close(){
            await this.clearData();
            await this.$refs.form.resetValidation();
            await this.$emit("saveAudit");
        },

        clearData(){
            this.year = '';
            this.order = '';
            this.clearDates(); 
            
        },
        
        clearDates(){            
            this.dates=[null,null];
        }
    }
}
</script>

<style scoped>

.field{
    font-weight: bold;
    line-height: 40px;
    text-align: right;
}
.audit_form{
    width: 100%;
    
    display: flex;
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: flex-start;
    flex-direction: column;
    align-items: top;
}
.audit_form .toolbar{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: top;

}
.audit_form .toolbar button{
    margin: 10px 15px;
    font-size: 1.5em;
}
.audit_form .form{

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
}
.audit_form .form .detail{
    background-color: #e0e0e0;
    border: solid 1px #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    width: 580px;
    box-shadow: 5px 5px 5px #bebebe,
                -5px -5px 5px #ffffff;
}
.audit_form .form .detail .txt{
    width: 80px;
}
.close{
    font-size: 1.5em;
    transition: 0.5s;
}
.close:hover{
    transform: rotate(90deg);
}
.submit{
    border: 1px solid #858585;
    
    border-radius: 10px;
    padding: 10px;
    transition: 0.25s;
}
.submit:hover{
    color: #fff;
    background: #2c3e50;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
</style>