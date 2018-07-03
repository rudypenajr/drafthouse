'use strict'
import './stylesheets/styles.scss'

// Logic:
// - Mobile Navigation
// - Form Validation (inputs have been populated)
// - Input Validation: First/Last Name
// - Input Validation: Email
// - Scroll to Section

$( document ).ready(function() {
    // Mobile Navigation
    const $navIcon = $('.nav__icon')
    $navIcon.click(function(e) {
        e.preventDefault();
        $('.main-nav').toggleClass('mobile__view')
    })

    // Form Validation (inputs have been populated)
    const $button = $('.form__submission button');
    const $allFields = $('.form__block').not('.form__submission')
    const $reqs = $('.validation')
    const validateForm = function() {
        var valid = true;
        $.each($allFields, function(idx, el) {
            var $input = $(el).find('input')
            
            // check for checkbox
            if ($input.length === 0) {
                $input = $(el).find('select')
                
                if ($input.find(':selected').val() === "0") {
                    var $required = $( $reqs.get(idx) )
                    $required.removeClass('validation__hide')
                    valid = false;
                }
            } else {
                if ($input.val() === '') {
                    var $required = $( $reqs.get(idx) )
                    $required.removeClass('validation__hide')
                    valid = false;
                }
            }
        })

        return valid
    };

    $button.click(function(e){
        e.preventDefault();
        var validInputs = validateForm();
        if (validInputs) {
            $('.waitlist__form form').hide()
            $('.waitlist__form .form__spinner').show()

            setTimeout(function() {
                $('.waitlist__form .form__spinner').hide()
            }, 3000)
            
            setTimeout(function() {
                $('.waitlist__form .form__final').show()
            }, 3001)
        }
    });

    // Input Validation: First/Last Name
    const originalText = 'This field is required.'
    const validFirstNameText = 'Appears this is not a valid first name.'
    const firstnameField = $('input#first_name')
    const validName = function(val) {
        return /^[A-Za-z\s]+$/.test(val)
    }
    const blurNameCb = function(e, reqIdx) {
        const $target = $(e.target)
        console.log(e)

        if ($target.val() === '') {
            return
        }

        let $required = $( $reqs.get(reqIdx) )
        let valid = validName( $target.val() )
        
        if (!valid) {    
            $required.text(validFirstNameText)
            $required.removeClass('validation__hide')
        }
        
        if (valid && $required.text() === validFirstNameText ) {
            $required.text(originalText)
            $required.addClass('validation__hide')
        }
    }
    
    firstnameField.blur(function(e){
        blurNameCb(e, 0)
    })

    const lastnameField = $('input#last_name')
    lastnameField.blur(function(e){
        blurNameCb(e, 1)
    })

    // Input Validation: Email
    const validEmailText = 'Appears this is not a valid email.'
    const emailField = $('input#email_address')
    const validEmail = function(val) {
        var filter = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        return filter.test(val)
    }
    const blurEmailCb = function(e) {
        const $target = $(e.target)

        if ($target.val() === '') {
            return
        }

        let $required = $( $reqs.get(2) )
        let valid = validEmail( $target.val() )
     
        if (!valid) {    
            $required.text(validEmailText)
            $required.removeClass('validation__hide')
        }
        
        if (valid && $required.text() === validEmailText ) {
            $required.text(originalText)
            $required.addClass('validation__hide')
        }
    }
    emailField.blur(blurEmailCb)


    // - Scroll to Section
    const scrollToSection = function(e, $element) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $element.offset().top
        }, 1000)
    }
    $('#JoinLink a').click(function(e) {
        scrollToSection(e, $('.middle'))        
    })
    $('#FAQLink a').click(function(e) {
        scrollToSection(e, $('.bottom .row'))        
    })
});