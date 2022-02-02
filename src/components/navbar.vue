<template>
<div class="navbar nonprintable">
	<div class="menus">
		<router-link to="/">
			<button class="menu">
				<i class="fa fa-tachometer" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/vehicules">
			<button class="menu">
				<i class="fa fa-car" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/motos">
			<button class="menu">
				<i class="fa fa-motorcycle" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/credits">
			<button class="menu">
				<i class="fa fa-credit-card" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/parcelle">
			<button class="menu">
				<i class="fa fa-object-group" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/investotres">
			<button class="menu">
				<i class="fa fa-shopping-basket" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/income">
			<button class="menu">
				<i class="fa fa-arrow-right" aria-hidden="true"></i>
			</button>	
		</router-link>
		<router-link to="/outcome">
			<button class="menu">
				<i class="fa fa-arrow-left" aria-hidden="true"></i>
			</button>
		</router-link>
		<router-link to="/dettes">
			<button class="menu">
				<i class="fa fa-info-circle" aria-hidden="true"></i>
			</button>
		</router-link>
	</div>
</div>
</template>
<script></script>
<style scoped>
.navbar{
	height: 100%;
	width: 140px;
	min-width: 30px;
	position: relative;
}
.menus{
	position: absolute;
	margin-top:600px;
	margin-left:20px;
	width: 100%;
}
.menu{
	width:70px;
	text-align: center;
	padding: 5px 0;
	border-radius:10px;
	box-shadow: inset 5em 1em #F1F2F3;
	font-size:1.6em;
}
.menu:hover{ 
	border-bottom: 2px solid #C4CBD2;
	background-color: #C4CBD2;
}
.fa{
	color:#000;
}
@media only screen and (max-width: 520px) {
  .menus {
    display:flex;
    flex-direction: row;
  }
  .menu{
	width:45px;
	text-align: center;
	padding: 0;
	margin-top: 350px;
	border-radius:10px;
	box-shadow: inset 5em 1em #F1F2F3;
	font-size:1.6em;
}
.menu:hover{ 
	border-bottom: 2px solid #C4CBD2;
	background-color: #C4CBD2;
}
.fa{
	color:#000;
}
} 
</style>
