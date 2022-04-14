<template>
  <v-app>
    <top-nav></top-nav>
    <div class="content">
      <!-- <div class="menu">
        <main-menu></main-menu>
      </div> -->
      <div class="detail">
        <router-view/>        
      </div>
    </div>
  </v-app>
</template>
<script>
import TopNav from "./components/TopNav.vue"
// import MainMenu from "./components/MainMenu.vue"
export default {
  components: {
    TopNav,
    // MainMenu
  }
  
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  @font-face {
    font-family: "Sarabun";
    src: local("Sarabun"),
    url(@/assets/fonts/Sarabun-Regular.ttf) format("truetype");
  }
#app {
  font-family: Sarabun, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: column;

}
.content{
  display: flex;
  justify-content:flex-start;
  align-items: top;
  flex-direction: row;
  width: 100%;
}
.content .menu{  
  margin-left: 20px;
}
.content .detail{  
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content:flex-start;
  align-items: top;
  flex-grow:1;
  flex-direction: column;
}
@media (max-width:800px) {
		.content .menu{  
			display: none;
		}
    .content .detail{  
      margin-left: 5px;
      margin-right: 5px;
    }
	}
</style>
