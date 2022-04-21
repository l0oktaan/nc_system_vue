<template>
    <div class="list">        
        <div class="item">
            <div class="order">{{nc.order}}</div>
            <div class="name"><span>{{nc.name}}</span></div>
        </div>
        <div class="tools">
            <div :class="'level ' + nc.level">
                <span>{{nc.level}}</span>
            </div>
            <div class="group">
                <div v-for="item in nc.correctives" :key="item.id">
                    <i class="far fa-square"></i> {{item.group_id}}
                </div>
            </div>
            <div class="status">{{nc.status}}</div>
            <div class="tool">                
                <i class="fas fa-ellipsis-v"></i>
                
                    <div 
                        class="mytool edit"                        
                        dark                      
                        @click="showDetail"
                    >
                        <i class="fas fa-pen fa-2x" ></i>
                    </div>
                                            
                    <div 
                        class="mytool del"
                        
                        dark                        
                    >
                        <i class="fas fa-trash fa-2x"></i>
                    </div>
                        
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props: ['nc'],
    data: ()=> ({
        dialog: false,
    }),
    methods:{
        showDetail(){
            console.log("Show");
            this.$emit("showDetail",{
                id: this.nc.id,
                status: 'edit'
            });
        }
    }
}
</script>
<style  scoped>
.list{
    
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background: rgba( 255, 255, 255, 0.25 );
    
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    padding: 0px;
    border: 0.25px solid rgba( 255, 255, 255, 0.25 );
    font-weight: 200;
    cursor: pointer;
    transition: 0.1s;


}
.list:hover{
    background: rgba( 255, 255, 255, 0.4 );    
    /* transform: translateY(-1px); */
}
.list .item{
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.list .item .order{
    display: block;
    
    text-align: left;
    flex: 0 0 30px;
}
.list .item .name span{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  font-weight:100;
}

.list .tools{
    display: flex;
    flex-direction: row;
    flex: 0 0 350px;
    justify-content: flex-end;
    
}
.list .tools .level{
    display: flex;
    align-items: center;
}
.list .tools .level span{
    
    border-radius: 5px;
    padding: 3px 5px 3px 5px;
    margin-right: 5px;
}
.list .tools .level.major span{
    background: rgb(211, 5, 5);
    
}
.list .tools .level.minor span{
    background: rgb(236, 108, 3);
    
}
.list .tools .group {
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    align-items: center;
}
.list .tools .group div{
    margin-left: 5px;
    color: #000;
}
.list .tools .status{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 80px;
    text-align: center;
    
}
.list .tools .tool{
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 0.8em;
    width: 15px;
    font-weight:lighter;
    background: rgba(99, 99, 99, 1);
    border-left: 0.25px solid rgba( 255, 255, 255, 0.4 );

    
}
.tool::before{
    content: '';
    position:absolute;
    top:0;
    right: 15px;
    width: 335px;
    height: 100%;
    background: rgba( 255, 255, 255, 0.8 );
    backdrop-filter: blur( 10px );
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
    z-index: 1000;
}
.tool:hover::before{
    transition: transform 0.5s;
    transform: scaleX(1);
    transform-origin: right;
}
.tool .mytool{
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;  
    top:0;
    right: 0;
    opacity: 0;
    transition: 0.2s;
    height: 100%;
    color: rgb(136, 136, 136);
    font-size: 0em;
    z-index: 1001;
}
.tool:hover .mytool.edit{
    position:absolute;
    top: 0;
    right: 30px;
    font-size: 1em;
}
.tool:hover .mytool.del{
    position:absolute;
    top: 0;
    right: 80px;
    font-size: 1em;
}
.tool .mytool:hover{
    color: #000;
}
.tool:hover .mytool{
    opacity: 1;
}
</style>