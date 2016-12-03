# Folder Structure
	* The resources folders house the files that are created by you. 
	* resources/css/img houses images that are going to be used by CSS, such as background images.
	* The vendor folders house files similar to resources, however the difference is that the vendor folers is for files not created by you such as files downloaded and used on the project i.e. normalize.css, etc. The normalize.css file makes browsers render all elements more consistently and in line with modern standards; it's like a CSS reset which makes CSS look the same in all browsers. You *WANT* to link the normalize.css file in the head of your **index.html** file *ABOVE* all other CSS files.

# 3 Ingredients to Responsive Web Design:
	1. Fluid grid: All layout elements are sized in relative units, such as percentages, instead of absolute units like pixels.
	2. Flexible images: Flexible images are also sized in relative units.
	3. Media queries: Media queries allow you to specify different CSS style rules for different browser widths.

	* www.responsivegridsystem.com
	* Just like the **normalize.css** file you want to link the **grid.css** file *BEFORE* your CSS files.