# Description of the plugin

## Configuration

On the settings screen, you can set:

* Interface language. Applied immediately. Stored in the browser's local storage.
* Period for analysis: this is the time for which the analysis of tasks is carried out.
  Tasks completed before the start of the period are ignored.
* Filters: Tasks on the board will be filtered by the selected filters.
  It is convenient to set filters "Urgent" and "Not urgent" tasks to 
  build statistics on different types of tasks.
* Swimlanes: select the lines that will be included in the statistics calculation.
* Columns: distribution of columns by type.
  * Mutually exclusive:
    * Skip: ignore the column in the calculation. On a kanban board, this is usually a hidden backlog column.
    * Work: columns indicating the statuses of tasks that are being worked on (analysis, development, testing).
    * Wait: Columns indicating the status of tasks that are waiting to be taken to the next stage of work.
      These columns are buffers.
    * Ready: columns indicating the statuses of tasks after they have been completed.
  * Lead: these are the columns that form the lead time. 
    This is usually a solid line from the first status after the commitment 
    by the team (including it) to the last status before the release 
    of the commitment (including it). 
    The next status in order is after the release.
  * Cycle: same as delivery time, but used to define, for example, the development cycle. 
    It is used to separately estimate the development time, as well as to triage 
    tasks before development.
  * Field for issue size (type Option): a field that lists the issue/hypothesis size values. 
    Used to more accurately predict the execution time of tasks of similar size.
  * Field for value-acquisition lifecycle (type Option): a field that lists 11 
    [Value Life Cycle Function](#pattern-of-value-acquisition-lifecycle-functions) values.
    Values must necessarily begin with a digital code, 
    so the plugin will determine the value regardless of the language.
  * Field for shelf-life ratio (type Option): a field that lists 5 lifetime factor values 
    (the ratio of production time to how long it will be profitable). 
    Values must contain the strings "2:1", "1:1", "1:2", "1:5" and "1:10", 
    as the plugin will determine the value from them regardless of the language.
  * Field for desired delivery date (type Date or DateTime): a field that stores 
    the desired delivery date within the SLA / SLE. Keep in mind that this is not a deadline date.
    This is a soft date: delaying delivery after this date will not result in 
    large losses or regulatory responses.
  * Field for deadline date (type Date or DateTime): a field that stores the date 
    after which a delay in delivery will cause large losses or 
    a reaction from supervisory authorities.
    
## How to use charts

Description of work with plug-in screens. 

### Main screen

This screen contains all the main metrics of the Kanban method.

The x-axis plots the aggregation periods.
All metrics are collected by days at the border of the day at the user's local time 
and aggregated into a period.
For example, if the date 02/23/2023 has the following values: 
4 in throughput, 34 in delivery, 32 in cycle, 26% efficiency, 74% loss, 89.47 average WIP. 
This means that in the period ending 02/23/2023 (let's say this is a week):
* average daily work in progress for 7 days was 89.47
* during this time the team completed 4 tasks
* these tasks spent an average of 26% of their time in work columns
* these tasks spent an average of 74% of their time in wait columns
* average lead time for these tasks was 34 days (calendar)
* the average cycle time (let's say the development cycle) of these tasks was 32 days (calendar)

If you are looking at the business goals board, then the delivery 
time can be set from the moment we took the idea in development to release. 
And then it will be time-to-market. If, at the same time, the cycle time is set 
from the acceptance by the development team of the goal for grooming to the release, 
then we will get the development cycle time and, as a bonus, we will receive 
a triage of tasks before giving them to the development team.

### Total WIP

On this screen, you can evaluate the trend of daily WIP values aggregated by period.

And also understand how long the team will implement the current work in progress 
based on the average, median and 75 percentile of throughput. 
If you have an analysis period of 2 weeks, and the current WIP team will 
implement 30 periods, then I have a question for you: do you really need so
much work in progress that you have already invested in, 
that it will have to be done for more than a year?

### Accumulated WIP

On this screen, you can evaluate the accumulated work in days.

This is the total number of days spent by all unfinished tasks on the board.
In addition, the total number of days spent by all incomplete tasks 
on the board is shown separately in the work and waiting columns.

### WIPs by columns

It makes a little more sense than the total WIP.

Here you can estimate how many tasks were aggregated in each column.

For example, looking at the medians or modes, you can estimate the typical WIP in each column.
Assess their dynamics.
Also, these graphs will show bottlenecks: there is always a lot of work in front of 
them in the buffers.
Of course, provided that there are no WIP limits in the buffer columns.

And looking at the minimums in the buffer columns, you can see that you have tightened 
the WIP limits too much:
if the minimum before the bottleneck is zero, then most likely your bottleneck was 
idle due to lack of work.

### Time by columns

Here you can estimate how much time spent completed in each column aggregated.

The aggregated values of the times in the waiting columns will allow 
you to make decisions on changing processes in the direction of reducing idle tasks.

### Lead & cycle times

Here you can evaluate the trends and range of lead and cycle times.

### Bottleneck search

Heat map of the time that the tasks spent in each of the columns.

The wait columns are merged with the columns that follow them, 
because the time to wait before the bottleneck is a meaningful indicator.

### Lead time distributions

A diagram based on which you can make a probabilistic forecast about the time to complete tasks.
Lead Time is plotted along the horizontal axis, and the number of tasks completed with 
such Lead Time is plotted along the vertical axis.

Based on the resulting histogram, you can calculate the probability of completing 
tasks for a certain Lead Time.

### Control Chart

Graph showing the variance of task execution time (Lead Time). 
It is used to find and analyze the causes leading to the instability of the workflow.

Just for the search, a plate was made: it allows you to find tasks that you have not 
yet discussed (indicate the number of periods from the previous meeting). 
We also set the threshold in percentiles of time, exceeding which marks the task as suspicious.
On the graph, the search area (red) will be shown for the delivery time.
But the search will be done for the time for each column, as well as the delivery
time and cycle time.

In each individual case, the tasks that come across are added to the list of "winners"
in the corresponding column. This will allow you to analyze tasks that have been in
a bottleneck for a long time in order to optimize processes in it.

But, as a rule, the task that "won the main prize": caught in the red zone
of lead time - also wins small nominations.

Also at the bottom of the page appears a list of "winners", sorted by the number of "prizes".

### Work item age

Allows you to correlate the current lifetime of each unfinished element with the statistical times of leaving the element of the current column.
This will help to pay attention to elements that are already clearly out of the general statistics.

### Analyze by WIP

In theory, if your processes are stable, then these graphs will show you that the more work in progress (WIP),
the longer the delivery and cycle time, the lower the efficiency (since tasks wait longer in waiting columns).
