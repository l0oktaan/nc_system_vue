<template>
<div class="nav">    
    <div class="logo">
        <img src="@/assets/logo.png" alt="">        
        <h2>NC System<br><small>ระบบติดตามความไม่สอดคล้อง จากการตรวจสอบภายใน</small></h2>         
    </div>
    <div class="nav2">      
        <div class="menu-mini">
            <i class="icon ion-md-menu"></i>
        </div>  
        <div class="user">
            <i class="icon ion-md-contact"></i>
            <h3>{{user.name}}</h3>
        </div>
        
    </div>
</div>  
</template>

<script>
export default {
    data: () => ({
        user : {
            'name' : 'User Name'
        }
    })
}
</script>

<style scoped>

.nav{        
    height: 100px;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    margin: 20px;
    
    padding: 30px;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  5px 5px 10px #bebebe,
                -5px -5px 10px #ffffff;   
}

.nav .logo{
    display: flex;
    justify-content: center;
    align-items: center;        
            
}
.nav .logo img{
    padding-right: 20px;
}    
.nav .logo h2{
    font-weight: 400;
    text-align: left;
}
.nav .logo h2 small{
    font-family: 200;
    /* font-size: 0.8em; */
}

.nav2{
    display: flex;
    justify-content: center;
    align-items: center;      
}
.nav2 .menu-mini{
    display: none;
    font-size: 2em;
    padding: 10px;
    transition: 0.25s;
}
.user{
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    padding-left: 10px;
    padding-right: 15px;
    transition: 0.25s;
}
.user .ion-md-contact{
    font-size: 2em;
    padding: 10px;
    transition: 0.25s;
}
.user h3{
    font-weight: 200;
    transition: 0.25s;
}
.user:hover{
    
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: inset 5px 5px 10px #bebebe,
                inset -5px -5px 10px #ffffff;
}
@media (max-width:800px){
    .nav{
        flex-direction: column;
        height: 150px;
        padding: 20px 10px;
    }
    
    .menu-mini{
        display: block;
    }
    .logo img{
    }
    /* .logo :nth-child(1) {order:1}
    .logo :nth-child(2) {order:2} */
    .nav .logo h2{
        text-align: center;
        /* font-size: 0.95em; */
    }
    .nav2{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    .nav2 .menu-mini{            
        display: block;
        font-size: 1.5em;
    }
    .user{
        padding-right: 10px;
    }
    .user h3{
        display: none;
    }
}
@media (max-width:600px){
    
    .logo img{
        width: 65px;
    }
    .logo h2{
        /* text-align: center; */
        font-size: 0.98em;
    }
}
</style>