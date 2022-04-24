!(function (o) {
	"use strict";
	new bootstrap.Tooltip(
		document.querySelector('[data-bs-toggle="tooltip-primary"]'),
		{
			template:
				'<div class="tooltip tooltip-primary" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		}
	),
		new bootstrap.Tooltip(
			document.querySelector('[data-bs-toggle="tooltip-secondary"]'),
			{
				template:
					'<div class="tooltip tooltip-secondary" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			}
		),
		new bootstrap.Tooltip(
			document.querySelector('[data-bs-toggle="tooltip-success "]'),
			{
				template:
					'<div class="tooltip tooltip-success " role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			}
		),
		new bootstrap.Tooltip(
			document.querySelector('[data-bs-toggle="tooltip-info"]'),
			{
				template:
					'<div class="tooltip tooltip-info" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			}
		),
		new bootstrap.Popover(
			document.querySelector('[data-bs-popover-color="head-primary"]'),
			{
				template:
					'<div class="popover popover-head-primary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}
		),
		new bootstrap.Popover(
			document.querySelector('[data-bs-popover-color="head-secondary"]'),
			{
				template:
					'<div class="popover popover-head-secondary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}
		),
		new bootstrap.Popover(
			document.querySelector('[data-bs-popover-color="primary"]'),
			{
				template:
					'<div class="popover popover-primary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}
		),
		new bootstrap.Popover(
			document.querySelector('[data-bs-popover-color="secondary"]'),
			{
				template:
					'<div class="popover popover-secondary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}
		),
		o(document).on("click", function (t) {
			o('[data-bs-toggle="popover"]').each(function () {
				o(this).is(t.target) ||
					0 !== o(this).has(t.target).length ||
					0 !== o(".popover").has(t.target).length ||
					((
						(o(this).popover("hide").data("bs.popover") || {}).inState || {}
					).click = !1);
			});
		});
})(jQuery);
