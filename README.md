# Skip Google paid tracking

Recently I went to more than one place where extremely closed Pi-hole setups disable googleadservices.com by DNS blocking. This led to all paid results in Google not working as they go through a tracking system. This Chrome/Firefox extension skips the URL masquerading that happens when you click a link. This restores the navigation and nobody complains anymore ;-)

To install in Chrome enable the Developers option in the Chrome extensions settings and point to this folder. Chrome will read the manifest file and install the app localy.

To install in Firefox browse to about:debugging and them Load Temporary Add-on and point to the manifest.json.

Depending on where you live you have to change the manifest file to match your google domain. It is not possible make a wildcard like google.* so check the manifest and change it accordingly.

Technically what this extension does is to remove the function responsible for the masquerading as soon as it is loaded.

This project is not meant for production and should not be forked to be put in the store as it probably violates the google search terms.
