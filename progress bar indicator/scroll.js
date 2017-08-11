function woohoo_Reading_post_bar() {
    if (!bdaia_is_mob.any() && aia.config.is_singular && aia.config.post_reading_position_indicator) {
        var reading_content = jQuery('.bdMain .post');
        if (reading_content.length > 0) {
            reading_content.imagesLoaded(function() {
                var content_height = reading_content.height();
                window_height = jQuery(window).height();
                jQuery(window).scroll(function() {
                    var percent = 0,
                        content_offset = reading_content.offset().top;
                    window_offest = jQuery(window).scrollTop();
                    if (window_offest > content_offset) {
                        percent = 100 * (window_offest - content_offset) / (content_height - window_height);
                    }
                    jQuery('#reading-position-indicator').css('width', percent + '%');
                });
            });
        }
    }
};;;