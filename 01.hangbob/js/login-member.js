$(document).ready(function(){

	$('#loginForm').submit(function(){
		if($('#userId').val()==""){
		   $('#id-msg').show();
	    }else{
		   $('#id-msg').hide().text("");
	    }
		if($('#userPwd').val()==""){
		   $('#pw-msg').show();
	    }else{
		   $('#pw-msg').hide().text("");
	    }
		return false;
	});

	var viewBtn = $('.agree-wrap .view')
    $(viewBtn).click(function(event){
        event.preventDefault();
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
            $(this).next('.policies').slideUp();
        }else{
            $(this).parent().addClass('open');
            $(this).next('.policies').slideDown();
        };
    });
    $('#agreeAll').click(function(){
        chkAll(); 
    });
    function chkAll(){
        var chk = $('#agreeAll').is(':checked');
        if(chk){
            $('input[type=checkbox]').prop('checked',true);   
        }else{
            $('input[type=checkbox]').prop('checked',false);
        }
    };

	$('#id-chk').click(function(){
			if( $('#userId').val()=="" ){
				$('#id-msg').show().html('※아이디를 입력해 주세요.');
			}else{
				$('#id-msg').text('').hide();
			};
		});
    $('#pw-chk').click(function(){
		if( $('#userPw').val()=="" ){
		   $('#pw1-msg').show();
	    }else if($('#userPw').val() != $('#userPwdConfirm').val()){
			$('#pw1-msg').hide();
			$('#pw2-msg').show();
		}else if($('#userPw').val().length < 8){
            $('#pw1-msg').hide();
			$('#pw2-msg').show().html('※비밀번호는 8자 이상입니다.');
		}else{
			$('#pw2-msg').text('').hide();
		}
	});
    
	$('#joinForm').submit(function(){
		if( $('#userId').val()=="" ){
			$('#id-msg').show();
		}else{
			$('#id-msg').text('').hide();
		};

		/*if( $('#userPw').val()=="" ){
			$('#pw1-msg').show();
		}else if($('#userPw').val().length < 8){
            $('#pw1-msg').hide();
			$('#pw2-msg').show().html('※비밀번호는 8자 이상입니다.');
		}else{
			$('#pw2-msg').text('').hide();
		};*/
		
		if( $('#phoneNumber').val()=="" ){
		   $('#pnum-msg').show();
		}else{
			$('#pnum-msg').text('').hide();
		}
		
		if( $('#emailId').val()=="" ){
		   $('#email-msg').show();
		}else{
			$('#email-msg').text('').hide();
		}
		//수신여부
		if( $('.emailRcv:checked').length==0 ){
		   $('#rcv-msg').show();
		}else if($('.snsRcv:checked').length==0){
			$('#rcv-msg').show();
		}
		else{
			$('#rcv-msg').text('').hide();
		}
	return false;
	});
	
});
