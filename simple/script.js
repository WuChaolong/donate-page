// jQuery(document).ready(function() {
// 	var QRBox	=	$('#QRBox');
// 	var MainBox	=	$('#MainBox');
// // 	var BTCQR	=	'images/BTCQR.png';	// 二维码路径
// // 	var AliPayQR	=	'images/AliPayQR.png';
// // 	var WeChanQR	=	'images/WeChanQR.png';

	
	
// 	function showQR(QR) {
// 		if (QR) {
// 			MainBox.css('background-image','url('+QR+')');
// 		}
// 		$('#DonateText,#donateBox,#github').addClass('blur');
// 		QRBox.fadeIn(300,function(argument) {
// 			MainBox.addClass('showQR');
// 		});
// 	}

// 	$('#donateBox>li').click(function(event) {
// 		var thisID	=	$(this).attr('id');
// 		var QR = this.dataset["qr"];
// 		if(QR){
// 			showQR(QR);
// 		}
// 		if (thisID === 'BTC') {
// 			new Clipboard('#BTCBn');
// 		}
// 	});

// 	QRBox.click(function(event) {
// 		MainBox.removeClass('showQR').addClass('hideQR');
// 		setTimeout (function(a) {
// 			QRBox.fadeOut(300,function(argument) {
// 				MainBox.removeClass('hideQR');
// 			});
// 			$('#DonateText,#donateBox,#github').removeClass('blur');
// 		},600);

// 	});
// });
function load(){
	var QRBox	=	document.querySelector('#QRBox');
	var MainBox	=	document.querySelector('#MainBox');
	var textBox	=	document.querySelector('#text');

	function showQR(QR,text,href) {
		if (QR) {
			MainBox.style.backgroundImage = 'url('+QR+')';
		}
		document.querySelector('#DonateText').classList.add('blur');
		document.querySelector('#donateBox').classList.add('blur');
		document.querySelector('#github').classList.add('blur');
		QRBox.classList.add('show');
		MainBox.classList.add('showQR');
		textBox.innerHTML = text?text:"";
		href = href?href:"javascript:";
		MainBox.href=href;
	}
	var lis = document.querySelectorAll('#donateBox>li');
	for(var i = 0;i<lis.length;i++){
		lis[i].onclick = function(event) {
			var thisID	=	this.id;
			var QR = this.dataset["qr"];
			var text = this.dataset["text"];
			var href = this.dataset["href"]
			if(QR){
				showQR(QR,text,href);
// 				if(Clipboard){
// 					new Clipboard(thisID);
// 				}
			}
		}; 
	}
	
	
	QRBox.onclick = function(event) {
		MainBox.classList.remove('showQR');
		MainBox.classList.add('hideQR');
		setTimeout (function(a) {
			
			QRBox.classList.remove('show');
			MainBox.classList.remove('hideQR');
			document.querySelector('#DonateText').classList.remove('blur');
			document.querySelector('#donateBox').classList.remove('blur');
			document.querySelector('#github').classList.remove('blur');
		},600);

	};
}

