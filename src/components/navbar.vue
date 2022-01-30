<template>
<div class="navbar nonprintable">
	<div class="menus">
		<router-link to="/">
			<div class="menu">
				Vehicules
			</div>
		</router-link>
		<router-link to="/ventes">
			<div class="menu">
				Crédits
			</div>
		</router-link>
		<router-link to="/payments">
			<div class="menu">
				Parcelle
			</div>
		</router-link>
		<router-link to="/payments">
			<div class="menu">
				Autres Investissements
			</div>
		</router-link>

		<router-link to="/payments">
			<div class="menu">
				Income
			</div>
		</router-link>
		<router-link to="/payments">
			<div class="menu">
				Outcome
			</div>
		</router-link>
		<router-link to="/payments">
			<div class="menu">
				Dettes
			</div>
		</router-link>
	</div>
</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
.navbar{
	height: 100%;
	width: 120px;
	min-width: 120px;
	position: relative;
	background-color: cadetblue;
}
.menus{
	position: absolute;
	top: 35%;
	width: 100%;
}
.menu{
	color: whitesmoke;
	text-align: center;
	padding: 10px 0;
}
.menu:hover{
	border-bottom: 1px solid white;
	background-color: #fff2;
}
.menu.active{
	background-color: #fff5;
	border-bottom: 2px solid whitesmoke;
}
</style>
