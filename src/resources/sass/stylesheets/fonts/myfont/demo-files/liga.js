/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'home': '&#xe900;',
			'house': '&#xe900;',
			'home2': '&#xe901;',
			'house2': '&#xe901;',
			'home3': '&#xe902;',
			'house3': '&#xe902;',
			'office': '&#xe903;',
			'buildings': '&#xe903;',
			'newspaper': '&#xe904;',
			'news': '&#xe904;',
			'pencil': '&#xe905;',
			'write': '&#xe905;',
			'pencil2': '&#xe906;',
			'write2': '&#xe906;',
			'quill': '&#xe907;',
			'feather': '&#xe907;',
			'pen': '&#xe908;',
			'write3': '&#xe908;',
			'blog': '&#xe909;',
			'pen2': '&#xe909;',
			'eyedropper': '&#xe90a;',
			'color': '&#xe90a;',
			'droplet': '&#xe90b;',
			'color2': '&#xe90b;',
			'paint-format': '&#xe90c;',
			'format': '&#xe90c;',
			'image': '&#xe90d;',
			'picture': '&#xe90d;',
			'images': '&#xe90e;',
			'pictures': '&#xe90e;',
			'camera': '&#xe90f;',
			'photo': '&#xe90f;',
			'headphones': '&#xe910;',
			'headset': '&#xe910;',
			'music': '&#xe911;',
			'song': '&#xe911;',
			'play': '&#xe912;',
			'video': '&#xe912;',
			'film': '&#xe913;',
			'video2': '&#xe913;',
			'video-camera': '&#xe914;',
			'video3': '&#xe914;',
			'dice': '&#xe915;',
			'game': '&#xe915;',
			'pacman': '&#xe916;',
			'game2': '&#xe916;',
			'spades': '&#xe917;',
			'cards': '&#xe917;',
			'clubs': '&#xe918;',
			'cards2': '&#xe918;',
			'diamonds': '&#xe919;',
			'cards3': '&#xe919;',
			'bullhorn': '&#xe91a;',
			'megaphone': '&#xe91a;',
			'connection': '&#xe91b;',
			'wifi': '&#xe91b;',
			'podcast': '&#xe91c;',
			'broadcast': '&#xe91c;',
			'feed': '&#xe91d;',
			'wave': '&#xe91d;',
			'mic': '&#xe91e;',
			'microphone': '&#xe91e;',
			'book': '&#xe91f;',
			'read': '&#xe91f;',
			'books': '&#xe920;',
			'library': '&#xe920;',
			'library2': '&#xe921;',
			'bank': '&#xe921;',
			'file-text': '&#xe922;',
			'file': '&#xe922;',
			'profile': '&#xe923;',
			'file2': '&#xe923;',
			'file-empty': '&#xe924;',
			'file3': '&#xe924;',
			'files-empty': '&#xe925;',
			'files': '&#xe925;',
			'file-text2': '&#xe926;',
			'file4': '&#xe926;',
			'file-picture': '&#xe927;',
			'file5': '&#xe927;',
			'file-music': '&#xe928;',
			'file6': '&#xe928;',
			'file-play': '&#xe929;',
			'file7': '&#xe929;',
			'file-video': '&#xe92a;',
			'file8': '&#xe92a;',
			'file-zip': '&#xe92b;',
			'file9': '&#xe92b;',
			'copy': '&#xe92c;',
			'duplicate': '&#xe92c;',
			'paste': '&#xe92d;',
			'clipboard-file': '&#xe92d;',
			'stack': '&#xe92e;',
			'layers': '&#xe92e;',
			'folder': '&#xe92f;',
			'directory': '&#xe92f;',
			'folder-open': '&#xe930;',
			'directory2': '&#xe930;',
			'folder-plus': '&#xe931;',
			'directory3': '&#xe931;',
			'folder-minus': '&#xe932;',
			'directory4': '&#xe932;',
			'folder-download': '&#xe933;',
			'directory5': '&#xe933;',
			'folder-upload': '&#xe934;',
			'directory6': '&#xe934;',
			'price-tag': '&#xe935;',
			'price-tags': '&#xe936;',
			'barcode': '&#xe937;',
			'qrcode': '&#xe938;',
			'ticket': '&#xe939;',
			'theater': '&#xe939;',
			'cart': '&#xe93a;',
			'purchase': '&#xe93a;',
			'coin-dollar': '&#xe93b;',
			'money': '&#xe93b;',
			'coin-euro': '&#xe93c;',
			'money2': '&#xe93c;',
			'coin-pound': '&#xe93d;',
			'money3': '&#xe93d;',
			'coin-yen': '&#xe93e;',
			'money4': '&#xe93e;',
			'credit-card': '&#xe93f;',
			'money5': '&#xe93f;',
			'calculator': '&#xe940;',
			'compute': '&#xe940;',
			'lifebuoy': '&#xe941;',
			'support': '&#xe941;',
			'phone': '&#xe942;',
			'telephone': '&#xe942;',
			'phone-hang-up': '&#xe943;',
			'telephone2': '&#xe943;',
			'address-book': '&#xe944;',
			'contact': '&#xe944;',
			'envelop': '&#xe945;',
			'mail': '&#xe945;',
			'pushpin': '&#xe946;',
			'pin': '&#xe946;',
			'location': '&#xe947;',
			'map-marker': '&#xe947;',
			'location2': '&#xe948;',
			'map-marker2': '&#xe948;',
			'compass': '&#xe949;',
			'direction': '&#xe949;',
			'compass2': '&#xe94a;',
			'direction2': '&#xe94a;',
			'map': '&#xe94b;',
			'guide': '&#xe94b;',
			'map2': '&#xe94c;',
			'guide2': '&#xe94c;',
			'history': '&#xe94d;',
			'time': '&#xe94d;',
			'clock': '&#xe94e;',
			'time2': '&#xe94e;',
			'clock2': '&#xe94f;',
			'time3': '&#xe94f;',
			'alarm': '&#xe950;',
			'time4': '&#xe950;',
			'bell': '&#xe951;',
			'alarm2': '&#xe951;',
			'stopwatch': '&#xe952;',
			'time5': '&#xe952;',
			'calendar': '&#xe953;',
			'date': '&#xe953;',
			'printer': '&#xe954;',
			'print': '&#xe954;',
			'keyboard': '&#xe955;',
			'typing': '&#xe955;',
			'display': '&#xe956;',
			'screen': '&#xe956;',
			'laptop': '&#xe957;',
			'computer': '&#xe957;',
			'mobile': '&#xe958;',
			'cell-phone': '&#xe958;',
			'mobile2': '&#xe959;',
			'cell-phone2': '&#xe959;',
			'tablet': '&#xe95a;',
			'mobile3': '&#xe95a;',
			'tv': '&#xe95b;',
			'television': '&#xe95b;',
			'drawer': '&#xe95c;',
			'box': '&#xe95c;',
			'drawer2': '&#xe95d;',
			'box2': '&#xe95d;',
			'box-add': '&#xe95e;',
			'box3': '&#xe95e;',
			'box-remove': '&#xe95f;',
			'box4': '&#xe95f;',
			'download': '&#xe960;',
			'save': '&#xe960;',
			'upload': '&#xe961;',
			'load': '&#xe961;',
			'floppy-disk': '&#xe962;',
			'save2': '&#xe962;',
			'drive': '&#xe963;',
			'save3': '&#xe963;',
			'database': '&#xe964;',
			'db': '&#xe964;',
			'undo': '&#xe965;',
			'ccw': '&#xe965;',
			'redo': '&#xe966;',
			'cw': '&#xe966;',
			'undo2': '&#xe967;',
			'left': '&#xe967;',
			'redo2': '&#xe968;',
			'right': '&#xe968;',
			'forward': '&#xe969;',
			'right2': '&#xe969;',
			'reply': '&#xe96a;',
			'left2': '&#xe96a;',
			'bubble': '&#xe96b;',
			'comment': '&#xe96b;',
			'bubbles': '&#xe96c;',
			'comments': '&#xe96c;',
			'bubbles2': '&#xe96d;',
			'comments2': '&#xe96d;',
			'bubble2': '&#xe96e;',
			'comment2': '&#xe96e;',
			'bubbles3': '&#xe96f;',
			'comments3': '&#xe96f;',
			'bubbles4': '&#xe970;',
			'comments4': '&#xe970;',
			'user': '&#xe971;',
			'profile2': '&#xe971;',
			'users': '&#xe972;',
			'group': '&#xe972;',
			'user-plus': '&#xe973;',
			'user2': '&#xe973;',
			'user-minus': '&#xe974;',
			'user3': '&#xe974;',
			'user-check': '&#xe975;',
			'user4': '&#xe975;',
			'user-tie': '&#xe976;',
			'user5': '&#xe976;',
			'quotes-left': '&#xe977;',
			'ldquo': '&#xe977;',
			'quotes-right': '&#xe978;',
			'rdquo': '&#xe978;',
			'hour-glass': '&#xe979;',
			'loading': '&#xe979;',
			'spinner': '&#xe97a;',
			'loading2': '&#xe97a;',
			'spinner2': '&#xe97b;',
			'loading3': '&#xe97b;',
			'spinner3': '&#xe97c;',
			'loading4': '&#xe97c;',
			'spinner4': '&#xe97d;',
			'loading5': '&#xe97d;',
			'spinner5': '&#xe97e;',
			'loading6': '&#xe97e;',
			'spinner6': '&#xe97f;',
			'loading7': '&#xe97f;',
			'spinner7': '&#xe980;',
			'loading8': '&#xe980;',
			'spinner8': '&#xe981;',
			'loading9': '&#xe981;',
			'spinner9': '&#xe982;',
			'loading10': '&#xe982;',
			'spinner10': '&#xe983;',
			'loading11': '&#xe983;',
			'spinner11': '&#xe984;',
			'loading12': '&#xe984;',
			'binoculars': '&#xe985;',
			'lookup': '&#xe985;',
			'search': '&#xe986;',
			'magnifier': '&#xe986;',
			'zoom-in': '&#xe987;',
			'magnifier2': '&#xe987;',
			'zoom-out': '&#xe988;',
			'magnifier3': '&#xe988;',
			'enlarge': '&#xe989;',
			'expand': '&#xe989;',
			'shrink': '&#xe98a;',
			'collapse': '&#xe98a;',
			'enlarge2': '&#xe98b;',
			'expand2': '&#xe98b;',
			'shrink2': '&#xe98c;',
			'collapse2': '&#xe98c;',
			'key': '&#xe98d;',
			'password': '&#xe98d;',
			'key2': '&#xe98e;',
			'password2': '&#xe98e;',
			'lock': '&#xe98f;',
			'secure': '&#xe98f;',
			'unlocked': '&#xe990;',
			'lock-open': '&#xe990;',
			'wrench': '&#xe991;',
			'tool': '&#xe991;',
			'equalizer': '&#xe992;',
			'sliders': '&#xe992;',
			'equalizer2': '&#xe993;',
			'sliders2': '&#xe993;',
			'cog': '&#xe994;',
			'gear': '&#xe994;',
			'cogs': '&#xe995;',
			'gears': '&#xe995;',
			'hammer': '&#xe996;',
			'tool2': '&#xe996;',
			'magic-wand': '&#xe997;',
			'wizard': '&#xe997;',
			'aid-kit': '&#xe998;',
			'health': '&#xe998;',
			'bug': '&#xe999;',
			'virus': '&#xe999;',
			'pie-chart': '&#xe99a;',
			'stats': '&#xe99a;',
			'stats-dots': '&#xe99b;',
			'stats2': '&#xe99b;',
			'stats-bars': '&#xe99c;',
			'stats3': '&#xe99c;',
			'stats-bars2': '&#xe99d;',
			'stats4': '&#xe99d;',
			'trophy': '&#xe99e;',
			'cup': '&#xe99e;',
			'gift': '&#xe99f;',
			'present': '&#xe99f;',
			'glass': '&#xe9a0;',
			'drink': '&#xe9a0;',
			'glass2': '&#xe9a1;',
			'drink2': '&#xe9a1;',
			'mug': '&#xe9a2;',
			'drink3': '&#xe9a2;',
			'spoon-knife': '&#xe9a3;',
			'food': '&#xe9a3;',
			'leaf': '&#xe9a4;',
			'nature': '&#xe9a4;',
			'rocket': '&#xe9a5;',
			'jet': '&#xe9a5;',
			'meter': '&#xe9a6;',
			'gauge': '&#xe9a6;',
			'meter2': '&#xe9a7;',
			'gauge2': '&#xe9a7;',
			'hammer2': '&#xe9a8;',
			'gavel': '&#xe9a8;',
			'fire': '&#xe9a9;',
			'flame': '&#xe9a9;',
			'lab': '&#xe9aa;',
			'beta': '&#xe9aa;',
			'magnet': '&#xe9ab;',
			'attract': '&#xe9ab;',
			'bin': '&#xe9ac;',
			'trashcan': '&#xe9ac;',
			'bin2': '&#xe9ad;',
			'trashcan2': '&#xe9ad;',
			'briefcase': '&#xe9ae;',
			'portfolio': '&#xe9ae;',
			'airplane': '&#xe9af;',
			'travel': '&#xe9af;',
			'truck': '&#xe9b0;',
			'transit': '&#xe9b0;',
			'road': '&#xe9b1;',
			'asphalt': '&#xe9b1;',
			'accessibility': '&#xe9b2;',
			'target': '&#xe9b3;',
			'goal': '&#xe9b3;',
			'shield': '&#xe9b4;',
			'security': '&#xe9b4;',
			'power': '&#xe9b5;',
			'lightning': '&#xe9b5;',
			'switch': '&#xe9b6;',
			'power-cord': '&#xe9b7;',
			'plugin': '&#xe9b7;',
			'clipboard': '&#xe9b8;',
			'board': '&#xe9b8;',
			'list-numbered': '&#xe9b9;',
			'options': '&#xe9b9;',
			'list': '&#xe9ba;',
			'todo': '&#xe9ba;',
			'list2': '&#xe9bb;',
			'todo2': '&#xe9bb;',
			'tree': '&#xe9bc;',
			'branches': '&#xe9bc;',
			'menu': '&#xe9bd;',
			'list3': '&#xe9bd;',
			'menu2': '&#xe9be;',
			'options2': '&#xe9be;',
			'menu3': '&#xe9bf;',
			'options3': '&#xe9bf;',
			'menu4': '&#xe9c0;',
			'options4': '&#xe9c0;',
			'cloud': '&#xe9c1;',
			'weather': '&#xe9c1;',
			'cloud-download': '&#xe9c2;',
			'cloud2': '&#xe9c2;',
			'cloud-upload': '&#xe9c3;',
			'cloud3': '&#xe9c3;',
			'cloud-check': '&#xe9c4;',
			'cloud4': '&#xe9c4;',
			'download2': '&#xe9c5;',
			'save4': '&#xe9c5;',
			'upload2': '&#xe9c6;',
			'load2': '&#xe9c6;',
			'download3': '&#xe9c7;',
			'save5': '&#xe9c7;',
			'upload3': '&#xe9c8;',
			'load3': '&#xe9c8;',
			'sphere': '&#xe9c9;',
			'globe': '&#xe9c9;',
			'earth': '&#xe9ca;',
			'globe2': '&#xe9ca;',
			'link': '&#xe9cb;',
			'chain': '&#xe9cb;',
			'flag': '&#xe9cc;',
			'report': '&#xe9cc;',
			'attachment': '&#xe9cd;',
			'paperclip': '&#xe9cd;',
			'eye': '&#xe9ce;',
			'views': '&#xe9ce;',
			'eye-plus': '&#xe9cf;',
			'views2': '&#xe9cf;',
			'eye-minus': '&#xe9d0;',
			'views3': '&#xe9d0;',
			'eye-blocked': '&#xe9d1;',
			'views4': '&#xe9d1;',
			'bookmark': '&#xe9d2;',
			'ribbon': '&#xe9d2;',
			'bookmarks': '&#xe9d3;',
			'ribbons': '&#xe9d3;',
			'sun': '&#xe9d4;',
			'weather2': '&#xe9d4;',
			'contrast': '&#xe9d5;',
			'brightness-contrast': '&#xe9d6;',
			'star-empty': '&#xe9d7;',
			'rate': '&#xe9d7;',
			'star-half': '&#xe9d8;',
			'rate2': '&#xe9d8;',
			'star-full': '&#xe9d9;',
			'rate3': '&#xe9d9;',
			'heart': '&#xe9da;',
			'like': '&#xe9da;',
			'heart-broken': '&#xe9db;',
			'heart2': '&#xe9db;',
			'man': '&#xe9dc;',
			'male': '&#xe9dc;',
			'woman': '&#xe9dd;',
			'female': '&#xe9dd;',
			'man-woman': '&#xe9de;',
			'toilet': '&#xe9de;',
			'happy': '&#xe9df;',
			'emoticon': '&#xe9df;',
			'happy2': '&#xe9e0;',
			'emoticon2': '&#xe9e0;',
			'smile': '&#xe9e1;',
			'emoticon3': '&#xe9e1;',
			'smile2': '&#xe9e2;',
			'emoticon4': '&#xe9e2;',
			'tongue': '&#xe9e3;',
			'emoticon5': '&#xe9e3;',
			'tongue2': '&#xe9e4;',
			'emoticon6': '&#xe9e4;',
			'sad': '&#xe9e5;',
			'emoticon7': '&#xe9e5;',
			'sad2': '&#xe9e6;',
			'emoticon8': '&#xe9e6;',
			'wink': '&#xe9e7;',
			'emoticon9': '&#xe9e7;',
			'wink2': '&#xe9e8;',
			'emoticon10': '&#xe9e8;',
			'grin': '&#xe9e9;',
			'emoticon11': '&#xe9e9;',
			'grin2': '&#xe9ea;',
			'emoticon12': '&#xe9ea;',
			'cool': '&#xe9eb;',
			'emoticon13': '&#xe9eb;',
			'cool2': '&#xe9ec;',
			'emoticon14': '&#xe9ec;',
			'angry': '&#xe9ed;',
			'emoticon15': '&#xe9ed;',
			'angry2': '&#xe9ee;',
			'emoticon16': '&#xe9ee;',
			'evil': '&#xe9ef;',
			'emoticon17': '&#xe9ef;',
			'evil2': '&#xe9f0;',
			'emoticon18': '&#xe9f0;',
			'shocked': '&#xe9f1;',
			'emoticon19': '&#xe9f1;',
			'shocked2': '&#xe9f2;',
			'emoticon20': '&#xe9f2;',
			'baffled': '&#xe9f3;',
			'emoticon21': '&#xe9f3;',
			'baffled2': '&#xe9f4;',
			'emoticon22': '&#xe9f4;',
			'confused': '&#xe9f5;',
			'emoticon23': '&#xe9f5;',
			'confused2': '&#xe9f6;',
			'emoticon24': '&#xe9f6;',
			'neutral': '&#xe9f7;',
			'emoticon25': '&#xe9f7;',
			'neutral2': '&#xe9f8;',
			'emoticon26': '&#xe9f8;',
			'hipster': '&#xe9f9;',
			'emoticon27': '&#xe9f9;',
			'hipster2': '&#xe9fa;',
			'emoticon28': '&#xe9fa;',
			'wondering': '&#xe9fb;',
			'emoticon29': '&#xe9fb;',
			'wondering2': '&#xe9fc;',
			'emoticon30': '&#xe9fc;',
			'sleepy': '&#xe9fd;',
			'emoticon31': '&#xe9fd;',
			'sleepy2': '&#xe9fe;',
			'emoticon32': '&#xe9fe;',
			'frustrated': '&#xe9ff;',
			'emoticon33': '&#xe9ff;',
			'frustrated2': '&#xea00;',
			'emoticon34': '&#xea00;',
			'crying': '&#xea01;',
			'emoticon35': '&#xea01;',
			'crying2': '&#xea02;',
			'emoticon36': '&#xea02;',
			'point-up': '&#xea03;',
			'finger': '&#xea03;',
			'point-right': '&#xea04;',
			'finger2': '&#xea04;',
			'point-down': '&#xea05;',
			'finger3': '&#xea05;',
			'point-left': '&#xea06;',
			'finger4': '&#xea06;',
			'warning': '&#xea07;',
			'sign': '&#xea07;',
			'notification': '&#xea08;',
			'warning2': '&#xea08;',
			'question': '&#xea09;',
			'help': '&#xea09;',
			'plus': '&#xea0a;',
			'add': '&#xea0a;',
			'minus': '&#xea0b;',
			'subtract': '&#xea0b;',
			'info': '&#xea0c;',
			'information': '&#xea0c;',
			'cancel-circle': '&#xea0d;',
			'close': '&#xea0d;',
			'blocked': '&#xea0e;',
			'forbidden': '&#xea0e;',
			'cross': '&#xea0f;',
			'cancel': '&#xea0f;',
			'checkmark': '&#xea10;',
			'tick': '&#xea10;',
			'checkmark2': '&#xea11;',
			'tick2': '&#xea11;',
			'spell-check': '&#xea12;',
			'spelling': '&#xea12;',
			'enter': '&#xea13;',
			'signin': '&#xea13;',
			'exit': '&#xea14;',
			'signout': '&#xea14;',
			'play2': '&#xea15;',
			'player': '&#xea15;',
			'pause': '&#xea16;',
			'player2': '&#xea16;',
			'stop': '&#xea17;',
			'player3': '&#xea17;',
			'previous': '&#xea18;',
			'player4': '&#xea18;',
			'next': '&#xea19;',
			'player5': '&#xea19;',
			'backward': '&#xea1a;',
			'player6': '&#xea1a;',
			'forward2': '&#xea1b;',
			'player7': '&#xea1b;',
			'play3': '&#xea1c;',
			'player8': '&#xea1c;',
			'pause2': '&#xea1d;',
			'player9': '&#xea1d;',
			'stop2': '&#xea1e;',
			'player10': '&#xea1e;',
			'backward2': '&#xea1f;',
			'player11': '&#xea1f;',
			'forward3': '&#xea20;',
			'player12': '&#xea20;',
			'first': '&#xea21;',
			'player13': '&#xea21;',
			'last': '&#xea22;',
			'player14': '&#xea22;',
			'previous2': '&#xea23;',
			'player15': '&#xea23;',
			'next2': '&#xea24;',
			'player16': '&#xea24;',
			'eject': '&#xea25;',
			'player17': '&#xea25;',
			'volume-high': '&#xea26;',
			'volume': '&#xea26;',
			'volume-medium': '&#xea27;',
			'volume2': '&#xea27;',
			'volume-low': '&#xea28;',
			'volume3': '&#xea28;',
			'volume-mute': '&#xea29;',
			'volume4': '&#xea29;',
			'volume-mute2': '&#xea2a;',
			'volume5': '&#xea2a;',
			'volume-increase': '&#xea2b;',
			'volume6': '&#xea2b;',
			'volume-decrease': '&#xea2c;',
			'volume7': '&#xea2c;',
			'loop': '&#xea2d;',
			'repeat': '&#xea2d;',
			'loop2': '&#xea2e;',
			'repeat2': '&#xea2e;',
			'infinite': '&#xea2f;',
			'shuffle': '&#xea30;',
			'random': '&#xea30;',
			'arrow-up-left': '&#xea31;',
			'up-left': '&#xea31;',
			'arrow-up': '&#xea32;',
			'up': '&#xea32;',
			'arrow-up-right': '&#xea33;',
			'up-right': '&#xea33;',
			'arrow-right': '&#xea34;',
			'right3': '&#xea34;',
			'arrow-down-right': '&#xea35;',
			'down-right': '&#xea35;',
			'arrow-down': '&#xea36;',
			'down': '&#xea36;',
			'arrow-down-left': '&#xea37;',
			'down-left': '&#xea37;',
			'arrow-left': '&#xea38;',
			'left3': '&#xea38;',
			'arrow-up-left2': '&#xea39;',
			'up-left2': '&#xea39;',
			'arrow-up2': '&#xea3a;',
			'up2': '&#xea3a;',
			'arrow-up-right2': '&#xea3b;',
			'up-right2': '&#xea3b;',
			'arrow-right2': '&#xea3c;',
			'right4': '&#xea3c;',
			'arrow-down-right2': '&#xea3d;',
			'down-right2': '&#xea3d;',
			'arrow-down2': '&#xea3e;',
			'down2': '&#xea3e;',
			'arrow-down-left2': '&#xea3f;',
			'down-left2': '&#xea3f;',
			'arrow-left2': '&#xea40;',
			'left4': '&#xea40;',
			'circle-up': '&#xea41;',
			'up3': '&#xea41;',
			'circle-right': '&#xea42;',
			'right5': '&#xea42;',
			'circle-down': '&#xea43;',
			'down3': '&#xea43;',
			'circle-left': '&#xea44;',
			'left5': '&#xea44;',
			'tab': '&#xea45;',
			'arrows': '&#xea45;',
			'move-up': '&#xea46;',
			'sort': '&#xea46;',
			'move-down': '&#xea47;',
			'sort2': '&#xea47;',
			'sort-alpha-asc': '&#xea48;',
			'arrange': '&#xea48;',
			'sort-alpha-desc': '&#xea49;',
			'arrange2': '&#xea49;',
			'sort-numeric-asc': '&#xea4a;',
			'arrange3': '&#xea4a;',
			'sort-numberic-desc': '&#xea4b;',
			'arrange4': '&#xea4b;',
			'sort-amount-asc': '&#xea4c;',
			'arrange5': '&#xea4c;',
			'sort-amount-desc': '&#xea4d;',
			'arrange6': '&#xea4d;',
			'command': '&#xea4e;',
			'cmd': '&#xea4e;',
			'shift': '&#xea4f;',
			'ctrl': '&#xea50;',
			'control': '&#xea50;',
			'opt': '&#xea51;',
			'option': '&#xea51;',
			'checkbox-checked': '&#xea52;',
			'checkbox': '&#xea52;',
			'checkbox-unchecked': '&#xea53;',
			'checkbox2': '&#xea53;',
			'radio-checked': '&#xea54;',
			'radio-button': '&#xea54;',
			'radio-checked2': '&#xea55;',
			'radio-button2': '&#xea55;',
			'radio-unchecked': '&#xea56;',
			'radio-button3': '&#xea56;',
			'crop': '&#xea57;',
			'resize': '&#xea57;',
			'make-group': '&#xea58;',
			'ungroup': '&#xea59;',
			'scissors': '&#xea5a;',
			'cut': '&#xea5a;',
			'filter': '&#xea5b;',
			'funnel': '&#xea5b;',
			'font': '&#xea5c;',
			'typeface': '&#xea5c;',
			'ligature': '&#xea5d;',
			'typography': '&#xea5d;',
			'ligature2': '&#xea5e;',
			'typography2': '&#xea5e;',
			'text-height': '&#xea5f;',
			'wysiwyg': '&#xea5f;',
			'text-width': '&#xea60;',
			'wysiwyg2': '&#xea60;',
			'font-size': '&#xea61;',
			'wysiwyg3': '&#xea61;',
			'bold': '&#xea62;',
			'wysiwyg4': '&#xea62;',
			'underline': '&#xea63;',
			'wysiwyg5': '&#xea63;',
			'italic': '&#xea64;',
			'wysiwyg6': '&#xea64;',
			'strikethrough': '&#xea65;',
			'wysiwyg7': '&#xea65;',
			'omega': '&#xea66;',
			'wysiwyg8': '&#xea66;',
			'sigma': '&#xea67;',
			'wysiwyg9': '&#xea67;',
			'page-break': '&#xea68;',
			'wysiwyg10': '&#xea68;',
			'superscript': '&#xea69;',
			'wysiwyg11': '&#xea69;',
			'subscript': '&#xea6a;',
			'wysiwyg12': '&#xea6a;',
			'superscript2': '&#xea6b;',
			'wysiwyg13': '&#xea6b;',
			'subscript2': '&#xea6c;',
			'wysiwyg14': '&#xea6c;',
			'text-color': '&#xea6d;',
			'wysiwyg15': '&#xea6d;',
			'pagebreak': '&#xea6e;',
			'wysiwyg16': '&#xea6e;',
			'clear-formatting': '&#xea6f;',
			'wysiwyg17': '&#xea6f;',
			'table': '&#xea70;',
			'wysiwyg18': '&#xea70;',
			'table2': '&#xea71;',
			'wysiwyg19': '&#xea71;',
			'insert-template': '&#xea72;',
			'wysiwyg20': '&#xea72;',
			'pilcrow': '&#xea73;',
			'wysiwyg21': '&#xea73;',
			'ltr': '&#xea74;',
			'wysiwyg22': '&#xea74;',
			'rtl': '&#xea75;',
			'wysiwyg23': '&#xea75;',
			'section': '&#xea76;',
			'wysiwyg24': '&#xea76;',
			'paragraph-left': '&#xea77;',
			'wysiwyg25': '&#xea77;',
			'paragraph-center': '&#xea78;',
			'wysiwyg26': '&#xea78;',
			'paragraph-right': '&#xea79;',
			'wysiwyg27': '&#xea79;',
			'paragraph-justify': '&#xea7a;',
			'wysiwyg28': '&#xea7a;',
			'indent-increase': '&#xea7b;',
			'wysiwyg29': '&#xea7b;',
			'indent-decrease': '&#xea7c;',
			'wysiwyg30': '&#xea7c;',
			'share': '&#xea7d;',
			'out': '&#xea7d;',
			'new-tab': '&#xea7e;',
			'out2': '&#xea7e;',
			'embed': '&#xea7f;',
			'code': '&#xea7f;',
			'embed2': '&#xea80;',
			'code2': '&#xea80;',
			'terminal': '&#xea81;',
			'console': '&#xea81;',
			'share2': '&#xea82;',
			'social': '&#xea82;',
			'mail2': '&#xea83;',
			'contact2': '&#xea83;',
			'mail3': '&#xea84;',
			'contact3': '&#xea84;',
			'mail4': '&#xea85;',
			'contact4': '&#xea85;',
			'mail5': '&#xea86;',
			'contact5': '&#xea86;',
			'google': '&#xea87;',
			'brand': '&#xea87;',
			'google-plus': '&#xea88;',
			'brand2': '&#xea88;',
			'google-plus2': '&#xea89;',
			'brand3': '&#xea89;',
			'google-plus3': '&#xea8a;',
			'brand4': '&#xea8a;',
			'google-drive': '&#xea8b;',
			'brand5': '&#xea8b;',
			'facebook': '&#xea8c;',
			'brand6': '&#xea8c;',
			'facebook2': '&#xea8d;',
			'brand7': '&#xea8d;',
			'facebook3': '&#xea8e;',
			'brand8': '&#xea8e;',
			'ello': '&#xea8f;',
			'brand9': '&#xea8f;',
			'instagram': '&#xea90;',
			'brand10': '&#xea90;',
			'twitter': '&#xea91;',
			'brand11': '&#xea91;',
			'twitter2': '&#xea92;',
			'brand12': '&#xea92;',
			'twitter3': '&#xea93;',
			'brand13': '&#xea93;',
			'feed2': '&#xea94;',
			'rss': '&#xea94;',
			'feed3': '&#xea95;',
			'rss2': '&#xea95;',
			'feed4': '&#xea96;',
			'rss3': '&#xea96;',
			'youtube': '&#xea97;',
			'brand14': '&#xea97;',
			'youtube2': '&#xea98;',
			'brand15': '&#xea98;',
			'youtube3': '&#xea99;',
			'brand16': '&#xea99;',
			'youtube4': '&#xea9a;',
			'brand17': '&#xea9a;',
			'twitch': '&#xea9b;',
			'brand18': '&#xea9b;',
			'vimeo': '&#xea9c;',
			'brand19': '&#xea9c;',
			'vimeo2': '&#xea9d;',
			'brand20': '&#xea9d;',
			'vimeo3': '&#xea9e;',
			'brand21': '&#xea9e;',
			'lanyrd': '&#xea9f;',
			'brand22': '&#xea9f;',
			'flickr': '&#xeaa0;',
			'brand23': '&#xeaa0;',
			'flickr2': '&#xeaa1;',
			'brand24': '&#xeaa1;',
			'flickr3': '&#xeaa2;',
			'brand25': '&#xeaa2;',
			'flickr4': '&#xeaa3;',
			'brand26': '&#xeaa3;',
			'picassa': '&#xeaa4;',
			'brand27': '&#xeaa4;',
			'picassa2': '&#xeaa5;',
			'brand28': '&#xeaa5;',
			'dribbble': '&#xeaa6;',
			'brand29': '&#xeaa6;',
			'dribbble2': '&#xeaa7;',
			'brand30': '&#xeaa7;',
			'dribbble3': '&#xeaa8;',
			'brand31': '&#xeaa8;',
			'forrst': '&#xeaa9;',
			'brand32': '&#xeaa9;',
			'forrst2': '&#xeaaa;',
			'brand33': '&#xeaaa;',
			'deviantart': '&#xeaab;',
			'brand34': '&#xeaab;',
			'deviantart2': '&#xeaac;',
			'brand35': '&#xeaac;',
			'steam': '&#xeaad;',
			'brand36': '&#xeaad;',
			'steam2': '&#xeaae;',
			'brand37': '&#xeaae;',
			'dropbox': '&#xeaaf;',
			'brand38': '&#xeaaf;',
			'onedrive': '&#xeab0;',
			'brand39': '&#xeab0;',
			'github': '&#xeab1;',
			'brand40': '&#xeab1;',
			'github2': '&#xeab2;',
			'brand41': '&#xeab2;',
			'github3': '&#xeab3;',
			'brand42': '&#xeab3;',
			'github4': '&#xeab4;',
			'brand43': '&#xeab4;',
			'github5': '&#xeab5;',
			'brand44': '&#xeab5;',
			'wordpress': '&#xeab6;',
			'brand45': '&#xeab6;',
			'wordpress2': '&#xeab7;',
			'brand46': '&#xeab7;',
			'joomla': '&#xeab8;',
			'brand47': '&#xeab8;',
			'blogger': '&#xeab9;',
			'brand48': '&#xeab9;',
			'blogger2': '&#xeaba;',
			'brand49': '&#xeaba;',
			'tumblr': '&#xeabb;',
			'brand50': '&#xeabb;',
			'tumblr2': '&#xeabc;',
			'brand51': '&#xeabc;',
			'yahoo': '&#xeabd;',
			'brand52': '&#xeabd;',
			'tux': '&#xeabe;',
			'brand53': '&#xeabe;',
			'apple': '&#xeabf;',
			'brand54': '&#xeabf;',
			'finder': '&#xeac0;',
			'brand55': '&#xeac0;',
			'android': '&#xeac1;',
			'brand56': '&#xeac1;',
			'windows': '&#xeac2;',
			'brand57': '&#xeac2;',
			'windows8': '&#xeac3;',
			'brand58': '&#xeac3;',
			'soundcloud': '&#xeac4;',
			'brand59': '&#xeac4;',
			'soundcloud2': '&#xeac5;',
			'brand60': '&#xeac5;',
			'skype': '&#xeac6;',
			'brand61': '&#xeac6;',
			'reddit': '&#xeac7;',
			'brand62': '&#xeac7;',
			'linkedin': '&#xeac8;',
			'brand63': '&#xeac8;',
			'linkedin2': '&#xeac9;',
			'brand64': '&#xeac9;',
			'lastfm': '&#xeaca;',
			'brand65': '&#xeaca;',
			'lastfm2': '&#xeacb;',
			'brand66': '&#xeacb;',
			'delicious': '&#xeacc;',
			'brand67': '&#xeacc;',
			'stumbleupon': '&#xeacd;',
			'brand68': '&#xeacd;',
			'stumbleupon2': '&#xeace;',
			'brand69': '&#xeace;',
			'stackoverflow': '&#xeacf;',
			'brand70': '&#xeacf;',
			'pinterest': '&#xead0;',
			'brand71': '&#xead0;',
			'pinterest2': '&#xead1;',
			'brand72': '&#xead1;',
			'xing': '&#xead2;',
			'brand73': '&#xead2;',
			'xing2': '&#xead3;',
			'brand74': '&#xead3;',
			'flattr': '&#xead4;',
			'brand75': '&#xead4;',
			'foursquare': '&#xead5;',
			'brand76': '&#xead5;',
			'paypal': '&#xead6;',
			'brand77': '&#xead6;',
			'paypal2': '&#xead7;',
			'brand78': '&#xead7;',
			'paypal3': '&#xead8;',
			'brand79': '&#xead8;',
			'yelp': '&#xead9;',
			'brand80': '&#xead9;',
			'file-pdf': '&#xeada;',
			'file10': '&#xeada;',
			'file-openoffice': '&#xeadb;',
			'file11': '&#xeadb;',
			'file-word': '&#xeadc;',
			'file12': '&#xeadc;',
			'file-excel': '&#xeadd;',
			'file13': '&#xeadd;',
			'libreoffice': '&#xeade;',
			'file14': '&#xeade;',
			'html5': '&#xeadf;',
			'w3c': '&#xeadf;',
			'html52': '&#xeae0;',
			'w3c2': '&#xeae0;',
			'css3': '&#xeae1;',
			'w3c3': '&#xeae1;',
			'git': '&#xeae2;',
			'svg': '&#xeae3;',
			'codepen': '&#xeae4;',
			'brand81': '&#xeae4;',
			'chrome': '&#xeae5;',
			'browser': '&#xeae5;',
			'firefox': '&#xeae6;',
			'browser2': '&#xeae6;',
			'IE': '&#xeae7;',
			'browser3': '&#xeae7;',
			'opera': '&#xeae8;',
			'browser4': '&#xeae8;',
			'safari': '&#xeae9;',
			'browser5': '&#xeae9;',
			'IcoMoon': '&#xeaea;',
			'icomoon': '&#xeaea;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());