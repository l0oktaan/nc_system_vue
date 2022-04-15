<template>
    <div class="nc_detail">
        <v-form ref="form" @submit.prevent="submit">
            <v-row>
                <v-col cols="2"></v-col>
                <v-col>
                    <h3>ข้อมูลความไม่สอดคล้องที่ตรวจพบ</h3>
                </v-col>
                <v-col cols="2" style="text-align: right;">
                    <button class="close" @click="close"><i class="fas fa-times"></i></button>
                </v-col>
            </v-row>
        
        <div>
             {{"NC ID : " + id}}
        </div>
        </v-form>
    </div>
</template>

<script>
export default {
    props: ['id','status'],
    data: ()=>({
        nc: {}
    }),
    methods:{
        submit(){

        },
        close(){
            console.log("close");
            this.$emit("hideDetail");
        }
    }
}
</script>

<style scoped>
.nc_detail{
    width: 100%;    
    display: flex;
    background-color: rgba(255, 255, 255, 1);
    justify-content: flex-start;
    flex-direction: column;
    align-items: top;
}
.nc_detail h3{
    margin-top: 10px;
}
.close{
    width: 15px;
    font-size: 1.5em;
    transition: 0.5s;
    text-align: right;
    margin-top: 10px;
    margin-right: 20px;
}
.close:hover{
    transform: rotate(90deg);
}
</style>