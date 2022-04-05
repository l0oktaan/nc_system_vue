<template>
    <div class="content">
        <div class="header">
            <h3>การตรวจสอบภายใน</h3>
            
            <div class="tools">
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">                        
                        <div 
                            class="tool"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            @click="dialog = true"
                        >
                            <i class="fas fa-plus"></i>
                        </div>
                    </template>
                    <span>เพิ่ม</span>
                </v-tooltip>                
            </div>
        </div>
        <div class="detail">
            <div  v-for="item in audits" :key="item.id">                
                <result-year :item="item"></result-year>
            </div>
            <!-- <div :class="selected.includes(item.id) ? 'audit active' : 'audit'" v-for="item in audits" :key="item.id">
                <div class="show"  @click="select_item(item.id)">
                    <v-row>
                        <v-col cols="7"><b>การตรวจสอบภายในประจำปี {{item.audit_year}} ครั้งที่ {{item.audit_order}}</b></v-col>
                        <v-col cols="4"><b>({{getThaiDate(item.start_date) + ' - ' + getThaiDate(item.end_date)}})</b></v-col>
                        <v-col cols="1" style="text-align:right"><i class="fas fa-angle-right"></i></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <my-donut :series="major.num" :labels="major.labels" ititle="Major"></my-donut>
                        </v-col>
                    </v-row>
                    <div class="data">
                        <v-row>
                            <v-col>ระดับ</v-col>
                            <v-col>จำนวน</v-col>
                            <v-col>ดำเนินการแล้ว</v-col>
                            <v-col>คงเหลือ</v-col>
                        </v-row>
                        <v-row v-for="(nc,index) in item.non_conformances" :key="index">
                            <v-col>{{nc.level}}</v-col>
                            <v-col>{{nc.total}}</v-col>
                            <v-col>{{nc.closed}}</v-col>
                            <v-col>{{nc.remain}}</v-col>
                        </v-row>
                    </div>
                </div>
                  
                <div class="tools">
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">                        
                            <div 
                                class="tool"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                <i class="fas fa-pen"></i>
                            </div>
                        </template>
                        <span>แก้ไข</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">                        
                            <div 
                                class="tool del"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                <i class="fas fa-trash"></i>
                            </div>
                        </template>
                        <span>ลบ</span>
                    </v-tooltip>
                    
                </div>              
            </div> -->
             
        </div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
        >
            <audit-form
                @saveAudit = "saveAudit"
            >
            </audit-form>
        </v-dialog>
    </div>
</template>

<script>
import AuditForm from "@/components/AuditForm.vue"

import ResultYear from '@/components/ResultYear'
export default {
    components:{
        AuditForm,
        
        ResultYear
    },
    data: ()=>({
        status: 'new',
        dialog: false,
        selected: [],
        arr_list: [],
        
        audits: [
            {
                id: 1,
                audit_year: '2564',
                audit_order: 1,
                start_date: '2021-12-13',
                end_date: '2021-12-15',
                status: 2,
                non_conformances: [
                    {
                        level: 'Major',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'Minor',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'Observation',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'OFI',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                ]
            },
            {
                id: 2,
                audit_year: '2563',
                audit_order: 1,
                start_date: '2020-12-13',
                end_date: '2020-12-15',
                status: 2,
                non_conformances: [
                    {
                        level: 'Major',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'Minor',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'Observation',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                    {
                        level: 'OFI',
                        total: 0,
                        closed: 0,
                        remain: 0
                    },
                ]
            },
        ],        
    }),
    mounted(){
        this.fetchData();
    },
    methods: {
        fetchData(){

        },
        // filterNC(year){
        //     let list = this.audits.filter(x=>x.audit_year == '2564');
        //     this.major = this.list[0].non_conformances.filter(x=>x.level == 'Major');
        //     this.minor = this.list[0].non_conformances.filter(x=>x.level == 'Minor');
        //     this.obs = this.list[0].non_conformances.filter(x=>x.level == 'obs');
        //     this.major = this.list[0].non_conformances.filter(x=>x.level == 'Major');
        // },
        saveAudit(){
            this.dialog = false
        },
        getThaiDate(item){        
            if (item){
                var locale = window.navigator.userLanguage || window.navigator.language;
                var d = new Date(item);
                return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric'});
            }else{
                return "";
            }
        },
        select_item(id){
            if (this.selected.includes(id)){
                // this.selected.pop(id)
                // let index = this.selected.findIndex(x=>x == id)
                // this.$nextTick(()=>{
                //     this.selected = JSON.parse(JSON.stringify(this.selected.slice(index)))
                // })           
                
                this.selected = this.selected.filter(x=>x !== id);
            }else{
                this.selected.push(id);
            }           
        }
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    display: flex;    
    justify-content: flex-start;
    flex-direction: column;
    align-items: top;
    flex-wrap: wrap;
}
.content .header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 100%;
    /* border-radius: 10px;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff; */
}

.content .detail{
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 100vh;
    
}
.content .detail .audit{
    
    
    display: flex;
    justify-content:space-between;
    align-items: top;
    flex-direction: row;
    cursor: pointer;    
}
.content .detail .audit .show{
    min-height: 50px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    flex:1;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
}
.content .detail .audit .data{
    display: none;
    transition: 0.25s;
    margin-top: 0px;
}
.content .detail .audit .data .row{
    margin-top: 0px;
}
.content .detail .audit .show i:first-of-type{
    font-size: 1.5em;
    text-align: right;
    padding-left: 10px;
    transition: 0.25s;
}
.content .detail .audit .row .col{
    text-align: left;
}
.content .detail .audit .show:hover{
    
    box-shadow: inset 2px 2px 2px #bebebe,
                inset -2px -2px 2px #ffffff;
}
.content .detail .audit.active .show{
    background: #fff;
    box-shadow: inset 2px 2px 2px #bebebe,
                inset -2px -2px 2px #ffffff;
}
.content .detail .audit.active .show i:first-of-type{    
    transform: rotate(90deg);
    height: 24px;
}
.content .detail .audit.active .data{
    height: auto;
    display: block;
}
</style>