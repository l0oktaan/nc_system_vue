<template>
    <div class="menu">    
        <router-link to="/" class="list">
            <div class="list-icon">
                <i class="icon ion-md-stats"></i>
            </div>                
            <h4>Dashboard</h4>
        </router-link>
        
         <router-link to="audit" class="list">
            <div class="list-icon">
                <i class="icon ion-md-eye"></i>
            </div>                
            <h4>การตรวจสอบภายใน</h4>
        </router-link>
         <router-link to="nc" class="list">
            <div class="list-icon">
                <i class="icon ion-md-paper"></i>
            </div>                
            <h4>รายการ NC</h4>
        </router-link>        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.menu{
    list-style: none;
    
    
}

.list{
    display: flex;
    justify-content: left;
    align-items:center;
    flex-direction: row;
    cursor: pointer; 
    padding: 10px 20px 10px 20px;   
    margin-top: 5px;    
    width: 100%;
    transition: 0.25s;
    text-decoration: none;
    color: black;
}
.list .list-icon{
    width: 50px;
    height: 50px;
    font-size: 2.2em;
    display: flex;
    justify-content: center;
    align-items: center;        
    border-radius: 50%;
    background: #e0e0e0;
    box-shadow:  2px 2px 5px #bebebe,
                -2px -2px 5px #ffffff; 
}
.list h4{
    font-size: 1.2em;
    margin-left: 20px;
    font-weight: 400;
}
.list:hover{
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px #bebebe,
                inset -2px -2px 2px #ffffff; 
}
.router-link-exact-active{
    border-radius: 10px;
    box-shadow: inset 2px 2px 5px #bebebe,
                inset -2px -2px 5px #ffffff;
    color: #145396;
}
</style>