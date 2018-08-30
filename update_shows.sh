#!/usr/bin/env bash
KEY=
SHEET_NAME=shows
SHEET_LOCATION="https://docs.google.com/spreadsheets/d/${KEY}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}"
FILE_PATH=""
TEMP_FILE="/tmp/shows.csv"

function download_latest() {
  curl -s \
       "${SHEET_LOCATION}" > \
       ${TEMP_FILE}
}

download_latest

diff ${TEMP_FILE} ${FILE_PATH}
if [ $? -eq 0 ]
then
        echo "files are the same"
else
rsync -avz \
    ${TEMP_FILE}  ${FILE_PATH}
fi
