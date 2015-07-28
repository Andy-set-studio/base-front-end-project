Base Front End Project
======================

A useful front-end base project. A little SCSS framework is included along with a mini jQuery starting point. A HTML5 boilerplate is added for good measure too.

Please only use as a base. 

[andy-bell.co.uk](http://andy-bell.co.uk)

##This project is no longer maintained. Please check out the [evolved version](https://github.com/4ndeh/Front-End-Base-Project).

SCSS Structure
--------------


**framework** - You shouldn't modify any of these files if you can help it. Customisations can be made within the vars area in **project**

- **_build.scss** - This is a central file that pulls all the framework resources together

- **base** 
	- **_csswizardry-grids.scss** - [CSSWizardry grid system](https://github.com/csswizardry/csswizardry-grids)
	- **_reset.scss** - Simple CSS reset/normalize

- **mixins**
	- **_animate.scss** - Mixin that prefixes animation calls
	- **_animation.scss** - Mixin that prefixes animation definitions
	- **_font-size.scss** - Font size media query for generating REM unit font sizes and line-heights
	- **_ie.scss** - IE / Legacy mixin for easily adding pesky fixes
	- **_media-query.scss** - Human readable media queries
	- **_opacity.scss** - Cross browser friendly opacity
	- **_print.scss** - Simple print styles media query
	- **_vendor.scss** - Vendor prefixer
	- **_word-wrap.scss** - Simple word-wrap css helper
	- **_triangle.scss** - CSS triangles ftw
	- **_hover.scss** - Useful hover wrapper
	- **_selection.scss** - To help with pretty selections
	- **_button.scss** - Base, useful button styles
	- **_form-field.scss** - Base, useful form-field styles
	

**project**

- **animations** - Add all your animations here and import in global.scss
	
- **components** - Add all your reusable component partials here and import in global.scss

- **helpers** - Add all your reusable helpers here and import in global.scss

- **layouts** - Add major layout partials here and import in global.scss

- **mixins** - Add project specific mixins and import in global.scss

- **vars** 
	- **_metrics.scss** - All metric vars such as breakpoints, widths etc. live here
	- **_typography.scss** - All typography vars such as fonts, base font sizes etc. live here
	- **_color.scss** - All color vars live here
	- **_generic.scss** - All generic vars that don't fit into the other groups live here
	
- **global.scss** - This is the file that compiles to global.css. This file should only feature global styles such as body, html and wrapper etc. This file also imports the framework, components and layouts.

- **_shame.scss** - This is for shameful hacks. I'd recommend only using this file to hack where absolutely needed. Remember - every time you write a hack, a cute kitten dies.
