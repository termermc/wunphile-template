#!/bin/bash
export LC_ALL="en_US.UTF-8"

function mk() {
	printf "Generating... "
	rm -r site_out/* || true
	simple-js-ssg site
	echo "Done"
}

mk

inotifywait -q -m -e close_write -r site/* |
while read -r filename event; do
	mk
done
