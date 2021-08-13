# Trufan.MathApp.DataApi

This is the dataapi for simple math functions
The endpoints are NOT protected by any auth method just to allow testing via postman/swagger interface. 

## HOW TO RUN
Run `cd src` -> `npm start` to start the application at http://localhost:5000 by default.

If you have docker installed locally then run the following command instead at the root of project 
`docker build . -t trufanDataApi` -> ``docker run -p 5000:5000 -d trufanDataApi`

## APIDOCS
To see apidocs navigate to http://localhost:5000/api-docs

