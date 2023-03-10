$(function(){
  $(".swiper-container img:first").show()
  setInterval(function(){
	  let oldImg=$(".swiper-container img:visible")
	  let newImg=oldImg.next("img")
	  oldImg.fadeOut()
	  newImg.fadeOut()
  },5000)
)}
	

	
