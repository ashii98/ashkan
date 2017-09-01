<template>
  <div id="ac">
    <div style="width: 60%; float: left; position: relative; left: 30%" uk-scrollspy="target: > div ; cls:uk-animation-slide-bottom; delay: 100; repeat: false">
      <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <h5>
          <span uk-icon="icon: tag"></span>
          project name
        </h5>
        <h4>{{project_name}}</h4>
        <hr/>
        <h5>
          <span uk-icon="icon: cog"></span>
          project tools
        </h5>
        <h4>{{project_tools}}</h4>
        <hr/>
        <h5>
          <span uk-icon="icon:  info"></span>
          project info
        </h5>
        <h4>{{project_info}}</h4>
        <div class="uk-text-center">
          <a href="http://178.252.166.163:33395/" target="_blank" class="view-button uk-button green-bg">View Site</a>
        </div>
      </div>
      <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <div class="uk-h3">{{project_name}} photos</div>
        <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
          <div>
            <a class="uk-inline" href="http://res.cloudinary.com/ashi98/image/upload/v1504258569/psu-index_nhqpzl.png" caption="Index page">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258569/psu-index_nhqpzl.png" class="uk-border-rounded box-shadow" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" href="http://res.cloudinary.com/ashi98/image/upload/v1504258581/psu-st-panel_kxjtou.png" caption="student panel">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258581/psu-st-panel_kxjtou.png" class="uk-border-rounded box-shadow" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" href="http://res.cloudinary.com/ashi98/image/upload/v1504258554/psu-ad_xiaysz.png" caption="Admin login">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258554/psu-ad_xiaysz.png" class="uk-border-rounded box-shadow" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" href="http://res.cloudinary.com/ashi98/image/upload/v1504258569/psu-ad-panel_zr9g9o.png" caption="Admin Panel">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258569/psu-ad-panel_zr9g9o.png" class="uk-border-rounded box-shadow" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" href="http://res.cloudinary.com/ashi98/image/upload/v1504258558/photo_2017-09-01_14-05-34_oky3b1.jpg" caption="DeadLine page">
              <img src="http://res.cloudinary.com/ashi98/image/upload/v1504258558/photo_2017-09-01_14-05-34_oky3b1.jpg" class="uk-border-rounded box-shadow" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'psu',
    data () {
      return {
        project_name: 'pre selected unit',
        project_info: 'pre selected unit, its a program for managing students selected units for reports.',
        project_tools: 'html, css, python, jquery, angularJs'
      }
    }
  }
</script>
<!-- styling for the component -->
<style>
  .uk-card{margin-top: 10%;border-radius: 6px;}
  h5,h4{
    font-family: Ubuntu;
    text-transform: capitalize;
    margin-top: 8px;
  }
  h4{
    font-weight: 300;
    line-height: 1.8;
    margin-left: 20px;
  }
  .box-shadow{
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    -moz-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    -ms-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    -o-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .box-shadow:hover{
    opacity: 0.8;
  }
  .uk-h3{
    font-family: Ubuntu;
    font-weight: 100;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .view-button{
    font-family: 'Ubuntu', sans-serif !important;
    text-transform: capitalize;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: 2px;
    border: none;
    height: 50px;
    padding: 0 50px !important;
    border-radius: 3px;
    color: #fff;
    line-height: 50px;
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .view-button:hover{color: #fff}
  .green-bg{  background: #4CAF50;}
  .green-bg:hover{  background: #388E3C;}
  .purple-bg{  background: #9C27B0; }
  .purple-bg:hover{  background: #7B1FA2; }
  .red-bg{  background: #F44336; }
  .red-bg:hover{  background: #D32F2F; }
</style>
