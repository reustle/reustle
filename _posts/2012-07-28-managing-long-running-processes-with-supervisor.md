---
title: Managing Long-Running Processes With Supervisor
permalink: managing-long-running-processes-with-supervisor.html
layout: basic-post
---

**Note**: This article was created in 2012 and is probably outdated. You might want to find more up-to-date source of information.

[Supervisor](http://supervisord.org/) is a great tool to start and manage long-running processes and the log files associated with them. It offers a lot of helpful features and is easy to get up and running.


## Install &amp; Start Supervisor

Supervisor works out of the box, so this part is easy.


<pre>
sudo apt-get install supervisor -y && sudo supervisord
</pre>


## Our First Program

Supervisor looks for configuration files in **/etc/supervisor/conf.d/** and it is a good idea to keep a single conf file per process. To start, let's set up a simple long-running python script. Don't pay too much attention to the contents of the conf file, we'll go over that later.

_Create /etc/supervisor/conf.d/test_python.conf containing:_


<pre>
[program:test_python]
command=python -u test.py
directory=/home/ubuntu
stdout_logfile=/home/ubuntu/test_python_output.txt
redirect_stderr=true
</pre>

_Create ~/test.py containing:_


<pre>
import time
while True:
    print(time.ctime())
    time.sleep(1)
</pre>


When creating the conf file, be sure to replace **/home/ubuntu** both times with the path to your home directory (~ isn't allowed). If you run test.py manually you'll see it prints out the time once per second.


## Using SupervisorCTL

SupervisorCTL is the tool you will use to manage everything in Supervisor. Start by running **sudo supervisorctl** and then typing **reread**. The reread command goes through the conf.d directory and loads any new program conf files. Once you see the new test_python program available, you can use the add command to load and start it (**add test_python**). The **status** command shows you all running processes, their PID and how long they've been running. Here is a short list of my commonly used supervisorctl commands and what they do.

<table class='table table-striped'>
    <tr>
        <td>reread</td>
        <td>Reload all program conf files from the conf.d directory.</td>
    </tr>
    
    <tr>
        <td>add [program_name]</td>
        <td>Add a newly created conf file to Supervisor and start the process.</td>
    </tr>
    
    <tr>
        <td>status</td>
        <td>Check the status of all programs currently managed by Supervisor.</td>
    </tr>
    
    <tr>
        <td>start [program_name]</td>
        <td>Start the given program. Used often with one-time scripts.</td>
    </tr>
    
    <tr>
        <td>restart [program_name]</td>
        <td>Restart the given program.</td>
    </tr>
    
    <tr>
        <td>tail -f [program_name]</td>
        <td>Watch the log file in real-time (same as UNIX tail -f [filename]).</td>
    </tr>
    
    <tr>
        <td>help</td>
        <td>List all available commands.</td>
    </tr>
</table>


Exit supervisorctl and check your log file (~/test_python_output.txt) to see that it is still running. If it isn't, you may have missed a step.


## Program Configuration Files

There is a wide array of options you can use while setting up your program configuration file. I've listed my favorite options below. For a full list of commands and their parameters, check out [the settings documentation](http://supervisord.org/configuration.html#program-x-section-settings)

<table class='table table-striped'>
    <tr>
        <td>command</td>
        <td>The command to run.</td>
    </tr>
    
    <tr>
        <td>directory</td>
        <td>The directory to run the command in.</td>
    </tr>
    
    <tr>
        <td>numprocs</td>
        <td>Automatically start N instances of that process.</td>
    </tr>
    
    <tr>
        <td>autostart</td>
        <td>A boolean which tells whether to run automatically or not when Supervisor starts.</td>
    </tr>
    
    <tr>
        <td>autorestart</td>
        <td>Automatically restart a process that dies, under specific conditions (see docs).</td>
    </tr>
    
    <tr>
        <td>stdout_logfile</td>
        <td>Where to log the output of your program.</td>
    </tr>
    
    <tr>
        <td>redirect_stderr</td>
        <td>Tell supervisor whether to include stderr in your standard output file.</td>
    </tr>
    
    <tr>
        <td>stdout_logfile_maxbytes</td>
        <td>The size a log file is allowed to grow to until it is auto rotated.</td>
    </tr>
    
    <tr>
        <td>stdout_logfile_backups</td>
        <td>The number of rotated log files to keep.</td>
    </tr>
</table>


## Web Interface

Supervisor provides a really nifty web interface to monitor and restart your processes. Just update the following file, restart supervisor, and you'll see it on port 9001. Feel free to change the port and protect it using HTTP Auth or whatever you see fit.

_Add the following to /etc/supervisor/supervisord.conf_


<pre>
[inet_http_server] 
port=*:9001
</pre>


## One-Time Scripts

I've found that Supervisor also works great for running commonly used scripts that have multiple parameters or large log files. Be sure to set **autostart** and **autorestart** in the conf file to false, so your script doesn't end up running repeatedly.


## Examples

_MongoDB_

<pre>
[program:mongod_member]
command=/home/ubuntu/mongodb-linux-x86_64-2.0.6/bin/mongod --dbpath /mnt/mongo/ --replSet mongo5 --nojournal
directory=/home/ubuntu
stdout_logfile=/mnt/log/mongod.log
redirect_stderr=true
</pre>

