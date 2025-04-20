# Manual Hosting Instructions for Next-Movies App

The application has been built and exported as a static site in the `out` directory. Follow these instructions to host it manually on various platforms.

## Files to Upload

Upload the entire contents of the `out` directory to your web hosting service. This includes:

- All HTML files (index.html, movie.html, etc.)
- The `_next` directory with all assets and JavaScript
- All image files and other static assets
- The `.htaccess` file (for Apache servers)

## Hosting Configuration

### Shared Hosting (cPanel, DirectAdmin, etc.)

1. Upload all the files from the `out` directory to your web hosting public directory (usually `public_html` or `www`)
2. Make sure the `.htaccess` file is included to handle URL routing

### VPS or Dedicated Server

#### For Apache:
1. Upload all files to your web root directory
2. Make sure mod_rewrite is enabled:
   ```
   sudo a2enmod rewrite
   sudo service apache2 restart
   ```
3. Ensure the `.htaccess` file is included and working

#### For Nginx:
1. Upload all files to your web root directory
2. Use the provided `nginx.conf` as a reference to configure your server
3. Update the server_name and root path in the config
4. Reload Nginx:
   ```
   sudo nginx -t
   sudo service nginx reload
   ```

### Environment Variables

The application uses environment variables for API keys and download links. These are embedded in the static build, but for future builds you may need to update:

- NEXT_PUBLIC_TMDB_API_KEY
- NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN
- NEXT_PUBLIC_DOWNLOAD_SMART_LINK_4K
- NEXT_PUBLIC_DOWNLOAD_SMART_LINK_1080P
- NEXT_PUBLIC_DOWNLOAD_SMART_LINK_720P

## Testing Your Deployment

After uploading, visit your domain and test:

1. The homepage loads correctly
2. Clicking on a movie shows the detail page with the download button
3. The download button shows options for 4K, 1080p, and 720p
4. The links correctly include the movie ID in the URL

## Troubleshooting

- If page transitions aren't working, check your server configuration for proper URL handling
- If API calls fail, verify your API keys are correctly set
- If download links don't work, check the environment variables settings 