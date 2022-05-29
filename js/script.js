$(function () {
		$('.column-left').append('<div class="news currency"><div class="news-text" >Курс рубля на <span class="data"></span></div><div class="news-property">USD<span class="usd">20</span class="eur">EUR<span></span>50</div></div>')
		// Запрос курса валют
		$.get("https://api.apilayer.com/fixer/latest?symbols=RUB&base=USD", {'apikey': 'pJiNYMpP3CCJpFTsEcRCQC3Ug0jicDqr'},
		function (currencyUSD) {

			// выводит значение из ответа от сайта по ключу (ключи указаны в объекте) Здесь tofixed(2) - округляет до 2х значений после запятой
			console.log(currencyUSD.rates.RUB.toFixed(2));
			// Добавляет значение курса рубля
			$('.news-property .usd').text(currencyUSD.rates.RUB.toFixed(2));
			}
	);
	
	$.get("https://api.apilayer.com/fixer/latest?symbols=RUB&base=EUR", {'apikey': 'pJiNYMpP3CCJpFTsEcRCQC3Ug0jicDqr'},
	function (currency) {
		// выводит значение из ответа от сайта по ключу (ключи указаны в объекте)
		$('.news-property .eur').text(currency.rates.EUR.toFixed(2));

		}
	);

});
