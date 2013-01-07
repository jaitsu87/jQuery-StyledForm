/**
 * jQuery Styled Form plugin (packed)
 *
 * Inspired by styledinput.js by Ryan Fait (http://ryanfait.com)
 *
 * Project Page: http://www.github.com/jaitsu87/jQuery-StyledForm
 * Licensed Under the GPL License (http://www.gnu.org/licenses/gpl-3.0.html)
 * Version 0.8.1 (2013)
 */
(function($){$.fn.styledForm=function(){var h=$.styledForm.config,$container=$(this),inputQuery='',selectQuery;if(h.styledClass){inputQuery='input.'+h.styledClass+'[type="checkbox"], input.'+h.styledClass+'[type="radio"]';selectQuery='select.'+h.styledClass}else{inputQuery='input[type="checkbox"], input[type="radio"]';selectQuery='select'}var j=$container.find(inputQuery);$.each(j,function(i,a){var b=$('<span>').addClass($(a).attr('type'));if($(a).attr('checked')){var c;if($(a).attr('type')=='checkbox'){c=h.checkboxHeight}else{c=h.radioHeight}b.css('background-position','0 -'+(c*2)+'px')}$(a).before(b);if($(a).attr('disabled')){b.addClass('disabled')}$(a).css('display','none')});var k=$container.find(selectQuery);$.each(k,function(i,a){var b=$(a).find('option:selected');var c=$.styledForm._canonicalize($(a).attr('name'));var d=$('<span>',{"class":"select","id":"styled-select-"+c});var e=$(a).width()+h.selectArrowWidth;d.append(b.text());d.css('width',e);var f=$('<span>',{"class":"select-arrow"});d.append(f);$(a).before(d);$(a).css('width',e);var g=$(a).parent();if(!g.is('form')){g.css('width',e)}if($(a).attr('disabled')){$(a).prev().addClass('disabled')}});$container.on('change',$.styledForm.change);$container.on('mousedown',$.styledForm.beforeClick);$container.on('mouseup',$.styledForm.afterClick)};$.styledForm={config:{checkboxHeight:22,radioHeight:22,selectArrowWidth:30,styledClass:''},beforeClick:function(e){if(e.which&&e.which==3){return}var a=$.styledForm.config;var b=$(e.target);var c=b.next();var d=b.attr('class');if(c.attr('disabled')||!$.styledForm._isStyledElement(c)){return}if($.inArray(d,['checkbox','radio'])!==-1){var f='0 -';var g=(d=='checkbox')?a.checkboxHeight:a.radioHeight;var h=g;if(b.attr('checked')){h=g*3}f+=h+'px';b.css('background-position',f)}},afterClick:function(e){var b=$.styledForm.config;var c=$(e.target);var d=c.next('input');var f=d.attr('type');if(d.attr('disabled')||!$.styledForm._isStyledElement(d)){return}if(f=='radio'){var g=$(this).find('input[type="radio"][name="'+d.attr('name')+'"]');$.each(g,function(i,a){if(a!=d.get().nextSibling&&$(a).prev()){$(a).prev().css('background-position','0 0');$(a).removeAttr('checked')}});c.css('background-position','0 -'+(b.radioHeight*2)+'px');d.attr('checked','checked')}else if(f=='checkbox'){if(d.attr('checked')){c.css('background-position','0 0');d.removeAttr('checked')}else{c.css('background-position','0 -'+(b.checkboxHeight*2)+'px');d.attr('checked','checked')}}},change:function(e){var a=$.styledForm.config;var b=$(e.target);var c=b.attr('type');if(!$.styledForm._isStyledElement(b)){return}var d=$.styledForm._canonicalize(b.attr('name'));if(c=='checkbox'){var f=b.parent().find('.checkbox');if(b.attr('checked')){f.css('background-position','0 -'+(a.checkboxHeight*2)+'px');b.removeAttr('checked')}else{f.css('background-position','0 0');b.attr('checked','checked')}}else if(c!='radio'){var g=b.find('option:selected');$(this).find('#styled-select-'+d).html(g.text()+'<span class="select-arrow"></span>')}},_isStyledElement:function(a){var b=$.styledForm.config.styledClass;if(b){return a.hasClass(b)}return true},_canonicalize:function(a){return $.trim(a.replace('[','').replace(']','-'))}}})(jQuery);