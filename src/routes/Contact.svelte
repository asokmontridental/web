<script>
	import { _ } from "svelte-i18n";
</script>

<html>
	<h1>{$_("contact.title")}</h1>
	<div class="flex-container">
		<div id="map-large">
			<iframe width="500" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
			src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=asok%20montri%20dental%20clinic%20Bangkok&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
			</iframe>
		</div>
		<div id="map-small">
			<iframe width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
			src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=asok%20montri%20dental%20clinic%20Bangkok&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
			</iframe>
		</div>
		<div id="contact-details">
			{#each $_("contact.address") as item}
				<p>{item}</p>
			{/each}
			<p><a href="mailto:asokmontridental@gmail.com">{$_("contact.email")}: asokmontridental@gmail.com</a></p>
			<p><a href="tel:+6626408188">{$_("contact.tel")}: (+66) 02 640 8188</a></p>
			<p><a href="tel:+66863107400">{$_("contact.mobile")}: (+66) 086 310 7400</a></p>
			<a href="https://www.facebook.com/asokmontridentalclinic/"><img src="images/fb-icon.png" width="30px"></a>
			<a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=752cqqtk"><img src="images/line-icon.png" width="30px"></a>
		</div>
	</div>
</html>

<style>
	html{
		background-color: #FFDDDD;
		margin: none;
		padding: 4rem 15%;
		padding-bottom: 6rem;
	}
	.flex-container{
		display: flex;
	}
	#contact-details{
		margin-left: 2rem;
		margin-top: 0;
	}
	#map-small{
		display:none;
	}
	@media screen and (max-width: 992px){
		html{
			padding: 2rem 4rem;
		}
		#map-large{
			display: none;
		}
		#map-small{
			display: block;
		}
	}
	@media screen and (max-width: 720px){
		html{
			padding: 2rem 2rem;
		}
		.flex-container{
			display: block;
		}
		#contact-details{
			margin-left: 0;
			margin-top: 0;
		}
	}
</style>