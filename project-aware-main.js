!function (p) {
	function h(e, n) {
		n ? e.show() : e.hide()
	}

	function u(e, n, a) {
		e.hide(), n.hide(), a.find("li").removeClass("active")
	}

	function v(e, n, a) {
		e.find(".form-" + n).show(), e.find("." + n + "-submit").show(), a.find("." + n).addClass("active"), p("#main .sidebar").scrollTop(0), setTimeout(function () {
			p(document).scrollTop(0)
		}, 300)
	}

	function otherClicked() {
		var otherButton = p('.en__field--withOther').find('.en__field__item:nth-last-child(2)').find('.en__field__input--radio');

		if (otherButton.length) {
			otherButton.click(function () {
				p(this).parent().hide();
			});

			p('.en__field--withOther').find('.en__field__item:not(:nth-last-child(2))').find('.en__field__input--radio').click(function () {
				otherButton.parent().show();
			});
		}
	}

	function n() {
		var pad = 100;
		var e = p("#main .sidebar"),
			n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		header = p(".site-header"), header.length && (n -= header.outerHeight(!0)), 768 <= a ? (e.css({
			"max-height": n + pad + "px"
		}), e.parent().css({
			"min-height": n + pad + "px"
		})) : (e.css({
			"max-height": "100%"
		}), e.parent().css({
			"min-height": "auto"
		}))
	}

	function i(e, n) {
		var a = function (e) {
				var n = [];
				switch (e) {
					case "USA":
					case "US":
						n = {
							name: "State *",
							regions: [{
								name: "Select",
								code: ""
							}, {
								name: "Alabama",
								code: "AL"
							}, {
								name: "Alaska",
								code: "AK"
							}, {
								name: "Arizona",
								code: "AZ"
							}, {
								name: "Arkansas",
								code: "AR"
							}, {
								name: "California",
								code: "CA"
							}, {
								name: "Colorado",
								code: "NC"
							}, {
								name: "Connecticut",
								code: "CT"
							}, {
								name: "Delaware",
								code: "DE"
							}, {
								name: "District of Columbia",
								code: "DC"
							}, {
								name: "Florida",
								code: "FL"
							}, {
								name: "Georgia",
								code: "GA"
							}, {
								name: "Hawaii",
								code: "HI"
							}, {
								name: "Idaho",
								code: "ID"
							}, {
								name: "Illinois",
								code: "IL"
							}, {
								name: "Indiana",
								code: "IN"
							}, {
								name: "Iowa",
								code: "IA"
							}, {
								name: "Kansas",
								code: "KS"
							}, {
								name: "Kentucky",
								code: "KY"
							}, {
								name: "Louisiana",
								code: "LA"
							}, {
								name: "Maine",
								code: "ME"
							}, {
								name: "Maryland",
								code: "MD"
							}, {
								name: "Massachusetts",
								code: "MA"
							}, {
								name: "Michigan",
								code: "MI"
							}, {
								name: "Minnesota",
								code: "Mn"
							}, {
								name: "Mississippi",
								code: "MS"
							}, {
								name: "Missouri",
								code: "MO"
							}, {
								name: "Montana",
								code: "MT"
							}, {
								name: "Nebraska",
								code: "NE"
							}, {
								name: "Nevada",
								code: "NV"
							}, {
								name: "New Hampshire",
								code: "NH"
							}, {
								name: "New Jersey",
								code: "NJ"
							}, {
								name: "New Mexico",
								code: "NM"
							}, {
								name: "New York",
								code: "NY"
							}, {
								name: "North Carolina",
								code: "NC"
							}, {
								name: "North Dakota",
								code: "ND"
							}, {
								name: "Ohio",
								code: "OH"
							}, {
								name: "Oklahoma",
								code: "OK"
							}, {
								name: "Oregon",
								code: "OR"
							}, {
								name: "Pennsylvania",
								code: "PA"
							}, {
								name: "Rhode Island",
								code: "RI"
							}, {
								name: "South Carolina",
								code: "SC"
							}, {
								name: "South Dakota",
								code: "SD"
							}, {
								name: "Tennessee",
								code: "TN"
							}, {
								name: "Texas",
								code: "TX"
							}, {
								name: "Utah",
								code: "UT"
							}, {
								name: "Vermont",
								code: "VT"
							}, {
								name: "Virginia",
								code: "VA"
							}, {
								name: "Washington",
								code: "WA"
							}, {
								name: "West Virginia",
								code: "WV"
							}, {
								name: "Wisconsin",
								code: "WI"
							}, {
								name: "Wyoming",
								code: "WY"
							}]
						};
						break;
					case "CAN":
					case "CA":
						n = {
							name: "Province *",
							regions: [{
								name: "Select Province",
								code: ""
							}, {
								name: "Alberta",
								code: "AB"
							}, {
								name: "British Columbia",
								code: "BC"
							}, {
								name: "Manitoba",
								code: "MB"
							}, {
								name: "New Brunswick",
								code: "NB"
							}, {
								name: "Newfoundland",
								code: "NL"
							}, {
								name: "Northwest Territories",
								code: "NT"
							}, {
								name: "Nova Scotia",
								code: "NS"
							}, {
								name: "Nunavut",
								code: "NU"
							}, {
								name: "Ontario",
								code: "ON"
							}, {
								name: "Prince Edward Island",
								code: "PE"
							}, {
								name: "Quebec",
								code: "QC"
							}, {
								name: "Saskatchewan",
								code: "SK"
							}, {
								name: "Yukon Territory",
								code: "YT"
							}]
						};
						break;
					default:
						n = {
							name: "Select",
							regions: [{
								name: "Select",
								code: "none"
							}]
						}
				}
				return n
			}(n),
			t = [];
		a.name && (e.parents(".en__field--select").find("label").first().text(a.name), p.each(a.regions, function (e, n) {
			t.push('<option value="' + n.code + '">' + n.name + "</option>")
		})), 1 < a.regions.length ? (e.parents(".en__field--select").removeClass("hidden"), setTimeout(function () {
			e.parents(".en__field--select").addClass("adaptive_placeholder").find("label").first().addClass("focusin")
		}, 100)) : e.parents(".en__field--select").addClass("hidden").removeClass("adaptive_placeholder").find("label").removeClass("focusin"), e.html(t.join(""))
	}

	function C(e) {
		var n, a, t = decodeURIComponent(window.location.search.substring(1)).split("&");
		for (a = 0; a < t.length; a++)
			if ((n = t[a].split("="))[0] === e) return void 0 === n[1] || n[1]
	}

	function b(e, n, a) {
		e.find(".currency").text(n), e.find(".amount").text(a)
	}

	p(document).ready(function () {

		setTimeout(otherClicked(), 5000);

		p('#transaction_recurrpay_Y').click(otherClicked());
		p('#transaction_recurrpay_N').click(otherClicked());

		$('.add_recip_message').appendTo('.en__ecardrecipients__email');

		var a, t;
		p('a[rel="external"]').addClass("externalLink").attr("target", "_blank"), p("a[href*='http://']:not([href*='" + location.hostname.replace("www.", "") + "']), a[href*='https://']:not([href*='" + location.hostname.replace("www.", "") + "'])").each(function () {
				p(this).addClass("externalLink").attr("target", "_blank")
			}), p(".slideshow").get(0) && (p(".slideshow").append('<a class="cycle-prev" href="#">prev</a><a class="cycle-next" href="#">next</a>'), p(".slideshow").cycle({
				fx: "fade",
				slides: "> .item",
				timeout: 1e4,
				autoHeight: "container",
				swipe: !0,
				next: ".slideshow .cycle-prev",
				prev: ".slideshow .cycle-next"
			})), p(".circles").get(0) && p(".circles .circle").each(function (e) {
				var n = p(this).attr("data-value"),
					a = p(this).attr("data-color");
				p(this).circleProgress({
					value: n,
					size: 160,
					fill: a,
					thickness: 5,
					lineCap: "round",
					startAngle: -1.5
				}).on("circle-animation-progress", function (e, n, a) {
					p(this).find("strong").text(a.toFixed(2).substr(2) + "%")
				})
			}),
			function () {
				p.validator.addMethod("amount", function (e, n) {
					return this.optional(n) || /^\d{0,4}(\.\d{0,2})?$/.test(e)
				}, "Please specify a valid amount"), p("#main form").validate({
					rules: {},
					messages: {},
					highlight: function (e, n, a) {
						p(e).parents(".en__field").addClass("validation-error"), "transaction.ccexpire" == p(e).attr("name") ? p(e).parents(".en__field__element").find(".en__field__input").addClass(n).removeClass(a) : p(e).parents(".en__field__element--radio").length && p(e).parents(".en__field--question").length ? p(e).parents(".en__field__element--radio").addClass(n).removeClass(a) : p(e).parents(".en__field__element--radio").length ? p(e).parents(".en__field__element--radio").addClass(n).removeClass(a) : p(e).addClass(n).removeClass(a)
					},
					unhighlight: function (e, n, a) {
						p(e).parents(".en__field").removeClass("validation-error"), "transaction.ccexpire" == p(e).attr("name") ? p(e).parents(".en__field__element").find(".en__field__input").removeClass(n).addClass(a) : p(e).parents(".en__field__element--radio").length ? p(e).parents(".en__field__element--radio").removeClass(n).addClass(a) : p(e).removeClass(n).addClass(a)
					},
					errorPlacement: function (e, n) {
						var a = p(n);
						a.hasClass("en__field__input--other") ? a.parents(".en__field--radio").append(e) : a.parents(".en__field__element--checkbox").length ? a.parents(".en__field__element").prepend(e) : a.parent(".en__field__element").append(e)
					}
				});
				var l = [];
				p("#main form .en__field").each(function (e, n) {
					var a = p(this);
					if (a.hasClass("en__mandatory")) {
						var t = a.children(".en__field__label"),
							i = t.text();
						if (t.length && t.text(i + " *"), a.hasClass("en__field--text")) {
							var s = a.find("input"),
								o = [];
							o.name = s.attr("name"), o.id = s.attr("id"), o.label = i, o.type = s.attr("type"), l.push(o)
						}
						if (a.hasClass("en__field--checkbox")) {
							var s = a.find("input"),
								o = [];
							o.name = s.attr("name"), o.id = s.attr("id"), o.label = "This field", o.type = s.attr("type"), l.push(o)
						}
						if (a.hasClass("en__field--select")) {
							var s = a.find("select"),
								o = [];
							o.name = s.attr("name"), o.id = s.attr("id"), o.label = i, o.tag = "select", l.push(o)
						}
						if (a.hasClass("en__field--radio"))
							if (a.hasClass("en__field--withOther")) {
								var s = a.find(".en__field__item--other").find("input"),
									o = [];
								o.name = s.attr("name"), o.id = s.attr("id"), o.label = s.attr("placeholder"), o.type = s.attr("type"), o.tag = "input", l.push(o)
							} else {
								var s = a.find("input").first(),
									o = [];
								o.name = s.attr("name"), o.id = void 0, o.label = "", o.type = s.attr("type"), o.tag = "input", l.push(o)
							} if (a.hasClass("en__field--splitselect") && a.find("select").each(function (e, n) {
								var a = p(this),
									t = [];
								t.name = a.attr("name"), t.id = a.attr("id"), t.label = i, t.type = a.attr("type"), t.tag = "select", l.push(t)
							}), a.hasClass("en__field--textarea")) {
							var s = a.find("textarea"),
								o = [];
							o.name = s.attr("name"), o.id = s.attr("id"), o.label = i, o.type = s.attr("type"), l.push(o)
						}
					}
				}), p.each(l, function (e, n) {
					var a = [];
					switch (a.required = !0, n.name) {
						case "transaction.donationAmt.other":
							a.amount = !0;
							break;
						case "supporter.emailAddress":
							a.email = !0
					}
					n.label ? a.messages = {
						required: n.label + " is required"
					} : a.messages = {
						required: ""
					}, n.id ? p("#" + n.id).rules("add", a) : p(n.tag + '[name="' + n.name + '"]').rules("add", a)
				})
			}(),
			function () {
				p(".en__component--formblock>.en__submit button:not(.back)");
				var e = p(".formOpen"),
					n = p(".formClose"),
					a = p("form .formOpenText").find("div").text();
				sidebar = p("#main .sidebar"), p(".form-collapse-buttons .formClose").prependTo(sidebar.children("div:not(.formOpenText)").first()), a || (a = "Submit");
				e.find(".js-formOpen-label").text(a), e.click(function (e) {
					p("body").addClass("aside-active"), sidebar.addClass("active")
				}), n.click(function (e) {
					p("body").removeClass("aside-active"), sidebar.removeClass("active")
				})
			}(),
			function () {
				var e = p(".sidebar");
				p(".sidebar.petition-with-widget .en__component--widgetblock").addClass("form-step").addClass("form-step0");
				var n = p(".en__component--socialblock");
				if (e.hasClass("petition-with-share") && n.length) {
					var a = e.attr("class"),
						t = 0;
					if (a) {
						var i = a.split(" ");
						i.forEach(function (e, n, a) {
							pos = e.indexOf("share-step-"), -1 < pos && (t = parseInt(e.replace("share-step-", "")))
						})
					}
					n.addClass("form-step").addClass("form-step" + t)
				}
				e.hasClass("petition-with-share-autosubmit") && n.length && n.on("click", ".en__share", function (e) {
					var n = p(this).parents("form");
					setTimeout(function () {
						n.submit()
					}, 1500)
				})
			}(),

			function () {
				var e = p(".en__field--donationAmt input.en__field__input--other"),
					t = p("#main form"),
					i = t.find(".steps-list"),
					s = t.find(".form-step"),
					o = t.find(".form-step-submit");

				e.attr("placeholder", "Larger Donation"), currency = t.find("#en__field_transaction_paycurrency"), recurrpayField = p('.en__field--recurrpay input[name="transaction.recurrpay"]'), paypalPaymentType = p('#en__field_transaction_paymenttype option[value="Paypal"]'), !0, donationAmt = C("transaction.donationAmt"), chainParam = C("chain"), submitBtn = t.find(".en__submit").find("button:not(.back)").last(), submitBtn.append(' <span class="currency"></span><span class="amount"></span>'), donationAmt ? (currency.parents(".en__field--select").addClass("remove-translition").addClass("loaded"), p("body").addClass("redirected"), currency.parents(".en__field--select").find(".en__field__label").addClass("focusin"), currency.val() || currency.val("USD")) : (currency.parents(".en__field--select").addClass("loaded"), chainParam ? currency.find("option:selected").removeAttr("selected") : setTimeout(function () {
					currency.focus()
				}, 200));
				var a = t.find(".en__field--donationAmt"),
					l = a.find(".en__field__item"),
					d = a.find(".en__field__item--other"),
					n = currency.find("option:selected"),
					r = d.find("input"),
					c = n.text().charAt(0);
				currency.change(function (e) {
					c = p(this).find("option:selected").text().charAt(0)
				});
				var _ = a.find('input[name="transaction.donationAmt"]:checked');
				"OtherOther" == _.val() ? (_.parent().addClass("hidden"), d.addClass("visible").find("input"), b(submitBtn, c, r.val())) : b(submitBtn, c, _.val());
				a.find('input[name="transaction.donationAmt"]').change(function (e) {
					var n = a.find('input[name="transaction.donationAmt"]:checked').val();
					"OtherOther" == n ? (p(this).parent().addClass("hidden"), d.addClass("visible"), r.focus()) : (d.removeClass("visible"), l.removeClass("hidden"), p(".en__field--donationAmt").removeClass("validation-error"), p(".en__field--donationAmt>.error").removeClass("error"), p(".en__field--donationAmt label:not(.en__field__label)").remove(), b(submitBtn, c, p(this).val()))
				}), r.change(function (e) {
					b(submitBtn, c, p(this).val())
				}), p(".en__field--radio").each(function (e, n) {
					radioWraper = p(this), radioWraper.find("input").each(function (e, n) {
						var a = p(this).attr("checked");
						p(this).attr("name");
						if (void 0 !== a) return radioWraper.addClass("checked"), !1
					})
				}), p('input[type="radio"]').each(function (e, n) {});
				var f = p('.en__field--recurrpay input[name="transaction.recurrpay"]:checked');
				if ("Y" == f.val()) {
					h(paypalPaymentType, 0)
				}
				f.parent(".en__field__item").addClass("checked"), recurrpayField.change(function (e) {
					var n = p('.en__field--recurrpay input[name="transaction.recurrpay"]:checked');
					p(".en__field--recurrpay .en__field__item").removeClass("checked"), n.parent(".en__field__item").addClass("checked");
					var a = n.val();
					"Y" == a ? (!0, h(paypalPaymentType, 0)) : (!1, h(paypalPaymentType, 1))
				}), m = p(".en__field--select.en__field--withOther"), m.length && m.each(function (e, n) {
					p(this).hasClass("en__field--245099") && p(this).find(".en__field__item--other")
				}), o.find(".en__submit").prepend('<button style="" type="button" class="back">Back</button>'), t.find(".en__submit").append('<div class="step-errors"></div>'), p(".en__submit button").click(function () {
					var e = i.find(".active");
					if (p(this).hasClass("back")) {
						var n = e.prev(),
							a = n[0].className;
						u(s, o, i), v(t, a, i)
					}
					if (p(this).hasClass("next")) {
						if (p(this).parents(".form-step2").length) return;
						if (1 == t.valid()) {
							var n = e.next();
							if (n && n[0] && n[0].className) {
								var a = n[0].className;
								u(s, o, i), v(t, a, i)
							}
						}
					}
				}), i.find("li").click(function () {
					if (!p(this).hasClass("active")) {
						var e = p(this).attr("class"),
							n = p(this).index(),
							a = i.find(".active").index();
						n != a + 1 && n != a - 1 || (n < a ? (u(s, o, i), v(t, e, i)) : 1 == t.valid() && (u(s, o, i), v(t, e, i)))
					}
				}), p(".en__field--gdpr-opt-in-all-2018 .en__field__input--radio").change(function (e) {
					var n = p(this).val(),
						a = p(this).parents(".en__component--formblock").next(".en__component--copyblock");
					a && ("N" == n ? a.removeClass("hidden") : a.addClass("hidden"))
				});
				var m
			}(), p(".security").webuiPopover({
				width: 300
			}), n(),
			function () {
				var n = p("#en__field_supporter_region"),
					e = p("#en__field_supporter_country"),
					a = e.val();
				t = e, t.parents(".formblock").hasClass("country-states-js");
				var t;
				n.parents(".en__field").append('<div class="en__field--select hidden"><label class="en__field__label"></label><div class="en__field__element en__field__element--select"><select id="supporter-region-select" class="en__field__input en__field__input--select" ></select></div></div>'), $supporterRegionSelect = p("#supporter-region-select"), i($supporterRegionSelect, a), e.change(function (e) {
					i($supporterRegionSelect, p(this).val()), $supporterRegion = p("#supporter_region"), $supporterRegionSelect.is(":visible") ? n.parent(".en__field__element").addClass("hidden").prev("label").addClass("hidden") : n.val("").parent(".en__field__element").removeClass("hidden").prev("label").removeClass("hidden")
				}), $supporterRegionSelect.change(function (e) {
					var n = p(this).val(),
						a = p("#en__field_supporter_region");
					a.prop("value", n)
				}), p("#supporter-region-select").rules("add", "required")
			}(),
			function () {
				p(".en__field--ccexpire .en__field__item:eq(0)").prepend('<label class="en__field__label">Expiry Month *</label>').find("select").wrapAll('<div class="en__field__element en__field__element--select"></div>'), p(".en__field--ccexpire .en__field__item:eq(1)").prepend('<label class="en__field__label">Expiry Year *</label>').find("select").wrapAll('<div class="en__field__element en__field__element--select"></div>');
				if (p(".en__field--select").each(function () {
						p(this).addClass("adaptive_placeholder");
						var e = p(this),
							n = p(this).find("select"),
							a = p(this).find("label");
						if (p(this).hasClass("en__field--withOther")) {
							var t = e.find(".en__field__input--other");
							t.before('<label class="en__field__label en__field_input_other__label"></label>');
							var i = p(this).find(".en__field_input_other__label");
							t.val() && i.addClass("focusin"), t.focusin(function () {
								i.addClass("focusin")
							}), t.focusout(function () {
								p(this).val().length || i.removeClass("focusin")
							})
						}
						n.focusin(function () {
							a.addClass("focusin")
						}), n.focusout(function () {
							p(this).val().length || (e.removeClass("remove-translition"), a.removeClass("focusin"))
						}), e.hasClass("en__field--withOther")
					}), p(".en__field--splitselect").each(function () {
						$this = p(this), $this.addClass("adaptive_placeholder"), $this.find(".en__field__item").each(function (e, n) {
							var a = p(this).find("label"),
								t = p(this).find("select");
							t.focusin(function () {
								a.addClass("focusin")
							}), t.focusout(function () {
								p(this).val().length || a.removeClass("focusin")
							})
						})
					}), p(".en__field--text").each(function () {
						var e = p(this),
							n = e.find("input"),
							a = e.find("label");
						e.addClass("adaptive_placeholder"), n.val() && a.addClass("focusin"), n.focusin(function () {
							a.addClass("focusin")
						}), n.focusout(function () {
							p(this).val().length || a.removeClass("focusin")
						})
					}), p(".en__field--textarea").each(function () {
						var e = p(this),
							n = e.find("textarea"),
							a = e.find("label");
						e.addClass("adaptive_placeholder"), n.val() && a.addClass("focusin"), n.focusin(function () {
							a.addClass("focusin")
						}), n.focusout(function () {
							p(this).val().length || a.removeClass("focusin")
						})
					}), p(".en__field__element--radio .en__field__item, .en__field__element--checkbox .en__field__item").each(function () {
						var e = p(this).find("input").attr("name");
						e = e.split(".").join("_") + "_" + p(this).find("input").val(), p(this).find("input").attr("id", e), p(this).find("label").attr("for", e)
					}), p(".form-container .opt_in_tooltip p").get(0)) {
					var e = p(".form-container .opt_in_tooltip p").html();
					p(".en__field__element--checkbox").append('<div class="opt_in_tooltip"><p><span>?</span>' + e + "</p></div>")
				}
				p(".opt_in_tooltip").on("mouseenter", function () {
					p(this).find("strong").show()
				}), p(".opt_in_tooltip").on("mouseleave", function () {
					p(this).find("strong").hide()
				})
			}(), ["en__field--NOT_TAGGED_22", "en__field--NOT_TAGGED_21"].forEach(function (e, n, a) {
				var t = "." + e;
				optIn = p(t), optInContent = p(t + "_content"), optIn.length && optInContent.length && (optIn.find(".en__field__item").append('<div class="' + e + "_" + n + '"></div>'), p(t + "_" + n).html(optInContent.html()))
			}), p('.form-unsubscribe .en__field__element--radio input[value="N"]').prop("checked", !0), a = p(".en__field--NOT_TAGGED_7"), t = p(".en__field--NOT_TAGGED_3"), p("#en__field_supporter_questions_245099").change(function (e) {
				var n = p(this).val();
				"Dive Centre" == n ? a.addClass("visible") : a.removeClass("visible"), "Instructor" == n ? t.addClass("visible") : t.removeClass("visible")
			}),
			function () {
				var e = p(".sidebar .en__component--copyblock");
				if (e.length) {
					var s = "{user_data~First Name}",
						o = window.location.href;
					e.each(function (e, n) {
						var a = p(this).html(),
							t = a.indexOf(s);
						if (-1 < t) {
							var i = /supporter.firstName=([^&]+)/.exec(o)[1];
							i && (a = a.replace(s, i), p(this).html(a))
						}
					})
				}
			}()
	}), p(window).load(function () {}), p(window).on("orientationchange resize", function (e) {
		n()
	})
}(jQuery);
