<template>
    <div class="audit">
        <div class="show">  
            <div class="title">
                <b>การตรวจสอบภายในประจำปี {{item.audit_year}} ครั้งที่ {{item.audit_order}} </b>
                <b>({{getThaiDate(item.start_date) + ' - ' + getThaiDate(item.end_date)}})</b>
            </div>                      
            <!-- <v-row>
                <v-col cols="12" md="8"><b>การตรวจสอบภายในประจำปี {{item.audit_year}} ครั้งที่ {{item.audit_order}}</b></v-col>
                <v-col cols="12" md="4"><b>({{getThaiDate(item.start_date) + ' - ' + getThaiDate(item.end_date)}})</b></v-col>
                <v-col cols="1" style="text-align:right"><i class="fas fa-angle-right"></i></v-col>
            </v-row>     -->
            <div class="donut">
                <my-donut :series="nc.num" :labels="nc.label" :ititle="nc.level" v-for="(nc,index) in nc_list" :key="index"></my-donut>
                
            </div>        
        </div>
          
        <div class="tools">
                                   
                    <div 
                        class="tool menu"
                        color="primary"
                        dark
                        
                    >
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
               
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">                        
                    <div 
                        class="tool edit"
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="show_edit"
                    >
                        <i class="fas fa-pen"></i>
                    </div>
                </template>
                <span>แก้ไข</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">                        
                    <div 
                        class="tool nc"
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="show_edit"
                    >
                        <b>NC</b>
                    </div>
                </template>
                <span>NC</span>
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
import MyDonut from '@/components/MyDonut'    
export default{
    components:{
        MyDonut
    },
    props:["item"],
    data:()=> ({
        major: null,
        minor: null,
        obs: null,
        ofi: null,
        nc_list: [
            {label: ['ปิดแล้ว','คงเหลือ'],num: [0,0],level:"Major"},
            {label: ['ปิดแล้ว','คงเหลือ'],num: [1,5],level:"Minor"},
            {label: ['ปิดแล้ว','คงเหลือ'],num: [2,12],level:"Observe"},
            {label: ['ปิดแล้ว','คงเหลือ'],num: [2,9],level:"OFI"},
        ]
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
        show_edit(){
            this.$emit("show_audit_form",{
                id: 1
            });
        }
    }
}
</script>
<style scoped>
.audit{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: top;
    flex-direction: row;
    margin-top: 10px;
}
.audit .show{
    min-height: 50px;
    margin-bottom: 10px;
    margin-right: 10px;
    
    flex:1;
    
    
    /* background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    transition: 0.25s;
}
.audit .show .title{
    text-align: left;
    
}
.audit .show .title b{
    font-size: 0.8em;
    font-weight: 200;
}
.audit .show .donut{
    display: flex;
    justify-content:space-around;
    align-items: top;
    flex-direction: row;
    flex-wrap: wrap;
}
.tools{
    display: flex;
    justify-content:flex-start;
    align-items: top;
    flex-direction: column;
    position: relative;
    width: 55px;
    height: 55px;
}
.tools .tool{
    display: flex;
    justify-content:center;
    align-items: center;
    background: rgba(255,255,255,0.25);
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 10px;
    /* border: solid 0.5px #2c3e50; */
    transition: 0.4s;
    margin-left: 5px;
    /* box-shadow: 2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff; */
}

.tools .tool.menu{
    position: absolute;
    top: 0;
    z-index:1005;    

}
.tools:hover .tool.edit{
    opacity: 1;
    top: 55px
}
.tools:hover .tool.nc{
    opacity: 1;
    top: 107px
}
.tools:hover .tool.del{
    opacity: 1;
    top: 160px
}

.tools .tool.edit{
    opacity: 0;
    position: absolute;
    top:0;
    z-index:1004;
    

}
.tools .tool.nc{
    opacity: 0;
    position: absolute;
    top:0;
    z-index:1004;
    

}
.tools .tool.del{
    opacity: 0;
    position: absolute;
    top:0;
    /* border: solid 0.5px #830000; */
    color:#830000;
    z-index:1004;
    
}
.tools .tool.del:hover{
    background: #830000;
    color: #fff;
    
    /* box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff; */
    transform: translateX(1px);
    transform: translateY(1px);
}
.tools .tool.edit:hover{
    color: #fff;
    background: #2c3e50;
    /* box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff; */
    transform: translateX(1px);
    transform: translateY(1px);
}
.tools .tool.nc:hover{
    color: #fff;
    background: #2c3e50;
    /* box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff; */
    transform: translateX(1px);
    transform: translateY(1px);
}
.audit .data .row{
    margin-top: 0px;
}
.audit .show i:first-of-type{
    font-size: 1.5em;
    text-align: right;
    padding-left: 10px;
    transition: 0.25s;
}
.audit .row .col{
    text-align: left;
}
.audit .show:hover{
    
    /* background: rgba( 255, 255, 255, 0.5 ); */
}
.audit .show.active{
    /* background: #fff;
    box-shadow: inset 2px 2px 2px #bebebe,
                inset -2px -2px 2px #ffffff; */
}
.audit .show.active i:first-of-type{    
    transform: rotate(90deg);
    height: 24px;
}
.audit .show.active .data{
    height: auto;
    display: block;
}
@media (max-width:800px){
    .audit .show .title{
        text-align: center;
        
    }
}
</style>