# Folder Structure
* The resources folders house the files that are created by you. 
* resources/css/img houses images that are going to be used by CSS, such as background images.
* The vendor folders house files similar to resources, however the difference is that the vendor folers is for files not created by you such as files downloaded and used on the project i.e. normalize.css, etc. The normalize.css file makes browsers render all elements more consistently and in line with modern standards; it's like a CSS reset which makes CSS look the same in all browsers. You **WANT** to link the normalize.css file in the head of your **index.html** file **ABOVE** all other CSS files.

# Google Font
* Select and customize Google font. Paste embeded code underneath style.css.

# 3 Ingredients to Responsive Web Design:
    1. Fluid grid: All layout elements are sized in relative units, such as percentages, instead of absolute units like pixels.
    2. Flexible images: Flexible images are also sized in relative units.
    3. Media queries: Media queries allow you to specify different CSS style rules for different browser widths.

* www.responsivegridsystem.com
* Just like the *normalize.css* file you want to link the *grid.css* file **BEFORE** your CSS files.

## HTML Elements
> header
> nav
> main
> article
> aside
> section
> footer

* The *header* element typically contains the logo, navigation, the hero image, main headings, etc. By using the *header* element you tell search engines this container is not a generic 'div' element, but a container which contains header like content.

# grid.css Notes
* The grid.css file provides code to easily create grid-based columns using specific class names based upon the desired grid
* You should NEVER EVER change the classes which come with the grid. You can however add another class to the grid class and change that instead

# Ionicons Notes
1. If you have not done so already, download Ionicons from the home page
2. Move the ionicons.min.css file into Vendors/css
3. Move the ionicons.eot, ionicons.svg, ionicons.ttf, and ionicons.woff into Vendors/fonts
4. Link the css to the head of the document
5. Click on a icon of interest on the Ionicon page
6. Copy the icon description and paste it as a class using a i element 

# General Notes
* Each webpage should have only one main heading or h1 element
* Line height should be between 120 and 145 percent