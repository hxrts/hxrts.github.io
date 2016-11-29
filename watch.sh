#!/bin/bash

fswatch src js | (while read; do sh compile.sh; done)