## Summary: 

This is a demo project designed to showcase an issue with the gatsby image plugin, and vercel.

## The issue:

Site builds on vercel that run using the vercel cache cause an error with gatsby image. It seems like the high res versions of some images don't load. The current workaround is to redeploy every commit from the Vercel UI, without using the cache.

An example of this error can be found on the Ffern website: https://ffern-ppa13gqd6-ffern.vercel.app/ <- this deployment made use of the cache, and you can see that most of the images are failing to load.

**NB:** The Ffern site images are stored on airtable, and brought into gatsby through gatsby-source-airtable. This demo site does the same - the airtable base from which the images are source can be found here: https://airtable.com/shrURGIJv6a2AV189
