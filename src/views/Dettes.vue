<template>
    <div class="home">
        <div id="tabs" class="container">
            <div class="tabsdettes">
                <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Les Prêts</a>
                <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Les Emprunts</a>
            </div>
            <div class="content">
                <Pret v-if="activetab === 1" class="tabcontent"/>
                <Emprunt v-if="activetab === 2" class="tabcontent" />
            </div>
        </div>
    </div>
</template>
<script>
import Pret from '../components/Prets.vue'
import Emprunt from '../components/Emprunts.vue'

export default {
    components: {
        Pret,Emprunt
    },
    data() {
        return {
            activetab: 1,
        }
    },
}
</script>
<style>
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.container {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
}

/* Style the tabs */
.tabsdettes {
    overflow: hidden;
     margin-left: 75px;
    margin-bottom: -2px;
    margin-top: 10px;
}

.tabsdettes a {
    width: 45%;
    height:40px;
    float: left;
    text-align:center;
    font-size: 20px;
    color: #000;
    cursor: pointer;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    text-decoration: none;
}

.tabsdettes a:last-child {
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabsdettes a:hover {
    background-color: #fff;
    color: #000;
}

/* Styling for active tab */
.tabsdettes a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    height: 100%;
    width: 100%;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
}
.content{
    width:100%;
    
}
</style>