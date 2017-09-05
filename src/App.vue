<template>
  <div id="app">
      <div class="header uk-box-shadow-large uk-text-center" style="width: 20%; float: left; padding: 30px 0">
        <h2>Ashkan Dehbashi</h2>
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li>
            <router-link v-bind:to="'/ashkan'">
              <span uk-icon="icon: user"></span>
              about
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/work'">
              <span uk-icon="icon: code"></span>
              work
            </router-link>
          </li>
        </ul>
      </div>
      <nav class="uk-navbar uk-navbar-container navbar">
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle navbar-link"  uk-toggle="target: #offcanvas-nav-primary">
            <span uk-navbar-toggle-icon="ratio:1.2"></span>
          </a>
          <router-link v-bind:to="'/'" class="uk-navbar-item uk-logo">Ashkan Dehbashi</router-link>
        </div>
      </nav>
      <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-primary uk-nav-center">
          <h2>Ashkan Dehbashi</h2>
          <li class="uk-active">
            <router-link v-bind:to="'/ashkan'">
              <span uk-icon="icon: user"></span>
              about
            </router-link>
          </li>
          <li class="uk-active">
            <router-link v-bind:to="'/work'">
              <span uk-icon="icon: code"></span>
              work
            </router-link>
          </li>
        </ul>

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
  html, body, #app{
    background: #fafafa;
    height: 100%;
  }
  .header{
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('http://res.cloudinary.com/ashi98/image/upload/v1504257450/photo_2017-09-01_13-47-14_p1rnjq.jpg');
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    background-size: cover;
  }
  h2{
    font-family: 'Ubuntu', sans-serif !important;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    padding-bottom: 5px;
    margin-top: 20px;
    text-transform: capitalize;
  }
  .uk-nav{padding-top: 8px;}
  .uk-nav li a{
    color: #fff;
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 100;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-left: 5px solid transparent;
    padding: 10px 0;
    padding-right: 5px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .uk-nav li a:hover{
    background: rgba(255,255,255,0.2);
    color: #fff;
  }
  .uk-nav li a:focus{
    color: #FF4BA8;
    border-left: 5px solid #FF4BA8;
  }
  .uk-list li a i{
    vertical-align: middle;
    margin-top: -8px;
  }
  .navbar{
    background-color: #fff !important;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  }
  .uk-logo{
    font-weight: bold !important;
  }
  .uk-offcanvas-bar {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('http://res.cloudinary.com/ashi98/image/upload/v1504257450/photo_2017-09-01_13-47-14_p1rnjq.jpg') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 1024px) {
    .header{display: none}
  }
  @media screen and (min-width: 1025px) {
    .navbar{display: none}
  }
</style>
