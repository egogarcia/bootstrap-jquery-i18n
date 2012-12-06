/* Antes de nada cargamos los mensajes */
// load I18N bundles
if($.cookie('webyo_language_21e') == null){
	loadBundles(jQuery.i18n.browserLang());
} else {
	loadBundles($.cookie('webyo_language_21e'));
	
}

// configure language combo box
jQuery('#lang').change(function() {
	var selection = jQuery('#lang option:selected').val();
	loadBundles(selection != 'browser' ? selection : null);
	jQuery('#langBrowser').empty();
	if (selection == 'browser') {
		jQuery('#langBrowser').text('(' + jQuery.i18n.browserLang() + ')');
	}
});

function loadBundles(lang) {
	jQuery.i18n.properties({
		name : 'messages',
		path : 'I18N/',
		mode : 'both',
		language : lang,
		callback : function() {
			//Creamos cookie con el idioma
			$.cookie('webyo_language_21e', lang, { expires: 15 });
		}
	});
}
