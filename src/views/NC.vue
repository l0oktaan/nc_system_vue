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
                @ncEdit="ncEdit"
                @ncUpdate="ncUpdate"
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
            <!-- <nc-detail
               :id="nc_id"
               :status="nc_status"
               @hideDetail="hideDetail"
            >
            </nc-detail> -->
            <nc-edit
               :id="nc_id"
               :status="nc_status"
               @hideEdit="hideEdit"
               
            >
            </nc-edit>
        </v-dialog>
        <v-dialog
            v-model="dialogUpdate"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
        >
            <!-- <nc-detail
               :id="nc_id"
               :status="nc_status"
               @hideDetail="hideDetail"
            >
            </nc-detail> -->
            <nc-update
               :id="nc_id"
               :status="nc_status"
               @hideUpdate="hideUpdate"
               
            >
            </nc-update>
        </v-dialog>
    </div>
</template>

<script>
// import NCDetail from '@/components/NCDetail.vue'
import axios from 'axios'
import NCEdit from '@/components/NCEdit.vue'
import NCUpdate from '@/components/NCUpdate.vue'
import NCCover from '@/components/NCCover.vue'
export default {
    components:{
        'nc-cover' : NCCover,
        // 'nc-detail' : NCDetail,
        'nc-edit' : NCEdit,
        'nc-update' : NCUpdate,
    },
    data: ()=>({
        years: [
            '2564',
            '2563'
        ],
        dialog: false,
        dialogUpdate: false,
        nc_id: 0,
        nc_status: 'new',
        nc_list:[],        
    }),
    mounted(){
        this.fetchData();
    },
    methods: {
        async fetchData(){
            try {
                let path = await `/api/non_conformances`
                let res = await axios.get(`${path}`)
                this.nc_list = res.data
            } catch (error) {
                console.log('error :' + error)
            }
            

        },
        async ncEdit(res){            
            this.nc_id = await res.id;
            this.nc_status = await res.status;
            this.dialog = await true;
        },
        async ncUpdate(res){            
            this.nc_id = await res.id;
            this.nc_status = await res.status;
            this.dialogUpdate = await true;
        },
        async hideEdit(){            
            this.nc_id = await 0;
            this.nc_status = await 'new';
            this.dialog = await false;
        },
        async hideUpdate(){            
            this.nc_id = await 0;
            this.nc_status = await 'new';
            this.dialogUpdate = await false;
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
.content .header h3{
    font-weight: 300;
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