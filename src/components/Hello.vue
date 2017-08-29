<template>
  <div id="hello">
    <div class="margin-top" style="width: 70%; left: 15%; position: relative;" uk-scrollspy="target: > div > div; cls:uk-animation-slide-bottom; delay: 200; repeat: false">
      <div class="uk-child-width-1-2@m" uk-grid>
        <div class="uk-margin-bottom">
          <div class="uk-card uk-card-default card">
            <div class="uk-card-media-top card-header uk-box-shadow-large">
              <img src="../assets/ac/ac-index.png" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ project_name }}</h3>
              <p>{{project_info}}</p>
              <hr/>
              <button class="uk-button uk-button-default">read more</button>
            </div>
          </div>
        </div>
        <div class="uk-margin-bottom">
          <div class="uk-card uk-card-default card">
            <div class="uk-card-media-top card-header uk-box-shadow-large">
              <img src="../assets/psu/psu-index.png" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ project_name2 }}</h3>
              <p>{{project_info2}}</p>
              <hr/>
              <button class="uk-button uk-button-default">read more</button>
            </div>
          </div>
        </div>
        <div class="uk-margin-bottom">
          <div class="uk-card uk-card-default card">
            <div class="uk-card-media-top card-header uk-box-shadow-large">
              <img src="../assets/shams/index.png" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ project_name3 }}</h3>
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
    background: #eee;
  }
  .margin-top{
    margin-top: 150px;
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
  .card{
    position: relative;
    display: inline-block;
    border-radius: 6px;
  }
  .card-header{
    position: relative;
    overflow: hidden;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -50px;
    border-radius: 6px;
  }
  p{
    padding-left: 5%;
  }
</style>
