# Zero To Nine Marketing WordPress Theme

A modern, SEO-optimized WordPress theme designed for Zero To Nine Marketing Agency. This theme replicates the exact design and functionality of the Next.js website.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Built with SEO best practices
- **Custom Post Types**: Case Studies and Testimonials
- **Custom Fields**: Advanced meta boxes for content management
- **Performance**: Optimized for speed and Core Web Vitals
- **Analytics Ready**: Google Analytics 4 and Facebook Pixel integration
- **Modern UI**: Clean, professional design with smooth animations

## Installation

### Method 1: Upload via WordPress Admin

1. Download the theme files
2. Go to **Appearance > Themes** in your WordPress admin
3. Click **Add New** then **Upload Theme**
4. Choose the theme zip file and click **Install Now**
5. Activate the theme

### Method 2: Upload via FTP

1. Extract the theme files
2. Upload the `wordpress-theme` folder to `/wp-content/themes/`
3. Rename the folder to `zero-to-nine-marketing`
4. Go to **Appearance > Themes** and activate the theme

## Setup Instructions

### 1. Required Plugins

Install and activate these plugins:

- **WPGraphQL** - For headless CMS functionality
- **WPGraphQL for Yoast SEO** - For SEO metadata
- **Yoast SEO** - For SEO optimization
- **Contact Form 7** - For contact forms (optional)

### 2. Theme Customization

Go to **Appearance > Customize** to configure:

- **Hero Section**: Update title and subtitle
- **Contact Information**: Add phone and email
- **Logo**: Upload your custom logo
- **Colors**: Customize brand colors

### 3. Menu Setup

1. Go to **Appearance > Menus**
2. Create a new menu called "Primary Menu"
3. Add your pages and assign to "Primary Menu" location
4. Create a "Footer Menu" for footer links

### 4. Content Setup

#### Homepage
- The homepage uses the `index.php` template
- All content is hardcoded in the template
- Update client logos, case studies, and testimonials in the template files

#### Blog Page
- Create a new page called "Blog"
- Set the page template to "Blog Page"
- The blog will automatically display your posts

#### Case Studies
- Go to **Case Studies** in the admin menu
- Add new case studies with custom fields:
  - Client Name
  - Key Metrics
  - Results

#### Testimonials
- Go to **Testimonials** in the admin menu
- Add testimonials with custom fields:
  - Author Name
  - Author Role/Company
  - Rating (1-5)

### 5. Images Setup

Upload these images to `/wp-content/themes/zero-to-nine-marketing/assets/images/`:

- `favicon.ico`
- `apple-touch-icon.png`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `site.webmanifest`
- `gsc-performance.jpg`
- `gsc-analytics.jpg`
- `meta-ads-dashboard.jpg`
- `google-ads-dashboard.png`
- Client logos (iorders-logo.png, south-district-logo.png, etc.)

### 6. Analytics Setup

The theme includes Google Analytics 4 and Facebook Pixel integration:

- **Google Analytics**: Update the tracking ID in `header.php` (line 25)
- **Facebook Pixel**: Update the pixel ID in `header.php` (line 46)

## File Structure

```
wordpress-theme/
├── style.css                 # Main stylesheet with theme info
├── index.php                 # Homepage template
├── header.php                # Header template
├── footer.php                # Footer template
├── single.php                # Single post template
├── page-blog.php             # Blog page template
├── functions.php             # Theme functions and setup
├── assets/
│   ├── css/                  # Additional CSS files
│   ├── js/
│   │   ├── main.js          # Main JavaScript functionality
│   │   └── animations.js    # Animation effects
│   └── images/              # Theme images and assets
└── README.md                # This file
```

## Customization

### Colors
The theme uses CSS custom properties for colors. Update these in `style.css`:

```css
:root {
  --brand-blue: #0099f1;
  --brand-cyan: #5ce1e6;
  --brand-gradient: linear-gradient(135deg, #ffc65b, #ff3131, #0099f1, #5ce1e6);
}
```

### Client Logos
Update the client logos array in `functions.php` (line 200):

```php
function ztn_get_client_logos() {
    return array(
        array(
            'name' => 'Client Name',
            'type' => 'Client Type',
            'description' => 'Client description',
            'logo' => get_template_directory_uri() . '/assets/images/client-logo.png',
            'url' => 'https://client-website.com/'
        ),
        // Add more clients...
    );
}
```

### Pricing Plans
Update the pricing plans in `functions.php` (line 230):

```php
function ztn_get_pricing_plans() {
    return array(
        array(
            'name' => 'Plan Name',
            'price' => '$XXX',
            'pages' => 'X Content Pages',
            'features' => array('Feature 1', 'Feature 2'),
            'popular' => false
        ),
        // Add more plans...
    );
}
```

## Performance Optimization

The theme is optimized for performance:

- **Minified CSS**: Uses Tailwind CSS CDN
- **Optimized Images**: Proper image sizing and lazy loading
- **Clean Code**: Minimal JavaScript and efficient PHP
- **Caching Ready**: Compatible with caching plugins

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Support

For support and customization requests, contact the development team.

## Changelog

### Version 1.0
- Initial release
- Complete theme setup
- Custom post types
- Responsive design
- SEO optimization
- Analytics integration

## License

This theme is proprietary software developed for Zero To Nine Marketing Agency.
