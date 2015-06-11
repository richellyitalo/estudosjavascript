var PodcastError = function(message)
{
	this.name = 'Erro de execução';
	this.message = 'Erro: ' + message;
};
var getUrl = function(obj)
{
	var regExp = /^https?:\/\/\w.*[xml,mp3]$/;
	if (regExp.test(obj.url)) {
		return obj.url;
	}
	else{
		throw new PodcastError("URL Inválida");
	}
};
var feeds = [
	{
		title: 'Jovem nerd',
		url: 'http://jovemnerd.com.br/podcasts.mp3'
	},
	{
		title: 'Monster Freak',
		url: 'http://monsterfreak.com.br/podcats.xml'
	},
	{
		title: 'Papricast',
		url: 'http://papricast.com.br/podcats.ini'
	}
];

try
{
	var urls = feeds.map(function(element)
	{
		console.log( getUrl(element) );
	});
} catch(e)
{
	console.log(e.message);
}