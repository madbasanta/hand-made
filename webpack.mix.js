const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);


mix.styles([
    'resources/css/frontend/font-awesome.css',
    'resources/css/frontend/slick.css',
    'resources/css/frontend/slick-theme.css',
    'resources/css/frontend/animate.css',
    'resources/css/frontend/themify-icons.css',
    'resources/css/frontend/bootstrap.css',
    'resources/css/frontend/style.css'
], 'public/css/frontend.css').version();

mix.scripts([
    'resources/js/frontend/jquery-3.3.1.min.js',
    'resources/js/frontend/slick.js',
    'resources/js/frontend/slick-animation.min.js',
    'resources/js/frontend/menu.js',
    'resources/js/frontend/lazysizes.min.js',
    'resources/js/frontend/feather.min.js',
    'resources/js/frontend/bootstrap.bundle.min.js',
    'resources/js/frontend/bootstrap-notify.min.js',
    'resources/js/frontend/theme-setting.js',
    'resources/js/frontend/script.js',
    'resources/js/frontend/custom-slick-animated.js',
], 'public/js/frontend.js').version();