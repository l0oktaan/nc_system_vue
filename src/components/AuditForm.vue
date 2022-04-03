<template>
<div class="audit_form">
    <div class="toolbar">
        <button @click="saveAudit"><i class="fas fa-times"></i></button>
    </div>
    
</div>
</template>

<script>
export default {
    data:()=>({

    }),
    methods:{
        saveAudit(){
            this.$emit("saveAudit");
        }
    }
}
</script>

<style scoped>
.audit_form{
    width: 100%;
    display: flex;
    background-color: #e0e0e0;
    justify-content: flex-start;
    flex-direction: column;
    align-items: top;
}
.audit_form .toolbar{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: top;

}
.audit_form .toolbar button{
    margin: 10px 15px;
    font-size: 1.5em;
}
</style>