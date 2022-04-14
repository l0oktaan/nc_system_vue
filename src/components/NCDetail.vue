<template>
    <div class="nc_detail">
        {{"NC ID : " + id}}
    </div>
</template>

<script>
export default {
    props: ['id','status'],
    data: ()=>({
        nc: {}
    })
}
</script>

<style scoped>
.nc_detail{
    font-size: 1em;
}
</style>