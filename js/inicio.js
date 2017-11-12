$( document ).ready(function() {

	$("#flipper").mouseover(function(){
		$("#tips").addClass("hideElement");
		$("#tips2").toggleClass("hideElement");
		$("#thirdTitulo h2").toggleClass("hideElement");
	});

	$("#flipper").mouseout(function(){
		$("#tips").removeClass("hideElement");
		$("#tips2").toggleClass("hideElement");
		$("#thirdTitulo h2").toggleClass("hideElement");
	});

	setTimeout(function(){
		$("#mainNav").toggleClass("hideNav");
		$("#wrapper").toggleClass("principal");
		setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
		setTimeout(function(){ $("#botonMenu").toggleClass("hideMenBot"); }, 2250);
	}, 750);

	$('[data-toggle="tooltip"]').tooltip();

  $('#exampleModal').on('show.bs.modal', function (e) {
    var image = $(e.relatedTarget).attr('src');
    $(".modalImg").attr("src", image);
  });

	//Mostrar y ocultar Datos extra
	$("#mainDatos a").click(function(){
		var midata = $(this).data('info');
		$(".infoPop[data-info=" + midata + "]").removeClass("hidenInfo");
	});
	$(".infoPop .closeArrow").click(function(){
		$(this).parent().addClass("hidenInfo");
	});

	$("#menuClose").click(function(){
		$("#mainNav").toggleClass("hideNav");
		$("#wrapper").toggleClass("principal");
		setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
		setTimeout(function(){ $("#botonMenu").toggleClass("hideMenBot"); }, 2250);
	});

	$("#botonMenu").click(function(){
		$("#botonMenu").toggleClass("hideMenBot");
		setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 750);
		setTimeout(function(){ $("#mainNav").toggleClass("hideNav"); }, 750);
		setTimeout(function(){ $("#wrapper").toggleClass("principal"); }, 750);
	});

	$('#myModal').on('shown.bs.modal', function () {
  	$('#myInput').trigger('focus')
	})

});
