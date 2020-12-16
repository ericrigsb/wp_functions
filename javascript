function listen_javascript() {
  if (is_page ('179')) { 
    ?>
        <script type="text/javascript">
			// Code from podnews.net
			var iTunesUrl="https://podcasts.apple.com/us/podcast/beers-in-the-lot/id1528896738?uo=4";
			var GooglePodcastsUrl="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zMjAzNWFmYy9wb2RjYXN0L3Jzcw==";
			var WebsitePlayerUrl="https://beersinthelot.com/listen-subscribe";
			// The WebsitePlayerUrl is the web page for your podcast. We link here to our own.
			// You can adjust the WebsitePlayerUrl above to point to your own website

			if (navigator.userAgent.includes("Android")) {window.location=GooglePodcastsUrl;}
			else if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad") || navigator.userAgent.includes("iPod")) {window.location=iTunesUrl;}
			else {window.location=WebsitePlayerUrl;}
        </script>
		<NOSCRIPT>Your browser does not support JavaScript. Oh no! But you can search for "Beers in The Lot" in your favourite podcast app.</NOSCRIPT>
    <?php
  }
}
add_action('wp_head', 'listen_javascript');
function discord_javascript() {
  if (is_page ('204')) { 
    ?>
        <script type="text/javascript">
			var DiscordUrl="https://discord.gg/wMH46Bd";
			{window.location=DiscordUrl;}
        </script>
    <?php
  }
}
add_action('wp_head', 'discord_javascript');
