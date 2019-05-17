# Headline

## Synopsis

The purpose of this project is to allow node-red to publish a node-red payload to Honeycomb's HTTP Event Collector. 

## Motivation

Wanted to make an easy avenue to publish data into Honeycomb through Node-Red.

## Installation

The easiest way to install is through the Node-Red Palette Manager that can be found in the menu on the top right hand corner of the Node-Red ui.
Maybe. Not sure. 

Or just clone into `$NODE_RED_HOME/node_modules`.

## Setup

Add Dataset and writeKey into the node configuration. Send "msg.payload". Profit. Or don't. Your life.


## Examples:

### Node-RED Functions for converting msg to correct structure for Metric Event Collector. 
