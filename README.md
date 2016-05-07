# Auction Site with AJAX

## Description

Given an existing application, add AJAX for submitting information without reloading the page.

## Objectives

* Understand what AJAX is and how it can enrich a Rails application.
* Implement AJAX to refresh information on a page.
* Implement AJAX to accept a form submission without reloading its page.

This application is an auction site. You can view a list of all items for sale, can make new items, and can make bids on items.

* The place bid form should be remote, and should (a) update the highest bid and (b) update the next bid field to be $10 higher than the max bid.
* Every 15 seconds, these same two areas should update if someone else places a new bid.

In order to test the case of "someone else" placing a bid, feel free to have the app open in two different tabs.  You can make a bid in one and then check that the other one updates automatically.

## Notes

* [AJAX in Rails 4 Tutorial](http://www.gotealeaf.com/blog/the-detailed-guide-on-how-ajax-works-with-ruby-on-rails)
* [Foundation Documentation](http://foundation.zurb.com/docs/)
