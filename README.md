**I as an authenticated user can upload a CSV so that the owners of the system can
process the data and mail the rider’s licenses**<br>

An endpoint has been created for this. The user trying to upload the .csv has to be autenticated by token. To simplify this
i did not use authorization (scopes)

The user can upload just one file at a time, and just .csv extensions are allowed

these files are stored in the service itself and they would be deleted after every daily run (did not code it)
If these files need to be stored for some time, then better off uploading them on a database



**I as the owner of BA can read an email containing a summary of the nightly activity
so that I can gauge how well my business is doing**<br>

Every night the cronstat setted in kubbernetes executes the file /tasks/notifyOwner.run.js
It creates is check how many docs has been uploaded (/tmp) and then builds the email's body.
Then is passed on to the email service to send it off


