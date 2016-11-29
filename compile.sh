#!/bin/bash

stylus src/world.styl -o world.css --compress;
pug src/index.pug -o .
