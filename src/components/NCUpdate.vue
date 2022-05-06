<template>
    <div class="nc_detail" v-if="nc">  
        <div class="form">
            <v-row justify="start">
                <v-col cols="2"></v-col>
                <v-col>
                    <h3>ข้อมูลความไม่สอดคล้องที่ตรวจพบ</h3>
                </v-col>
                <v-col cols="2" style="text-align: right;">
                    <button class="close" @click="close"><i class="fas fa-times "></i></button>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">ลำดับที่ :</v-col>
                <v-col cols="4" class="col-value">{{nc.order}}</v-col>
            </v-row> 
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">ระดับ :</v-col>
                <v-col cols="4" class="col-value">
                    <div class="level">{{getLevel(nc.level)}}</div>
                </v-col>
            </v-row>  
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">หัวข้อความไม่สอดคล้อง :</v-col>
                <v-col cols="6" class="col-value">
                    {{nc.name}}
                </v-col>
            </v-row>           
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">สาเหตุ :</v-col>
                <v-col cols="6" class="col-value">
                    {{nc.cause}}
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">แนวทางแก้ไข :</v-col>
                <v-col cols="6" class="col-value">
                    <div v-for="(item,index) in nc.corrective" :key="index">{{index+1 + '. ' + item}}</div>
                </v-col>                
            </v-row>
            
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">หมายเลขข้อกำหนด :</v-col>
                <v-col cols="6" class="col-value">
                    <div v-for="(item,index) in nc.annex" :key="index">{{item.no + ' ' + item.name}}</div>
                </v-col>
                
            </v-row>  
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">ดำเนินการให้แล้วเสร็จในวันที่ :</v-col>
                <v-col cols="6" class="col-value">
                    {{nc.due_date}}
                </v-col>
            </v-row>         
        </div>
        <div class="form evedense" v-if="isUser">
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">รายละเอียดการแก้ไข :</v-col>
                <v-col cols="6" class="col-value">
                    <v-textarea
                        outlined                        
                        no-resize
                        rows="3"
                        hide-details="auto"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">เอกสารหลักฐานประกอบการแก้ไข :</v-col>
                <v-col cols="6" class="col-value">
                    <v-file-input                        
                        outlined
                        dense
                        hide-details
                    ></v-file-input>
                    
                </v-col>
                <v-col cols="1">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-plus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name"></v-col>
                <v-col cols="6" class="col-value">
                    <div class="list">
                        File 1
                    </div>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-minus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name"></v-col>
                <v-col cols="6" class="col-value">
                    <v-btn class="primary">บันทึก</v-btn>
                </v-col>
                
            </v-row>
        </div>
        <div class="corrective" v-if="!isUser">
            <v-tabs>
                <v-tab v-for="(item,index) in nc.correctives" :key="index">{{item.group_id}}</v-tab>
                <v-tab>บันทึกการติดตามผล ฯ</v-tab>
                <v-tab-item v-for="(item,index) in nc.correctives" :key="index" class="my-tab-item">
                    <v-row justify="start" class="row-detail">
                        <v-col cols="5" class="col-name">รายละเอียดการแก้ไข :</v-col>
                        <v-col cols="6" class="col-value">{{item.detail}}</v-col>
                    </v-row>
                    <v-row justify="start" class="row-detail">
                        <v-col cols="5" class="col-name">เอกสารหลักฐานประกอบการแก้ไข :</v-col>
                        <v-col cols="6" class="col-value">
                            <div v-for="(ev,index1) in item.evidenses" :key="index1">
                                {{ev.evidense}}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row justify="start" class="row-detail">
                        <v-col cols="5" class="col-name">ผู้รับผิดชอบ :</v-col>
                        <v-col cols="6" class="col-value">{{item.response_by}}</v-col>
                    </v-row>
                    <v-row justify="start" class="row-detail">
                        <v-col cols="5" class="col-name">เมื่อวันที่ :</v-col>
                        <v-col cols="6" class="col-value">{{item.closed_date}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="text-center"> 
                            <v-btn class="warning">ส่งกลับ</v-btn>
                            <v-btn class="primary">บันทึก</v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item>
                    <div class="approve" v-if="nc.status == 1">
                        <!-- <v-row >
                            <v-col cols="12">บันทึกติดตามผลการปฏิบัติการเพื่อดำเนินการแก้ไข</v-col>
                        </v-row> -->
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">สถานะ :</v-col>
                            <v-col cols="6" class="col-value">
                                {{nc.status}}
                            </v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">เมื่อวันที่ :</v-col>
                            <v-col cols="6" class="col-value">{{nc.complete_date}}</v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">เหตุผลอื่น ๆ :</v-col>
                            <v-col cols="6" class="col-value">{{nc.reason}}</v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">รายละเอียด :</v-col>
                            <v-col cols="6" class="col-value">{{nc.accept_detail}}</v-col>
                        </v-row>                        
                    </div>
                    <div class="approve" v-else>
                        <!-- <v-row >
                            <v-col cols="12">บันทึกติดตามผลการปฏิบัติการเพื่อดำเนินการแก้ไข</v-col>
                        </v-row> -->
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">สถานะ :</v-col>
                            <v-col cols="6" class="col-value">
                                <v-checkbox
                                    hide-details="auto"
                                    v-model="ncStatus"
                                    :label="`ดำเนินการเสร็จสิ้น`"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">เมื่อวันที่ :</v-col>
                            <v-col cols="6" class="col-value">
                                <v-dialog
                                        ref="dialog"
                                        v-model="date_menu"
                                        :return-value.sync="nc.complete_date"
                                        persistent
                                        width="290px"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            outlined
                                            dense
                                            v-model="nc.complete_date"                                            
                                            
                                            readonly
                                            hide-details="auto"
                                            v-bind="attrs"
                                            v-on="on"

                                        >
                                            <template v-slot:prepend>
                                                <i class="fas fa-calendar"></i>
                                            </template>
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="nc.complete_date"
                                        locale="th"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="date_menu = false"
                                        >
                                            ยกเลิก
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.dialog.save(nc.complete_date)"
                                        >
                                            ตกลง
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">เหตุผลอื่น ๆ :</v-col>
                            <v-col cols="6" class="col-value">
                                <v-textarea
                                    outlined
                                     v-model="nc.reason"
                                    no-resize
                                    rows="3"
                                    hide-details="auto"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">รายละเอียด :</v-col>
                            <v-col cols="6" class="col-value">
                                <v-textarea
                                    outlined                                   
                                    v-model="nc.accept_detail"
                                    no-resize
                                    rows="3"
                                    hide-details="auto"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="text-center"> 
                                <v-btn class="primary">บันทึก</v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    
                </v-tab-item>
            </v-tabs> 

        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id','status'],
    data: ()=>({
        levels: [],
        nc: null,
        date_menu: false,
        nc_status: 0
    }),
    watch: {
        id(newData){
            
            if (newData == 0){
                this.nc = null
                return
            }
            this.fetchData()
        }
    },
    mounted(){
        this.fetchData();
    },
    computed:{
        ncStatus:{
            get:function(){
                return this.nc_status==1 ? true : false
            },
            set:function(value){
                this.nc_status = value ? 1 : 0 
            }
        },
        isUser() {
            return true;
        }
    },
    methods:{
        async fetchData(){
            
            try {
                this.levels = await this.$store.getters.nc_levels
                let path = await `http://localhost:5000/api/non_conformances/${this.id}`
                let res = await axios.get(`${path}`)
                this.nc = await res.data
                this.nc_status = this.nc.status
                    
            } catch (error) {
                console.log(error)   
            }
            
        },
        getLevel(level){
            return this.levels.filter(x=>x.value==level)[0].text
        },
        submit(){
            this.$emit("hideUpdate");
        },
        close(){
            console.log("close");
            this.$emit("hideUpdate");
        }
    }
}
</script>

