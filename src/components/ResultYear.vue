<template>
    <div>
        <div class="show" >
            
            <v-row>
                <v-col cols="7"><b>การตรวจสอบภายในประจำปี {{item.audit_year}} ครั้งที่ {{item.audit_order}}</b></v-col>
                <v-col cols="4"><b>({{getThaiDate(item.start_date) + ' - ' + getThaiDate(item.end_date)}})</b></v-col>
                <v-col cols="1" style="text-align:right"><i class="fas fa-angle-right"></i></v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <!-- <my-donut :series="major.num" :labels="major.labels" ititle="Major"></my-donut> -->
                </v-col>
            </v-row>
            <!-- <div class="data">
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
            </div>-->
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
    </div>
</template>
<script>
// import MyDonut from '@/components/MyDonut'    
export default{
    components:{
        // MyDonut
    },
    props:["item"],
    data:()=> ({
        major: null,
        minor: null,
        obs: null,
        ofi: null,
    }),
    methods: {
        getThaiDate(item){        
            if (item){
                var locale = window.navigator.userLanguage || window.navigator.language;
                var d = new Date(item);
                return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric'});
            }else{
                return "";
            }
        },
    }
}
</script>
<style scoped>
.tools{
    display: flex;
    justify-content:center;
    align-items: top;
    flex-direction: row;
}
.tools .tool{
    display: flex;
    justify-content:center;
    align-items: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 10px;
    border: solid 0.5px #2c3e50;
    transition: 0.1s;
    margin-left: 5px;
}
.tools .tool.del{
    border: solid 0.5px #830000;
    color:#830000;
}
.tools .tool.del:hover{
    background: #830000;
}
.tools .tool:hover{
    color: #fff;
    background: #2c3e50;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
</style>