<template>
    <div class="nc_detail">
        <v-form ref="form" @submit.prevent="submit" class="frm">
            <v-row>
                <v-col cols="2"></v-col>
                <v-col>
                    <h3>ข้อมูลความไม่สอดคล้องที่ตรวจพบ</h3>
                </v-col>
                <v-col cols="2" style="text-align: right;">
                    <button class="close" @click="close"><i class="fas fa-times "></i></button>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">ลำดับที่ :</v-col>
                <v-col cols="4" class="col-value">1</v-col>
            </v-row> 
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">ระดับ :</v-col>
                <v-col cols="4" class="col-value">
                    <v-select
                        :items="levels"                        
                        outlined
                        dense
                    ></v-select>
                </v-col>
            </v-row>  
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">หัวข้อความไม่สอดคล้อง :</v-col>
                <v-col cols="6" class="col-value">
                    <v-textarea                        
                        auto-grow
                        outlined
                        rows="3"
                        row-height="30"
                    ></v-textarea>
                </v-col>
            </v-row>           
            <v-row justify="start" class="row-detail">
                <v-col cols="5" class="col-name">สาเหตุ :</v-col>
                <v-col cols="6" class="col-value">
                    <v-textarea                        
                        auto-grow
                        outlined
                        rows="3"
                        row-height="15"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail select">
                <v-col cols="5" class="col-name">แนวทางแก้ไข :</v-col>
                <v-col cols="6" class="col-value">
                    <v-text-field                        
                        auto-grow
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-plus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail list">
                <v-col cols="5" class="col-name"></v-col>
                <v-col cols="6" class="col-value">
                    <div class="corrective">
                        1 สาเหตุ
                    </div>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-minus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail select">
                <v-col cols="5" class="col-name">หมายเลขข้อกำหนด :</v-col>
                <v-col cols="6" class="col-value">
                    <v-text-field                        
                        auto-grow
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-plus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail list">
                <v-col cols="5" class="col-name"></v-col>
                <v-col cols="6" class="col-value">
                    <div class="corrective">
                        A.12.6.1 Management of Technical Vulnerabilities
                    </div>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-minus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail select">
                <v-col cols="5" class="col-name">กลุ่มงานที่รับผิดชอบ :</v-col>
                <v-col cols="6" class="col-value">
                    <v-text-field                        
                        auto-grow
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-plus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="start" class="row-detail list">
                <v-col cols="5" class="col-name"></v-col>
                <v-col cols="6" class="col-value">
                    <div class="corrective">
                        กลุ่มงานรักษาความปลอดภัยด้านสารสนเทศ
                    </div>
                </v-col>
                <v-col cols="1" class="text-left">
                    <v-btn depressed
                        color="primary">
                        <i class="fas fa-minus"></i>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="text-center"> 
                    <v-btn type="submit" class="primary">บันทึก</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    props: ['id','status'],
    data: ()=>({
        levels: [
            {value: 1,text: 'Major'},
            {value: 2,text: 'Minor'},
            {value: 3,text: 'Observe'},
            {value: 4,text: 'OFI'},
        ],
        nc: {}
    }),
    methods:{
        submit(){
            this.$emit("hideEdit");
        },
        close(){
            console.log("close");
            this.$emit("hideEdit");
        }
    }
}
</script>

<style scoped>
.nc_detail{
    width: 100%;    
    height: 100vh;
    display: flex;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    justify-content: flex-start;
    flex-direction: column;
    align-items: top;
    padding: 10px;
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
.frm > .row-detail:nth-of-type(2) {
    border-top: 1px solid #ddd;
}

.row-detail {
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #ddd;
}
.row-detail.select {
    border-bottom: 0;
}
.row-detail.list{
    border-top: 0;
}
.row-detail .col-name{
    text-align: right;
}
.row-detail .col-value{
    text-align: left;
}
.corrective{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px;
}
</style>