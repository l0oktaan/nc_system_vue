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
        <div class="corrective">
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
                            <v-col cols="6" class="col-value">{{nc.status}}</v-col>
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
                        <v-row>
                            <v-col cols="12" class="text-center"> 
                                <v-btn class="primary">บันทึก</v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="approve" v-else>
                        <!-- <v-row >
                            <v-col cols="12">บันทึกติดตามผลการปฏิบัติการเพื่อดำเนินการแก้ไข</v-col>
                        </v-row> -->
                        <v-row justify="start" class="row-detail"> 
                            <v-col cols="5" class="col-name">สถานะ :</v-col>
                            <v-col cols="6" class="col-value">{{nc.status}}</v-col>
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
                        <v-row>
                            <v-col cols="12" class="text-center"> 
                                <v-btn class="primary">บันทึก</v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    
                </v-tab-item>
            </v-tabs> 

        </div>
        <div class="approve">
            <v-row justify="start" class="row-detail">
                <!-- <v-col cols="5" class="col-name">รายละเอียดการแก้ไข :</v-col>
                <v-col cols="6" class="col-value">{{item.detail}}</v-col> -->
            </v-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id','status'],
    data: ()=>({
        levels: [],
        nc: null
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
    methods:{
        async fetchData(){
            
            try {
                this.levels = await this.$store.getters.nc_levels
                let path = await `http://localhost:5000/api/non_conformances/${this.id}`
                let res = await axios.get(`${path}`)
                this.nc = await res.data
                    
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
    border-bottom: 1px solid #ddd;
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
</style>