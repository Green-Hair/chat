<template>
  <div class="feac">
    <div class="feacPic">
    <img src="./feacPic1" alt="图片1" id="pic1"/>
    <img src="./feacPic2" alt="图片2" id="pic2"/>
    <img src="./feacPic3" alt="图片3" id="pic3"/>
    <img src="./feacPic4" alt="图片4" id="pic4"/>
    <img src="./feacPic1" alt="图片1" id="pic5"/>
  </div>
  </div>
</template>
<style type="text/css">
@keyframes feacMove {
			0%,9% {transform: translateX(0px);}
			16%,34% {transform: translateX(-600px);}
			41%,59% {transform: translateX(-1200px);}
			66%,84% {transform: translateX(-1800px);}
			91%,100% {transform: translateX(-2400px);}
		}
  .feac{
  width: 600px;
  height: 629px;
  background: linear-gradient(#6de1ca, #54c5b9);
  overflow: hidden;
  margin: 0 auto;
		}
		div.feacPic {
			animation: feacMove 8s ease infinite normal;
			width: 3000px;
			transform:translateX(0px);
		}
		div.feacPic img {
			float: left;
		}
</style>
