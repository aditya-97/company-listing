# company-listing

## Running in dev environment
- After cloning the project, create a python virtual environment
- Install the python dependencies from *requirements.txt* file
- Now in terminal, make sure you are in project folder and run this command
`python manage.py migrate`
- Then we have to serve static files, for that run this command
`python manage.py collectstatic`
- To start the server, run the following command
`python manage.py runserver`

The local server will be started at *localhost:8000*. 
Ctrl+C to stop server
