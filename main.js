		$(function(){

			var	$sliders = $('.slider > .sliders'),	// 이미지 롤 박스
				$img_width = $sliders.find('img').css('width'),	// 이미지 크기
				$img_length = $sliders.find('img').size(),		// 이미지 개수
				img_index = 0;	// 이미지 인덱스
			var s;	

			// 이미지 롤(sliders) 크기 = 이미지 크기 x 장수 */
			$sliders.css('width', 100 * $img_length + '%');	// sliders 필름 크기

			// 이미지 크기 = sliders(이미지 롤) / 장수
			$sliders.find('img').css('width', 100 / $img_length + '%');	

			$('.sliders > img').each(function(i){
				$('ul.slider-indicator').append('<li></li>');
				$('ul.slider-indicator li').last().append('<a href="#">' + (i + 1) +'</a>');
			});	

			// slider 함수
			function slider(num){
				// console.log(num % $img_length);
				// var current_idx = num % $img_length;

				$('ul.slider-indicator > li')
					.removeClass('active')
					.eq(num).addClass('active');

				$('.sliders').stop().animate({
					marginLeft: -(num * 100) + '%'
					// marginLeft: -(num * $img_width) + 'px'
					// marginLeft: -(current_idx * $$img_width) + 'px' // current index
				});
				console.log(num);
			}	// end slider()


			// indicator 버튼
			$('.slider-indicator').find('a').click(function(){
				// indicator button text number to slider img
				img_index = $(this).text()-1;
				slider(img_index);
			});

			// prev | next 버튼 이벤트
			$('#prev').click(function(){
				if(img_index > 0){
					img_index--;
				}
				slider(img_index);
				console.log(img_index);
			});

			$('#next').click(function(){
				if(img_index < $img_length-1){
					img_index++;
				}
				slider(img_index);
				console.log(img_index);
			});

			// 마우스 오버시 슬라이더 정지
			$('.slider').hover(
				function(){
					clearInterval(s);
				},
				function(){
					s = setInterval(goto_slider, 3000);
				}
			);

			/* -------------------------------------------- */
			// 슬라이더 자동재생
			function goto_slider(){
				if(img_index < $img_length-1){
					img_index++;	
				} else{ img_index = 0;}
				slider(img_index);
			}

			slider(0);
			s = setInterval(goto_slider, 3000);

		});	// end $()