<style scoped>
.nc_detail{
    width: 100%;    
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
.nc_detail{
   
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    
}
.form{
    width: 100%;
}
.nc_detail h3{
    margin-top: 10px;
}
.close{
    width: 15px;
    font-size: 1.5em;
    transition: 0.5s;
    text-align: right;
    margin-top: 10px;
    margin-right: 20px;
}
.close:hover{
    transform: rotate(90deg);
}
.frm > .row-detail:nth-of-type(2) {
    /* border-top: 1px solid #ddd; */
}

.row-detail {
    margin-left: 10px;
    margin-right: 10px;
    /* border-bottom: 1px solid #ddd; */
}
.row-detail.select {
    border-bottom: 0;
}
.row-detail.list{
    border-top: 0;
}
.row-detail .col-name{
    text-align: right;
}
.row-detail .col-value{
    text-align: left;
}
.corrective{
    border: 1px solid #ddd;    
    padding: 5px;    
    margin-bottom: 1em;
    width: 70%;
    margin-top: 2em;

}
.my-tab-item{
    margin-top: 10px;
}
.v-tab{
    color: rgb(94, 94, 94)!important;
}
.v-tab.v-tab--active{
    font-weight: 600;
    color: rgb(0, 46, 131)!important;
    
}
.approve{
    width: 100%;
    margin-top: 10px;
}
.v-input--selection-controls{
    margin-top: 0px;
    padding-top: 0px;
}
.evedense .list{
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
}
</style>