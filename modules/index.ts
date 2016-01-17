
$(function() {
	console.dir( {jquery: "loaded."} );
	
	var btnClicks = Rx.Observable.fromEvent($('#btn'), "click");
	
	btnClicks
	    .filter(function (value) {
	        return value.altKey;
	    })
	    .subscribe(function () {
	        console.log('Altキーを押しながらクリックしたね！');
	    });
})
