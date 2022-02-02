<template>
<div class="topbar">
	<!-- <div class="logo">
		<img src="../assets/SI.png">
	</div> -->
	<div class="title"><span class="sys">Sys</span><span class="invest">Invest</span></div>
	<div class="right">
	<div class="notification">
		<i class="fa fa-bell" aria-hidden="true"></i>
	</div>
	<div class="logout">
		<i class="fa fa-power-off"  @click="logOut" aria-hidden="true"></i>
	</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return{
		}
	},
	methods:{
		logOut(){
			if(confirm("Voulez vous vraiment vous deconnecter?")){
				localStorage.removeItem("user")
				window.location = "/"
			}
		}
	}
}
</script>
<style scoped>
.logo img{
	height:auto;
}
.right{
	display:flex;
	justify-content:space-evenly;
	flex-direction:row;
}
.notification{
	font-size:30px;
	margin-right:80px;
}
.logout{
	font-size:30px;
	margin-right:15px;
	color:red;
}
.topbar{
	border-bottom: 2px solid gray;
	box-shadow: 0px 1px 5px gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
}
.title{
	display: inline-block;
	font-family: "Arial";
	font-weight:bold;
	margin-left:30px;
	font-size:50px;
	text-align:center;
}
.sys{
	font-weight:normal;
}
</style>
