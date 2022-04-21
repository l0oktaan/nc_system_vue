<template>
    <div class="content">
        <div class="header">
            <h3>รายงานความไม่สอดคล้อง (Non-Conformity)</h3>
            
            <div class="tools">                        
                <div 
                    v-for="(year,index) in years" :key="index"
                    class="tool"
                    color="primary"
                                                
                >
                    {{year}}
                </div>
                    
                <v-tooltip top >
                    <template v-slot:activator="{ on, attrs }">                        
                        <div 
                            class="tool menu"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"                            
                        >
                        <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </template>
                    <span>อื่น ๆ</span>
                </v-tooltip>               
            </div>
        </div>
        <div class="nc_list">
            <nc-cover v-for="(item,index) in nc_list" :key="index" 
                :nc="item"
                @showDetail="showDetail"
                
            >
            </nc-cover>
        </div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
        >
            <nc-detail
               :id="nc_id"
               :status="nc_status"
               @hideDetail="hideDetail"
            >
            </nc-detail>
        </v-dialog>
    </div>
</template>

<script>
import NCDetail from '@/components/NCDetail.vue'
import NCCover from '@/components/NCCover.vue'
export default {
    components:{
        'nc-cover' : NCCover,
        'nc-detail' : NCDetail
    },
    data: ()=>({
        years: [
            '2564',
            '2563'
        ],
        dialog: false,
        nc_id: 0,
        nc_status: 'new',
        nc_list:[]
    }),
    mounted(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            this.nc_list.push(
                {
                    id:1,
                    order:1,
                    name:"จากการตรวจสอบการทดสอบช่องโหว่ พบว่ายังไม่ได้ดำเนินการปิดช่องโหว่ และไม่ได้กำหนดนโยบายการปฏิบัติงานเพื่อปิดช่องโหว่ ซึ่งมีความเสี่ยงที่อยู่ในระดับต่าง ๆ",
                    level:"major",
                    correctives:[
                        {
                            id: 1,
                            group_id: "SECD",
                            status: 0
                        },
                        {
                            id: 2,
                            group_id: "SDG2",
                            status: 1
                        },
                    ],
                    status: 0
                },
                {
                    id:2,
                    order:2,
                    name:"จากการตรวจสอบการจัดทำสัญญารักษาความลับ (NDA) พบว่า การจัดทำสัญญารักษาความลับไม่ครบถ้วน ได้แก่ 1) เจ้าหน้าที่บริษัท โปรเฟสชั่นนัล คอมพิวเตอร์ จำกัด ตามสัญญาเลขที่ 70/2563 และสัญญาเลขที่ 33/2564 2) เจ้าหน้าที่บริษัท ซีดีจี ซิสเต็มท์ จำกัด ตามสัญญาเลขที่ 54/2564",
                    level:"minor",
                    correctives:[
                        {
                            id: 1,
                            group_id: "SECD",
                            status: 0
                        },
                        {
                            id: 2,
                            group_id: "SDG2",
                            status: 1
                        },
                    ],
                    status: 0
                },
                {
                    id:3,
                    order:3,
                    name:"จากการตรวจสอบการจัดทำสัญญารักษาความลับ (NDA) พบว่า การจัดทำสัญญารักษาความลับไม่ครบถ้วน ได้แก่ 1) เจ้าหน้าที่บริษัท โปรเฟสชั่นนัล คอมพิวเตอร์ จำกัด ตามสัญญาเลขที่ 70/2563 และสัญญาเลขที่ 33/2564 2) เจ้าหน้าที่บริษัท ซีดีจี ซิสเต็มท์ จำกัด ตามสัญญาเลขที่ 54/2564",
                    level:"minor",
                    correctives:[
                        {
                            id: 1,
                            group_id: "SECD",
                            status: 0
                        },
                        {
                            id: 2,
                            group_id: "SDG2",
                            status: 1
                        },
                    ],
                    status: 0
                },
                {
                    id:4,
                    order:4,
                    name:"จากการตรวจสอบการจัดทำสัญญารักษาความลับ (NDA) พบว่า การจัดทำสัญญารักษาความลับไม่ครบถ้วน ได้แก่ 1) เจ้าหน้าที่บริษัท โปรเฟสชั่นนัล คอมพิวเตอร์ จำกัด ตามสัญญาเลขที่ 70/2563 และสัญญาเลขที่ 33/2564 2) เจ้าหน้าที่บริษัท ซีดีจี ซิสเต็มท์ จำกัด ตามสัญญาเลขที่ 54/2564",
                    level:"minor",
                    correctives:[
                        {
                            id: 1,
                            group_id: "SECD",
                            status: 0
                        },
                        {
                            id: 2,
                            group_id: "SDG2",
                            status: 1
                        },
                    ],
                    status: 0
                },
            )
        },
        async showDetail(res){
            
            this.nc_id = await res.id;
            this.nc_status = await res.status;
            this.dialog = await true;
        },
        async hideDetail(){
            console.log("closed");
            this.nc_id = await 0;
            this.nc_status = await 'new';
            this.dialog = await false;
        }
    },
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
.tools .tool:hover{
    color: #fff;
    background: #2c3e50;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
.tools .tool.menu{
    border: solid 0.5px #830000;
    color:#830000;
}
.tools .tool.menu:hover{
    background: #830000;
    color: #fff;
}
.content .nc_list{

}
.v-dialog__content.v-dialog__content--active{
    z-index:1006!important;
}
</style>