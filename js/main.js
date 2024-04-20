$(function () {

    let file__val = null,
        inputs__arr = [
            [$('#name'), 'name'],
            [$('#company'), 'company'],
            [$('#user__contact'), 'user__contact'],
            [$('#check__status'), 'check__status']
        ],
        inputs__home__arr = [
            [$('#name__home'), 'name'],
            [$('#company__home'), 'company'],
            [$('#user__contact__home'), 'user__contact'],
            [$('#check__status__home'), 'check__status']
        ]

    let error__name = false,
        error__company = false,
        error__choose = false,
        error__status = false,
        error__contact = false,
        error__name__home = false,
        error__company__home = false,
        error__choose__home = false,
        error__status__home = false,
        error__contact__home = false;

    const nav__toggle = $('#nav__toggle'),
        header = $('#header'),
        nav__bar = $('#nav__bar'),
        burger__item = $('.burger'),
        nav__footer = $('#nav__footer'),
        progress__container = $('#progress__container'),
        cookie__block = $('#cookie__consent'),
        cookie__confirm = $('#cookie__confirm'),
        link__contact = $('#link__contact'),
        btn = $('#btn'),
        bg__modal = $('#bg__modal'),
        modal__content = $('.modal__content'),
        close__x = $('#close__x'),
        user__contact = $('#user__contact'),
        custom__input = $('#custom__input'),
        user__contact__home = $('#user__contact__home'),
        custom__input__home = $('#custom__input__home'),
        block__form = $('#block__form'),
        form = $('#form'),
        form__second = $('#form__second'),
        file = $('#file'),
        file__home = $('#file__home'),
        file__show = $('#file__show'),
        file__show__home = $('#file__show__home'),
        upload__clip = $('#clip'),
        upload__clip__home = $('#clip__home'),
        remove__file = $('#remove__file'),
        remove__file__home = $('#remove__file__home'),
        check__status = $('.checkmark'),
        check__status__home = $('.checkmark__home'),
        send__data = $('#send__data'),
        send__data__home = $('#send__data__home'),
        answer__section = $('#answer__section');

    /* setting cookies on page*/
    let cookie__accepted = Cookies.get('AcookiesAccepted');

    if (cookie__accepted == null || cookie__accepted == undefined) {
        setTimeout(function () {
            $(cookie__block).fadeIn(300);
        }, 1000);
        $(cookie__confirm).on('click', function () {
            $(cookie__block).fadeOut(300);
            acceptedCookies();
            location.reload(true);
        });
    }

    /* set true if accepted */
    let acceptedCookies = (() => {
            Cookies.set('AcookiesAccepted', true, {
                expires: 30,
                path: '/'
            });
            Cookies.get('AcookiesAccepted');
        }),
        setModalCookies = ((name, company, contact__data) => {
            Cookies.set('NameModal', name, {
                expires: 30,
                path: '/',
                secure: true
            });

            Cookies.set('CompanyModal', company, {
                expires: 30,
                path: '/',
                secure: true
            });

            Cookies.set('ContactDataModal', contact__data, {
                expires: 30,
                path: '/',
                secure: true
            });
        }),
        setHomeCookies = ((name__home, company__home, contact__data__home) => {
            Cookies.set('NameHome', name__home, {
                expires: 30,
                path: '/',
                secure: true
            });

            Cookies.set('CompanyHome', company__home, {
                expires: 30,
                path: '/',
                secure: true
            });

            Cookies.set('ContactDataHome', contact__data__home, {
                expires: 30,
                path: '/',
                secure: true
            });
        });



    /*load page at the top when the user refreshes*/
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

    /*function scroll to anchor*/
    $('a[data-scroll^="#"]').on('click', function (event) {

        event.preventDefault();
        nav__bar.toggleClass('show', 200);
        burger__item.toggleClass('active');

        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 800, 'linear')
    });

    const onScroll = () => {
        let scrollPosition = $(document).scrollTop();

        $('a[data-scroll^="#"]').each(function () {
            let current__link = $(this);
            let ref__element = $(current__link.attr("href"));

            if (ref__element.position().top <= scrollPosition && ref__element.position().top + ref__element.height() > scrollPosition) {
                $('nav ul li a').removeClass("active");
                current__link.addClass("active");
            } else {
                current__link.removeClass("active");
            }
        });
    }



    /*show navigation bar on mobile and tablet devices */
    $(nav__toggle).add(link__contact).on('click', function (event) {

        event.preventDefault();
        nav__bar.toggleClass('show', 200);
        nav__footer.toggleClass('opacity', 200);
        burger__item.toggleClass('active');

        $(nav__bar).on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

    });



    /*progress bar in header section */
    const progressBarScroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;

        progress__container.css({
            width: scrolled + "%"
        });
    }

    $(window).bind('scroll', function () {
        progressBarScroll();
        onScroll();
    });



    /* scroll: toggle sticky*/
    $(window).on('scroll load resize', function () {
        header.toggleClass('sticky', window.scrollY > 0);
        progress__container.toggleClass('show__progress', window.scrollY > 0);
    });



    /*show/hide modal contact us window */
    const showModalWindow = (() => {
        setTimeout(function () {
            bg__modal.find(modal__content).css({
                transform: 'scale(1)'
            });
        }, 100);
        $('body').addClass('body-modal-open');
    });

    const hideModalWindow = (() => {
        setTimeout(function () {
            $(bg__modal).removeClass('show-modal');
        }, 300);
        setTimeout(function () {
            bg__modal.find(modal__content).css({
                transform: 'scale(0)'
            });
        }, 100);
        $('body').removeClass('body-modal-open');
    });

    /*show model contact form */
    $(btn).add(link__contact).on('click', function (event) {
        event.preventDefault();
        $('#select__error').fadeOut().removeAttr('style');

        bg__modal.addClass('show-modal');
        showModalWindow();
    });


    /*close model form by click on button close__x*/
    $(close__x).add(bg__modal).on('click', function (event) {
        event.preventDefault();
        hideModalWindow();

        file__val = null;
        $(user__contact).val("").removeAttr("placeholder");
        $(form)[0].reset();
        resetError()

        changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
        defaultClipColor();
        $(check__status).removeAttr('checked');
        $(custom__input).attr("type", "text").attr("maxlength", "254").attr("required", "false").removeAttr("pattern").removeAttr("minlength").removeAttr("placeholder").removeAttr("style");
        $(custom__input).intlTelInput('destroy');

        fadeFileSpan();
        fadeFileSpanHome();
    });

    /*close model form by click outside*/
    $(modal__content).on('click', function (event) {
        event.stopPropagation();
    });

    /*close model form by click on key ESC*/
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            hideModalWindow();
            $(form)[0].reset();
            $(user__contact).val("").removeAttr("placeholder");
            resetError();


            file__val = null;
            changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
            defaultClipColor();
            $(check__status).removeAttr('checked');
            $(custom__input).attr("type", "text").attr("maxlength", "254").attr("required", "false").removeAttr("pattern").removeAttr("minlength").removeAttr("placeholder").removeAttr("style");
            $(custom__input).intlTelInput('destroy');

            fadeFileSpan();
            fadeFileSpanHome();
        }
    });



    /*user selected how to contact and change input*/
    const stylePhoneInput = ((input) => {
        $(input).css({
            'padding': '12px 12px 12px 50px'
        });
    });


    function inputInitialization(input) {
        $(input).intlTelInput({
            utilsScript: "js/utils.js",
        });
    }

    $(user__contact).change(function () {
        user__contact.css({
            'max-width': '100px',
            'margin-right': '15px'
        });

        userSelected(user__contact, custom__input, "c");
        $(custom__input).fadeIn(600);

    });

    $(user__contact__home).change(function () {
        user__contact__home.css({
            'max-width': '100px',
            'margin-right': '15px'
        });

        userSelected(user__contact__home, custom__input__home, "ch");
        $(custom__input__home).fadeIn(600);
    });


    function userSelected(selected__option, input, checker) {
        let user__selected = $(selected__option).children("option:selected").val();

        if (user__selected == 'phone') {
            $(input).removeAttr("placeholder");
            $(input).intlTelInput('destroy');

            $(input).val('');

            if(checker === "c"){
                $('#custom__error').fadeOut();
                arr__phone = [$(input), 'phone'];

                for (let i = 0; i < inputs__arr.length; i++) {
                    if(inputs__arr.length > 4){
                        inputs__arr.pop();
                        inputs__arr.push(arr__phone);
                    }else{
                        inputs__arr.push(arr__phone);
                    }
                }
            }else if(checker === "ch"){
                $('#custom__home__error').fadeOut();
                arr__phone = [$(input), 'phone'];

                for (let i = 0; i < inputs__home__arr.length; i++) {
                    if(inputs__home__arr.length > 4){
                        inputs__home__arr.pop();
                        inputs__home__arr.push(arr__phone);
                    }else{
                        inputs__home__arr.push(arr__phone);
                    }
                }
            }

            $(input).removeAttr("id").attr("id", "phone").attr("type", "tel").attr("minlength", "4").attr("maxlength", "17").attr("required", "true");
            stylePhoneInput(input);
            inputInitialization(input);

            $(input).on('keyup focusout', function () {
                let name__input = 'phone';
                trimInput(this);

                if(checker === "c"){
                    checkValidInput($(input), name__input);
                }else if (checker === "ch"){
                    checkValidInputHome($(input), name__input);
                }
            });

        } else if (user__selected == 'email') {
            $(input).intlTelInput('destroy');

            $(input).val('');

            if(checker === "c"){
                $('#custom__error').fadeOut();
                arr__email = [$(input), 'email'];

                for (let i = 0; i < inputs__arr.length; i++) {
                    if(inputs__arr.length > 4){
                        inputs__arr.pop();
                        inputs__arr.push(arr__email);
                    }else{
                        inputs__arr.push(arr__email);
                    }
                }
            }else if(checker === "ch"){
                $('#custom__home__error').fadeOut();
                arr__email = [$(input), 'email'];

                for (let i = 0; i < inputs__home__arr.length; i++) {
                    if(inputs__home__arr.length > 4){
                        inputs__home__arr.pop();
                        inputs__home__arr.push(arr__email);
                    }else{
                        inputs__home__arr.push(arr__email);
                    }
                }
            }

            $(input).removeAttr("id").attr("id", "email").attr("type", "text").attr("maxlength", "254").attr("placeholder", "Email *").attr("required", "true").removeAttr("pattern").removeAttr("minlength").removeAttr("style");
            

            $(input).on('keyup focusout', function () {
                let name__input = 'email';
                trimInput(this);

                if(checker === "c"){
                    checkValidInput($(input), name__input);
                }else if (checker === "ch"){
                    checkValidInputHome($(input), name__input);
                }
            });

        }
    }



    /*====================================== UPLOADING FILE SECTION =================================*/

    /*check uploading file (modal)*/
    $(upload__clip).on('click', function () {
        file.click();
    });

    $(upload__clip__home).on('click', function () {
        file__home.click();
    });

    const showSpanFileInput = ((title) => {

        file__show.html(title);
        file__show.css({
            'visibility': 'visible'
        });

        remove__file.css({
            'visibility': 'visible'
        });

        remove__file.fadeIn();
        file__show.fadeIn()


        file__show__home.html(title);
        file__show__home.css({
            'visibility': 'visible'
        });

        remove__file__home.css({
            'visibility': 'visible'
        });

        remove__file__home.fadeIn();
        file__show__home.fadeIn()

    });

    /*add color for clip*/
    const defaultClipColor = (() => {
        $('#clip #clip__color').removeAttr('style');
        $('#clip__home #clip__color').removeAttr('style');
    });

    const successClipColor = (() => {
        $('#clip #clip__color').css({
            'fill': 'url(#gradient)'
        });
        $('#clip__home #clip__color').css({
            'fill': 'url(#gradient)'
        });
    });

    const changeTooltip = ((text) => {
        $('#clip').attr('data-tooltip', text);
        $('#clip__home').attr('data-tooltip', text);
    });


    const fadeFileSpan = (() => {
        file__val = null;

        file.val('');
        file__show.fadeOut();
        remove__file.fadeOut();
    });

    const fadeFileSpanHome = (() => {
        file__val = null;

        file__home.val('');
        file__show__home.fadeOut();
        remove__file__home.fadeOut();
    });

    $(remove__file).add(remove__file__home).on('click', function () {
        fadeFileSpan();
        fadeFileSpanHome();
        defaultClipColor();
    });

    /*check format and size of uploading file*/
    $(file).add(file__home).on('change', function () {

        let format__file = file.val().split('.').pop(),
            format__file__home = file__home.val().split('.').pop();
        const validExtensions = ['gif', 'png', 'jpg', 'jpeg', 'xlsx', 'xls', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'pdf', 'zip', 'rar'];

        if ($.inArray(format__file, validExtensions) !== -1 || $.inArray(format__file__home, validExtensions) !== -1) {
            if (this.files[0].size < 25388608) {
                if (file.val() || file__home.val()) {
                    changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
                    showSpanFileInput(`${file.val().replace(/C:\\fakepath\\/i, '')} ${file__home.val().replace(/C:\\fakepath\\/i, '')}`);
                    file__val = this.files[0];
                    successClipColor();
                } else {
                    changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
                    defaultClipColor();
                }
            } else {
                changeTooltip('Oops, the file you\'re trying to upload is too big. Max size is 25MB');
                fadeFileSpan();
                fadeFileSpanHome();
                defaultClipColor();
            }
        } else {
            if (file.val() == undefined && file__home.val() == undefined || file.val() == null && file__home.val() == null || format__file == '' && format__file__home == '') {
                changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
                fadeFileSpan();
                fadeFileSpanHome();
            } else {
                changeTooltip(`Sorry, but you can't upload file .${format__file || format__file__home}`);
            }
            defaultClipColor();
        }
    });
    /*====================================== /UPLOADING FILE SECTION =================================*/



    /*function for custom checkbox*/
    $(check__status).on('click', function () {
        if ($(check__status).attr('checked') != 'checked') {
            $(check__status).attr('checked', true);
        } else {
            $(check__status).removeAttr('checked');
        }
    });

    $(check__status__home).on('click', function () {
        if ($(check__status__home).attr('checked') != 'checked') {
            $(check__status__home).attr('checked', true);
        } else {
            $(check__status__home).removeAttr('checked');
        }
    });



    /*prevent buttons from submitting forms*/
    $(form).add(form__second).on('submit', function () {
        return false;
    });

    
     /*====================================== DATA ON THE SERVER =================================*/

    /*send data on the server*/
    function sendFormData(data, form_id) {

        if (data.name.length > 0 && data.company.length > 0 && data.contact_type.length > 0 && data.contact_value.length > 0) {

            let formData = new FormData();

            formData.append('name', data.name);
            formData.append('company', data.company);
            formData.append('contact_type', data.contact_type);
            formData.append('contact_value', data.contact_value);

            if (data.message.length > 0) {
                formData.append('message', data.message);
            }

            if (data.file_data != null) {
                formData.append('file', data.file_data);
            }

            let settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.gargoyle.ltd/overview/contact-us/",
                "method": "POST",
                "cache": false,
                "dataType": "json",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": formData
            }

            $.ajax(settings).done(function () {

                if (form_id == "form") {
                    block__form.css({
                        opacity: '0'
                    });

                    answer__section.fadeIn();
                }

                if (form_id == "form__second") {
                    $(custom__input__home).attr("type", "text").attr("maxlength", "254").removeAttr("pattern").removeAttr("minlength").removeAttr("placeholder").removeAttr("required").removeAttr("id", "phone");
                    $(user__contact__home).val("").removeAttr("placeholder");
                    $(form__second)[0].reset();
                    resetErrorHome();

                    $(custom__input__home).fadeOut();
                    $(custom__input__home).intlTelInput('destroy');
                    $(check__status__home).removeAttr('checked');

                    fadeFileSpan();
                    fadeFileSpanHome();

                    send__data__home.val('Thank You');
                }

                setTimeout(function () {

                    if (form_id == "form") {
                        answer__section.css({
                            display: 'none'
                        });


                        $(custom__input).attr("type", "text").attr("maxlength", "254").removeAttr("pattern").removeAttr("minlength").removeAttr("placeholder").removeAttr("required").removeAttr("id", "phone");
                        $(user__contact).val("").removeAttr("placeholder");
                        $(form)[0].reset();
                        resetError();

                        $(custom__input).intlTelInput('destroy');
                        $(custom__input).fadeOut(600);
                        $(check__status).removeAttr('checked');
                        $(block__form).removeAttr('style');

                        fadeFileSpan();
                        fadeFileSpanHome();
                        hideModalWindow();
                    }
                    
                    if (form_id == "form__second") {
                        send__data__home.val('Get in touch');
                    }

                }, 3500);

                file__val = null;
                changeTooltip('.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .rar (max size is 25MB)');
                defaultClipColor();
            });

        }
    }

    /*====================================== /DATA ON THE SERVER =================================*/


    /*==================================== VALIDATION SECTION ===================================*/

    /*VALIDATION ON: keyup focusout*/
    $('#name').on('keyup focusout', function () {
        let name__input = 'name';
        trimInput(this);
        checkValidInput($('#name'), name__input);
    });

    $('#company').on('keyup focusout', function () {
        let name__input = 'company';
        trimInput(this);
        checkValidInput($('#company'), name__input);
    });

    $('#user__contact').on('click', function () {
        let name__input = 'user__contact';
        checkValidInput($('#user__contact'), name__input);
    });

    $('#message').on('focusout', function () {
        trimInput(this);
    });

    $('#check__status').on('click', function () {
        let name__input = 'check__status';
        checkValidInput($('#check__status'), name__input);
    });


    /*VALIDATION ON: keyup focusout (SECOND FORM)*/

    $('#name__home').on('keyup focusout', function () {
        let name__input = 'name';
        trimInput(this);
        checkValidInputHome($('#name__home'), name__input);
    });

    $('#company__home').on('keyup focusout', function () {
        let name__input = 'company';
        trimInput(this);
        checkValidInputHome($('#company__home'), name__input);
    });

    $('#user__contact__home').on('click', function () {
        let name__input = 'user__contact';
        checkValidInputHome($('#user__contact__home'), name__input);
    });

    $('#message__home').on('focusout', function () {
        trimInput(this);
    });

    $('#check__status__home').on('click', function () {
        let name__input = 'check__status';
        checkValidInputHome($('#check__status__home'), name__input);
    });

    /*trim function*/
    const trimInput = ((input) => {
        $(this).on('focusout', function () {
            let trim__value = $(input).val();
            trim__value = $.trim(trim__value);
            $(input).val(trim__value);
        });
    });

    /*check all required inputs*/
    const checkAllInputs = (() => {
        for (let i = 0; i < inputs__arr.length; i++) {
            checkValidInput(inputs__arr[i][0], inputs__arr[i][1]);
        }
    });

    /*check all required inputs*/
    const checkAllInputsHome = (() => {
        for (let i = 0; i < inputs__home__arr.length; i++) {
            checkValidInputHome(inputs__home__arr[i][0], inputs__home__arr[i][1]);
        }
    });


    /*CHECK VALIDATION: FORM*/
    const checkValidInput = ((input, name__input) => {
        let value = input.val(),
            input__id = input.attr('id'),
            email__pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            phone__pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        if (name__input == 'name') {
            if (value == '') {
                $('#name__error').fadeIn();
                $('#name').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#name').removeAttr('style');
                $('#name__error').fadeOut();
                error__name = true;
            }
        }

        if (name__input == 'company') {
            if (value == '') {
                $('#company__error').fadeIn();
                $('#company').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#company').removeAttr('style');
                $('#company__error').fadeOut();
                error__company = true;
            }
        }

        if (name__input == 'user__contact') {
            if (value == undefined || value == null) {
                $('#select__error').fadeIn();
                $('#user__contact').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#user__contact').css({
                    'border-color': '#404040'
                });
                $('.custom__input').css({
                    'border-color': '#404040'
                });
                $('#select__error').fadeOut();
                error__choose = true;
            }
        }

        if (name__input == 'email' && input__id == 'email') {
            if((name__input == 'email' && email__pattern.test(value))){
                $('.custom__input').css({
                    'border-color': '#404040'
                });
                $('#custom__error').fadeOut();
                error__contact = true;
            }else{
                $('.custom__input').attr("placeholder");
                $('#custom__error').fadeIn().html('Please enter a valid Email');
                $('.custom__input').css({
                    'border-color': '#e74c3c'
                });             
                
                return false;
            }

            if (value == '') {
                $('.custom__input').attr("placeholder");
                $('#custom__error').fadeIn().html('This field is required');
                $('.custom__input').css({
                    'border-color': '#e74c3c'
                });             

                return false;
            } 
            else {
                $('.custom__input').css({
                    'border-color': '#404040'
                });
                $('#custom__error').fadeOut();
                error__contact = true;
            }  
        }

        if(name__input == 'phone' && input__id == 'phone'){
            if(name__input == 'phone' && phone__pattern.test(value)){
                $('.custom__input').css({
                    'border-color': '#404040'
                });
                $('#custom__error').fadeOut();
                error__contact = true;
            }else{
                $('.custom__input').attr("placeholder");
                $('#custom__error').fadeIn().html('Please enter a valid Phone');
                $('.custom__input').css({
                    'border-color': '#e74c3c'
                });             
                
                return false;
            }

            if (value == '') {
                $('.custom__input').attr("placeholder");
                $('#custom__error').fadeIn().html('This field is required');
                $('.custom__input').css({
                    'border-color': '#e74c3c'
                });             

                return false;
            } 
            else {
                $('.custom__input').css({
                    'border-color': '#404040'
                });
                $('#custom__error').fadeOut();
                error__contact = true;
            }  
        }

        if (name__input == 'check__status') {
            if ($(check__status).attr('checked') != 'checked') {
                $('#check__status').addClass('error__before');
                $('#checkbox__error').fadeIn();
                return false;
            } else {
                $('#check__status').removeClass('error__before');
                $('#checkbox__error').fadeOut();
                error__status = true;
            }
        }
    });

    const checkValidInputHome = ((input, name__input) => {
        let value = input.val(),
            input__id = input.attr('id'),
            email__pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            phone__pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        if (name__input == 'name') {
            if (value == '') {
                $('#name__home__error').fadeIn();
                $('#name__home').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#name__home').removeAttr('style');
                $('#name__home__error').fadeOut();
                error__name__home = true;
            }
        }

        if (name__input == 'company') {
            if (value == '') {
                $('#company__home__error').fadeIn();
                $('#company__home').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#company__home').removeAttr('style');
                $('#company__home__error').fadeOut();
                error__company__home = true;
            }
        }

        if (name__input == 'user__contact') {
            if (value == undefined || value == null) {
                $('#select__home__error').fadeIn();
                $('#user__contact__home').css({
                    'border-color': '#e74c3c'
                });
                return false;
            } else {
                $('#user__contact__home').css({
                    'border-color': '#404040'
                });
                $('.custom__input__home').css({
                    'border-color': '#404040'
                });
                $('#select__home__error').fadeOut();
                error__choose__home = true;
            }
        }

        if (name__input == 'email' && input__id == 'email') {
            if((name__input == 'email' && email__pattern.test(value))){
                $('.custom__input__home').css({
                    'border-color': '#404040'
                });
                $('#custom__home__error').fadeOut();
                error__contact__home = true;
            }else{
                $('.custom__input__home').attr("placeholder");
                $('#custom__home__error').fadeIn().html('Please enter a valid Email');
                $('.custom__input__home').css({
                    'border-color': '#e74c3c'
                });             
                
                return false;
            }

            if (value == '') {
                $('.custom__input__home').attr("placeholder");
                $('#custom__home__error').fadeIn().html('This field is required');
                $('.custom__input__home').css({
                    'border-color': '#e74c3c'
                });             

                return false;
            } 
            else {
                $('.custom__input__home').css({
                    'border-color': '#404040'
                });
                $('#custom__home__error').fadeOut();
                error__contact__home = true;
            }  
        }

        if(name__input == 'phone' && input__id == 'phone'){
            if(name__input == 'phone' && phone__pattern.test(value)){
                $('.custom__input__home').css({
                    'border-color': '#404040'
                });
                $('#custom__home__error').fadeOut();
                error__contact__home = true;
            }else{
                $('.custom__input__home').attr("placeholder");
                $('#custom__home__error').fadeIn().html('Please enter a valid Phone');
                $('.custom__input__home').css({
                    'border-color': '#e74c3c'
                });             
                
                return false;
            }

            if (value == '') {
                $('.custom__input__home').attr("placeholder");
                $('#custom__home__error').fadeIn().html('This field is required');
                $('.custom__input__home').css({
                    'border-color': '#e74c3c'
                });             

                return false;
            } 
            else {
                $('.custom__input__home').css({
                    'border-color': '#404040'
                });
                $('#custom__home__error').fadeOut();
                error__contact__home = true;
            }  
        }

        if (name__input == 'check__status') {
            if ($(check__status__home).attr('checked') != 'checked') {
                $('#check__status__home').addClass('error__before');
                $('#checkbox__home__error').fadeIn();
                return false;
            } else {
                $('#check__status__home').removeClass('error__before');
                $('#checkbox__home__error').fadeOut();
                error__status__home = true;
            }
        }
    });

    /*RESET VALIDATION ERROR*/
    const resetError = (() => {
        $('#name').removeAttr('style');
        $('#name__error').fadeOut();
        $('#company').removeAttr('style');
        $('#company__error').fadeOut();
        $('#user__contact').removeAttr('style');
        $('.custom__input').css({
            'border-color': '#404040'
        });
        $('#select__error').fadeOut().removeAttr('style');
        $('#custom__error').fadeOut();
        $('#check__status').removeClass('error__before');
        $('#checkbox__error').fadeOut();

        for (let i = 0; i < inputs__arr.length; i++) {
            if(inputs__arr.length > 4){
                inputs__arr.pop();
            }
        }
        
    });

    const resetErrorHome = (() => {
        $('#name__home').removeAttr('style');
        $('#name__home__error').fadeOut();
        $('#company__home').removeAttr('style');
        $('#company__home__error').fadeOut();
        $('#user__contact__home').removeAttr('style');
        $('.custom__input__home').css({
            'border-color': '#404040'
        });
        $('#select__home__error').fadeOut().removeAttr('style');
        $('#custom__home__error').fadeOut();
        $('#check__home__status').removeClass('error__before');
        $('#checkbox__home__error').fadeOut();

        for (let i = 0; i < inputs__arr.length; i++) {
            if(inputs__arr.length > 4){
                inputs__arr.pop();
            }
        }
        
    });

    /*==================================== /VALIDATION SECTION ===================================*/


    /*check validity inputs value and send data on the server*/
    $(send__data).on('click', function () {
        let form_id = form.attr('id'),
            name = $('#name').val(),
            company = $('#company').val(),
            contact_type = $('#user__contact').val(),
            contact_value = $('.custom__input').val(),
            message = $('#message').val(),
            file_data = file__val;

        if (contact_type == "phone") {
            contact_value = $('.custom__input').intlTelInput("getNumber");
        }

        let dt = {
            name,
            company,
            contact_type,
            contact_value,
            message,
            file_data
        };
        
        checkAllInputs();

        if (error__name !== false && error__company !== false && error__choose !== false && error__contact !== false && error__status !== false) {
            sendFormData(dt, form_id);

            if (cookie__accepted == "true") {
                setModalCookies(name, company, contact_value);
            }
        } else {
            checkAllInputs();
        }
    });

    /*check validity home inputs value and send data on the server*/
    $(send__data__home).on('click', function () {
        let form_id = form__second.attr('id'),
            name = $('#name__home').val(),
            company = $('#company__home').val(),
            contact_type = $('#user__contact__home').val(),
            contact_value = $('.custom__input__home').val(),
            message = $('#message__home').val(),
            file_data = file__val;

        if (contact_type == "phone") {
            contact_value = $('.custom__input__home').intlTelInput("getNumber");
        }

        let dt__home = {
            name,
            company,
            contact_type,
            contact_value,
            message,
            file_data
        };

        checkAllInputsHome();

        if (error__name__home !== false && error__name__home !== false && error__name__home !== false && error__name__home !== false && error__name__home !== false) {
            sendFormData(dt__home, form_id);

            if (cookie__accepted == "true") {
                setHomeCookies(name, company, contact_value);
            }
        }else{
            checkAllInputsHome();
        }

    });
});

// webp.js
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});