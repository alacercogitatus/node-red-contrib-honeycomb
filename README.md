# Headline

## Synopsis

The purpose of this project is to allow node-red to publish a node-red payload to Honeycomb's HTTP Event Collector. 

## Motivation

Wanted to make an easy avenue to publish data into Honeycomb through Node-Red.

## Installation

The easiest way to install is through the Node-Red Palette Manager that can be found in the menu on the top right hand corner of the Node-Red ui.

### Manual install with npm

```sh
npm install -g node-red-contrib-honeycomb
```
### Install from source
From github:
Navigate to the your home directory on linux is is ~/.node-red/node-modules
```sh
git clone https://github.com/alacercogitatus/node-red-contrib-honeycomb.git
```
```sh
cd node-red-contrib-honeycomb
npm install
```

## Setup

[Example Node-RED configuration](https://i.imgur.com/9noXzGI.png)


## Examples:

### Node-RED Functions for converting msg to correct structure for Metric Event Collector. 
