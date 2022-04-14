<template>
    <div class="nc_cover">
        <div class="detail">
            <div class="order">
                <span>{{nc.order}}</span>
            </div>
            <div class="name">
                <span>{{nc.name}}</span>
            </div>
            <div class="level">
                <span>{{nc.level}}</span>
            </div>
            <div class="group">
                <p v-for="item in nc.correctives" :key="item.id">{{item.group_id}}</p>
            </div>
            <div class="status">
                {{nc.status}}
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
                        @click=showDetail()
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
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
        >
            <nc-detail
               :id="nc.id"
               status="edit"
            >
            </nc-detail>
        </v-dialog>
    </div>
</template>

<script>
import NCDetail from '@/components/NCDetail.vue'
export default {
    components:{
        'nc-detail' : NCDetail
    },
    props: ['nc'],
    data: ()=> ({
        dialog: false,
    }),
    methods:{
        showDetail(){
            console.log("Show");
            this.dialog = true;
        }
    }
}
</script>

<style scoped>
.nc_cover{
    width: 100%;        
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;   
    padding: 10px; 
    
}
.nc_cover .detail{    
    flex:1;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;   
    padding: 10px; 
    min-height: 150px;
    margin-right: 5px;
}
.nc_cover .detail .order{
    width: 50px;
    font-size: 2em;
    font-weight: 800;
    
}
.nc_cover .detail .name{
    flex:3;
    max-width: 650px;
    text-align: left;
}
.nc_cover .detail .level{
    width: 80px;
}
.nc_cover .detail .group{
    width: 80px;
}
.nc_cover .detail .status{
    width: 80px;
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
    background: #e0e0e0;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 10px;
    /* border: solid 0.5px #2c3e50; */
    transition: 0.4s;
    margin-left: 5px;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
}

.tools .tool.menu{
    position: absolute;
    top: 0;
    z-index:1005;    

}
.tools:hover .tool.edit{
    top: 55px;
    box-shadow: 2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff;
}
.tools:hover .tool.del{
    top: 110px;
    box-shadow: 2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff;
}

.tools .tool.edit{
    position: absolute;
    top:0;
    z-index:1004;
    

}
.tools .tool.del{
    position: absolute;
    top:0;
    /* border: solid 0.5px #830000; */
    color:#830000;
    z-index:1004;
    
}
.tools .tool.del:hover{
    background: #830000;
    color: #fff;
    
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
.tools .tool.edit:hover{
    color: #fff;
    background: #2c3e50;
    box-shadow: 2px 2px 2px #bebebe,
                -2px -2px 2px #ffffff;
    transform: translateX(1px);
    transform: translateY(1px);
}
</style>