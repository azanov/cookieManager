(function (root, factory) {
	var host = root.jQuery || root;

	if (typeof define === 'function' && define.amd) {
		define([], function () {
			host.cookie = factory(host);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory(host);
	} else {
		host.cookie = factory(host);
	}
}(this, function (host) {
	'use strict';

	var undef = 'undefined',
		cookieManager = {
			getDomain: function () {
				var a = location.hostname.replace(/^.*(\.)([^\.]+\.[^\.]+)$/, '$2');
				return a !== 'localhost' ? a : '';
			},
			set: function (name, value, days, domain) {

				if (typeof name === undef) {
					throw 'A name is required to set the cookie';
				}

				if (typeof value === undef) {
					throw 'A value is required to set the cookie. If you want to remove a cookie, use the remove function!';
				}

				var expires = '';

				if (host.cookieManager) {
					if (typeof days === undef) {
						days = host.cookieManager.days || false;
					}
					if (typeof domain === undef) {
						domain = host.cookieManager.domain || false;
					}
				}

				if (days) {
					var d = new Date();
					d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
					expires = '; expires=' + d.toGMTString();
				}

				document.cookie =
					name + '=' + value +
					expires + '; path=/' +
					(typeof domain !== undef && domain !== false ? '; domain=' + domain.replace(/^\./, '') : '');

				return this.get(name);
			},
			get: function (name) {
				name += '=';
				var b = document.cookie.split(';'), c;
				for (var i = 0; i < b.length; i++) {
					c = b[i].replace(/(^\s+)|(\s+$)/g, '');
					while (c.charAt(0) === ' ') {
						c = c.substring(1, c.length);
					}
					if (c.indexOf(name) === 0) {
						return c.substring(name.length, c.length);
					}
				}
				return null;
			},
			remove: function (name) {
				this.set(name, '', -1);
			}
		};

	return cookieManager;

}));
