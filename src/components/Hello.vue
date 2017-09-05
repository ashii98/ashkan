<template>
  <div id="hello">
    <div class="max-width max-max-width" style="width: 70%; left: 25%; position: relative; padding-top: 50px;" uk-scrollspy="target: > div ; cls:uk-animation-scale-up; delay: 100; repeat: false">
      <!--archriver-->
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card max-width" style="width: 90%; left:10%;" uk-grid>
        <div class="max-width" style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504257981/photo_2017-09-01_13-56-01_v41nvm.jpg" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div class="max-width"  style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name}}</h3>
              <p>{{project_info}}</p>
              <hr/>
              <router-link v-bind:to="'/work/ac'">
                <button class="uk-button uk-button-default">
                    read more
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!--psu-->
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card max-width" style="width: 90%; left:10%;" uk-grid>
        <div class="max-width" style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258569/psu-index_nhqpzl.png" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div class="max-width" style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name2}}</h3>
              <p>{{project_info2}}</p>
              <hr/>
              <router-link v-bind:to="'/work/psu'">
                <button class="uk-button uk-button-default">
                  read more
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!--shams-->
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card max-width" style="width: 90%; left:10%;" uk-grid>
        <div class="max-width" style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504259690/index_kufabd.png" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div class="max-width" style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name3}}</h3>
              <p>{{project_info3}}</p>
              <hr/>
              <router-link v-bind:to="'/work/shams'">
                <button class="uk-button uk-button-default">
                  read more
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      project_name: 'archiver',
      project_info: 'archiver is a online arvhiver for student documents, this is the first online arvhiver in iranian collages, and it will launch soon...',
      project_name2: 'pre selected unit',
      project_info2: 'pre selected unit, its a program for managing students selected units for reports.',
      project_name3: 'shams messenger',
      project_info3: 'shams messenger, its a cross platform messenger for iranian collages, this program has been cancelled.'
    }
  }
}
</script>

<style scoped>
  #hello {
    background: transparent;
  }
  .uk-card-title{
    width: 100%;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: oblique;
    padding-left: 2.5%;
  }
  .uk-button{
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    height: 45px;
    border-radius: 3px;
  }
  .uk-button:hover{background: rgba(0,0,0,0.1);}
  .uk-button:active{background: rgba(0,0,0,0.3);}
  .uk-card-title,
  p,
  .uk-button{
    font-family: 'Ubuntu', sans-serif !important;
    text-transform: capitalize;
    display: block;
  }
  p{
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 1.7;
    padding-left: 5%;
  }
  .uk-button{
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    height: 45px;
    border-radius: 3px;
    color: #2196F3;
  }
  .uk-button:hover{background: rgba(0,0,0,0.1);}
  .uk-button:active{background: rgba(0,0,0,0.3);}
  .uk-card-title,
  p,
  .uk-button{
    font-family: 'Ubuntu', sans-serif !important;
    text-transform: capitalize;
    display: block;
  }
  .about-margin-bottom{
    margin-bottom: 80px;
  }
  .about-card{
    position: relative;
    display: inline-block;
    border-radius: 6px;
  }
  .about-card-header{
    position: relative;
    border-radius: 6px;
    margin-left: -80px;
    box-shadow: 0 14px 25px rgba(0,0,0,0.16) !important;
    margin-top: -15px;
  }
  a{text-decoration: none}
  @media screen and (max-width: 699px) {
    .max-width{
      width: 100% !important;
      left: 0 !important;
    }
    .about-card-header{
      margin-left: 0 !important;
      margin-top: -15px;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 800px) {
    .max-max-width{
      width: 90% !important;
      left: 5% !important;
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    .max-max-width{
      width: 80% !important;
      left: 10% !important;
    }
  }
</style>
