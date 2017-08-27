<template>
  <div id="app">
    <div class="parallax">
        <div class="uk-position-center uk-text-center">
          <img src="./assets/ashkan.jpg" class="profile-image" />
          <h2>ashkan dehbashi</h2>
          <h5><label>dhs.ashkan@gmail.com |</label><label> Tehran |</label><label> Front-end Developer</label></h5>
          <a><i class="fa fa-github" aria-hidden="true"></i></a>
          <a><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
    </div>
    <div style="width: 70%; position: relative; left: 12%">
      <div class="padding">
        <h3>projects</h3>
        <router-link v-bind:to="'/about'">
          <span class="view-icons" uk-icon="icon: grid"></span>
        </router-link>
        <router-link v-bind:to="'/'">
          <span class="view-icons" uk-icon="icon: list"></span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    components: {Hello},
    name: 'app'
  }
</script>
<style>
  .parallax {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/background.jpg');
    position: relative;
    height: 450px;
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .profile-image{
    width: 150px;
    border: 5px solid #fff;
    border-radius: 50%;
  }
  h2{
    font-family: 'Ubuntu', sans-serif !important;
    color: #fff;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 10px;
    text-transform: capitalize;
  }
  h5{
    font-family: 'Ubuntu', sans-serif !important;
    color: rgba(255,255,255,0.8);
    font-weight: 100;
    letter-spacing: 1px;
    margin: 20px;
  }
  .fa{
    color: rgba(255,255,255,0.7);
    padding: 10px;
    font-size: 32px;
  }
  .fa:hover{
    color: rgba(255,255,255,1);
  }
  .padding{
    padding: 25px;
  }
  h3{
    font-family: 'Ubuntu', sans-serif !important;
    color: #333;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 20px;
    text-transform: capitalize;
    display: inline-block;
    float: left;
  }
  .view-icons{
    float: right;
    margin: 10px;
    padding: 10px;
    border-radius: 50%;
    background: transparent;
    color: #333;
  }
  .view-icons:hover{
    background: rgba(0,0,0,0.2);
  }
  .view-icons:active{
    background: rgba(0,0,0,0.4);
  }
</style>
