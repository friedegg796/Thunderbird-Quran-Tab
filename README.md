# Thunderbird Quran Tab
Unofficial Quran.com add-on for Thunderbird, it adds a button that opens a quran.com tab in Thunderbird.
Go to [Thunderbird Add-ons page](https://addons.thunderbird.net/thunderbird/addon/google-messages-tab) for download and reviews.

## Installing within Thunderbird
Open Thunderbird, go to Tools -> Add-ons -> Extensions, search for Quran in the search box and click on "+ Add to Thunderbird".

### Installing from sources
Download the repository, unzip it, go into the files, zip those files, rename the zipped file to Quran-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/friedegg796/Thunderbird-Quran-Tab`
* `cd ./Thunderbird-Quran-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Quran-Tab-${VERSION}-tb.xpi" *`


#### Credits

The [Google Keep Tab](https://github.com/Garoe/Thunderbird-Google-Keep-Tab) where this project was essentially "ripped-off" from.

Quran Tab icon by [SVG Repo](https://www.svgrepo.com).

Credits do not mean condoning them, just means I credited them.