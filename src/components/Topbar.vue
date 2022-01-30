<template>
<div class="topbar nonprintable">
	<center class="title">
		<h3>SysInvest</h3>
	</center>
	<div class="right">
		<label>Guy Michel</label>
		<button class="logout" @click="logOut">
			Se Deconnecter
		</button>
	</div>
</div>
</template>
<script>
export default {
	methods:{
		logOut(){
			if(confirm("Voulez vous vraiment vous deconnecter?")){
				this.$store.state.user = null
			}
		}
	}
}
</script>
<style scoped>
.title{
	text-align:center;
}
.topbar{
	border-bottom: 2px solid gray;
	box-shadow: 0px 1px 5px gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
}
.logout{
	display: inline-block;
	background-color: red;
}
h3{
	display: inline-block;
	margin-left: 60px;
	font-family: "lucida handwriting";
}
</style>
