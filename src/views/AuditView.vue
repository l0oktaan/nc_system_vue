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
                <result-year :item="item" @show_audit_form="show_audit_form"></result-year>
            </div>
            
             
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
        },
        show_audit_form(res){
            console.log(res.id)
            this.dialog = true
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
.tools .tool{
    display: flex;
    justify-content:center;
    align-items: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 10px;
    /* border: solid 0.5px #bebebe; */
    transition: 0.1s;
    margin-left: 5px;
    box-shadow: 2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff;
}

.tools .tool:hover{
    color: #fff;
    background: #043711;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
.content .detail{
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 100vh;
    
}
/* .content .detail .audit{
    
    
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
} */
@media (max-width:800px){
    .content .detail{
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
        height: 100vh;
        
    }
}
</style>