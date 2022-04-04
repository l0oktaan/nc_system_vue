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
    </div>
</template>

<script>
export default {
    data: ()=>({
        years: [
            '2564',
            '2563'
        ]
    })
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
</style>