<template>
	<div class="author container mx-auto text-center text-white">

		<g-image alt="Author image" class="portrait author__image mx-auto" src="~/assets/images/author.jpg" width="180"
				 height="180"
				 blur="5"/>

		<h1 v-if="showTitle" class="author__site-title mb-4">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro mb-6">
			Freelance Website Developer & Blogger in Newton Abbot
		</p>

		<p class="author__links mt-22">
			<a href="https://twitter.com/MBrooksUK">Follow on Twitter</a>
			<a href="https://github.com/Michael-Brooks">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {

	&__image {
		border-radius: 100%;
		width: 180px;
		height: 180px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
			color: #FFF01A;

			&:hover {
				color: #002F3C;
			}
		}
	}
}
</style>
