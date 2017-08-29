<template>
  <div id="about">
    <div class="about-margin-top" style="width: 70%; left: 15%; position: relative;" uk-scrollspy="target: > div ; cls:uk-animation-slide-bottom; delay: 200; repeat: false">
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card" uk-grid>
        <div style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="../assets/ac/ac-index.png" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name}}</h3>
              <p>{{project_info}}</p>
              <hr/>
              <button class="uk-button uk-button-default">read more</button>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card" uk-grid>
        <div style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="../assets/psu/psu-index.png" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name2}}</h3>
              <p>{{project_info2}}</p>
              <hr/>
              <button class="uk-button uk-button-default">read more</button>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-card uk-card-default uk-grid-collapse about-margin-bottom about-card" uk-grid>
        <div style="width: 40%;float: left">
          <div class="uk-float-left uk-display-inline-block">
            <div class="uk-card-media-left uk-cover-container about-card-header">
              <img src="../assets/shams/index.png" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
          </div>
        </div>
        <div style="width: 60%;float: left">
          <div class="uk-float-right  uk-display-inline-block">
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{project_name3}}</h3>
              <p>{{project_info3}}</p>
              <hr/>
              <button class="uk-button uk-button-default">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
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
<!-- styling for the component -->
<style>
  #about {
    background: #eee;
  }
  .uk-card-title{
    width: 100%;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: oblique;
  }
  p{
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 1.7;
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
  .about-margin-top{
    padding-top: 150px;
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
    margin-top: -50px;
  }
</style>
