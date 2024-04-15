/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.syntaxhighlight_lang = 'csharp';
    config.syntaxhighlight_hideControls = true;
    config.languages = 'vi';
    config.height = '800px';
    config.filebrowserBrowseUrl = '/Content/libs/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/Content/libs/ckfinder/ckfinder.html?Types=Images';
    config.filebrowserFlashBrowseUrl = '/Content/libs/ckfinder/ckfinder.html?Types=Flash';
    config.filebrowserUploadUrl = '/Content/libs/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=File';
    config.filebrowserImageUploadUrl = '/Images';
    config.filebrowserFlashUploadUrl = '/Content/libs/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';

    CKFinder.setupCKEditor(null, '/Content/libs/ckfinder/');
};

CKEDITOR.config.allowedContent = true;
