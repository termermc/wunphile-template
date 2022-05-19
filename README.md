# simple-js-ssg-template

Template for a site using simple-js-ssg

# Dependencies
 - Node.js 16+
 - simple-js-ssg (ideally installed as `simple-js-ssg` on the system)
 - inotify-tools, or just the `inotifywait` command (required for `autoreload.sh` script, not necessary for building) 

# Usage
To build the site, make sure `site_out` is empty or does not exist, then run `simple-js-ssg site`.

To automatically reload the site when the source changes, run `autoreload.sh` and it will watch for changes in the `site` directory.