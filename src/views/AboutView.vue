<template>
  <div class="list">        
    <!-- <tr>
      <td>1</td>
      <td class="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ratione, suscipit exercitationem neque vel sapiente quia voluptatibus! Unde dolores architecto nemo omnis qui quas tempore culpa itaque asperiores neque?</td> 
      <td>tools</td>
    </tr> -->
    <div class="item">
      <div class="order">1</div>
      <div class="name">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam repellat magni placeat vel esse enim natus aliquid, sapiente velit nam possimus atque officiis, distinctio aspernatur reprehenderit, soluta quibusdam corrupti. Doloremque?</div>
    </div>
    <div class="tools">Tools</div>
  </div>
</template>
<script>
export default{
  props:['nc'],
  data: ()=> ({

  })
}
</script>
<style scoped>
.list{
  
  display: flex;
  flex-direction: row;
  background: #fff;
  color: #000;
  width: 100%;
 
  
}
.list .item{
  display: flex;
  flex-direction: row;
}
.list .name{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  
  /* white-space: nowrap; */
  /* overflow: hidden;
  text-overflow: ellipsis; */
}
.list .item .name{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  
  /* white-space: nowrap; */
  /* overflow: hidden;
  text-overflow: ellipsis; */
}
.list .item .order{
  flex: 0 0 40px;
  width: 40px;  
  border: 1px solid #000;
}
.list .tools{
  display: flex;
  flex-direction: row;
  
  
}
.list .tools .tool{
  flex: 0 0 80px;
  width: 80px;
  border: 1px solid #000;
}
</style>