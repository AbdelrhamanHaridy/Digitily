$(function (e) {
	$(document).on("click", "#but1", function (e) {
		$("body").removeClass("timer-alert");
		var t = $("#message").val();
		"" == t && (t = "Your message"), swal(t);
	}),
		$(document).on("click", "#but2", function (e) {
			$("body").removeClass("timer-alert");
			var t = $("#message").val(),
				o = $("#title").val();
			"" == t && (t = "Your message"),
				"" == o && (o = "Your message"),
				swal(o, t);
		}),
		$(document).on("click", "#but3", function (e) {
			$("body").removeClass("timer-alert");
			var t = $("#message").val(),
				o = $("#title").val();
			"" == t && (t = "Your message"),
				"" == o && (o = "Your message"),
				swal({
					title: o,
					text: t,
					imageUrl: "../../assets/images/brand/logo-3.png",
				});
		}),
		$(document).on("click", "#but4", function (e) {
			$("body").addClass("timer-alert");
			var t = $("#message").val(),
				o = $("#title").val();
			"" == t && (t = "Your message"),
				"" == o && (o = "Your message"),
				(t += "(close after 2 seconds)"),
				swal({ title: o, text: t, timer: 2e3, showConfirmButton: !1 });
		}),
		$(document).on("click", "#click", function (e) {
			$("body").removeClass("timer-alert");
			var t = $("#type").val();
			swal({ title: "Title", text: "Your message", type: t });
		}),
		$(document).on("click", "#prompt", function (e) {
			$("body").removeClass("timer-alert"),
				swal(
					{
						title: "Add",
						text: "Enter your message",
						type: "input",
						showCancelButton: !0,
						closeOnConfirm: !1,
						inputPlaceholder: "Your message",
					},
					function (e) {
						"" != e && swal("Input", "You have entered : " + e);
					}
				);
		}),
		$(document).on("click", "#confirm", function (e) {
			$("body").removeClass("timer-alert"),
				swal({
					title: "Alert",
					text: "Are you really want to exit",
					type: "warning",
					showCancelButton: !0,
					confirmButtonText: "Exit",
					cancelButtonText: "Stay on the page",
				});
		}),
		$(document).on("click", "#click", function (e) {
			swal(
				"Congratulations!",
				"Your message has been succesfully sent",
				"success"
			);
		}),
		$(document).on("click", "#click1", function (e) {
			$("body").removeClass("timer-alert"),
				swal({
					title: "Alert",
					text: "Waring alert",
					type: "warning",
					showCancelButton: !0,
					confirmButtonText: "Exit",
					cancelButtonText: "Stay on the page",
				});
		}),
		$(document).on("click", "#click2", function (e) {
			$("body").removeClass("timer-alert"),
				swal({
					title: "Alert",
					text: "success  alert",
					type: "error",
					showCancelButton: !0,
					confirmButtonText: "Exit",
					cancelButtonText: "Stay on the page",
				});
		}),
		$(document).on("click", "#click3", function (e) {
			$("body").removeClass("timer-alert"),
				swal({
					title: "Alert",
					text: "Info alert",
					type: "info",
					showCancelButton: !0,
					confirmButtonText: "Exit",
					cancelButtonText: "Stay on the page",
				});
		});
});
