# apigear.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/4338fe9f-bd3c-421f-889c-43f6840980ba/deploy-status)](https://app.netlify.com/sites/gallant-goodall-bad756/deploys)


The source code for the apigear landing page.

# Build

    gir clone git@gitlab.com:xpixels/apigear.io.git
    cd apigear.io
    git submodule init && git submodule update

Install hugo, see https://gohugo.io/getting-started/installing/.

on Mac it's normally

    brew install hugo

Preview site:

    hugo server

# Deploy

We use netlify to deploy the site. The site is auto-deployed on each commit to master. So please use branches and merge requests for content.

See https://gallant-goodall-bad756.netlify.com/

Netlify account is at:

    * https://app.netlify.com/teams/jryannel-thpinn8/sites


# Hugo Docs

* https://gohugo.io/documentation/

We use the Fresh Theme:

* https://themes.gohugo.io/hugo-fresh/
