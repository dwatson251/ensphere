var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
    // Module Based Assets
    .sass("ensphere.scss", "public/package/ensphere/ensphere/css")
    .copy("resources/assets/images/", "public/package/ensphere/ensphere/images/")
	.copy("resources/assets/js/", "public/package/ensphere/ensphere/js/")
	.copy("assets.json", "public/package/ensphere/ensphere/assets.json")

	// Dependencies
	.copy("vendor/bower_components/bootstrap", "public/vendor/bootstrap")
	.copy("vendor/bower_components/jquery", "public/vendor/jquery")

    // Application Based Assets
    .stylesIn("public/package/", "public/css/packages.all.css")
    .scriptsIn("public/package/", "public/js/packages.all.js");
});