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

### Average times by columns

Readings, on average, performed tasks in each of the columns.
Assess where tasks spend the most time in the production process.

You can view both percentage and absolute values to evaluate the dynamics.

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

### Analyze by WIP

In theory, if your processes are stable, then these graphs will show you that the more work in progress (WIP),
the longer the delivery and cycle time, the lower the efficiency (since tasks wait longer in waiting columns).
### Triage

Triage is a technique that allows, based on several formal features, 
to quickly determine which task to do right now, which one to do later, 
and which one to completely postpone.

#### Triage process

More details about the triage can be seen in the video 
[Working with Triage Tables to identify the Class of Service for the work item](https://www.youtube.com/watch?v=gTaOVmNIE2E)

To conduct a triage, you must specify three mandatory fields and one optional field in the configuration: 
* (_**Required**_) The field in which the 
  [pattern of the value-acquisition lifecycle function](#pattern-of-value-acquisition-lifecycle-functions) is stored.
  There may be no value, then:
  * if there is a deadline, then the 
    "[ONE-OFF OPPORTUNITY WITH AN EXPIRY DATE](#01-one-off-opportunity-with-an-expiry-date)" template is used 
  * otherwise, if there is a desired delivery date, 
    then the "[CONSTANT RATE](#08-constant-rate)" template is used
  * otherwise, the "[LAST-MINUTE DECAY](#11-last-minute-decay)" pattern is used.
* (_**Required**_) A field that stores the desired delivery date.
  These are the dates when the functionality needs to be rolled out to the client 
  from a business point of view.
  There may be no date, in which case the stratum range `Super early` is used.
* (_**Required**_) The field in which the deadline date is stored.
  This is the date after which the delay in the rollout of the functionality 
  has a critical impact on profit.
  This may include the date of entry into force of any regulatory acts.
  If the date is set, then the `Deadline` type of waiting for clients is used for the triage.
  There may not be a date, then the start range is `Super early` 
  and for triage, the expectation of clients of the type `Within SLA/SLE` is used.
* (_Optional_) A field in which to store an estimate of the size of the hypothesis/problem.
  It is highly recommended to indicate and fill in this field, as statistics on solving 
  such problems will give a more accurate start forecast.

##### Pattern of Value-Acquisition Lifecycle functions

In order for the system to automatically determine the value, 
it is necessary to start the field value with numbers,
which will indicate the position in the triage table. 
The numbers can be followed by any non-numeric character, including a space.

###### 01 ONE-OFF OPPORTUNITY WITH AN EXPIRY DATE

The impulse function implies that there is a one-off
opportunity to gain a benefit (make money) and after that
opportunity, the chance is gone.

_A customer with a remaining annual budget approaches you
to spend the money before the new fiscal year. You either
take the opportunity before the expiry date or lose the sale._

###### 02 VERY FRONT LOADED

80 percent of the benefit is realized in
the first 20 percent of the lifecycle.

_A ski manufacturer issues new models
every year in November, and most of the
skis are sold in the first three months of
what is a one-year lifecycle._

###### 03 FRONT LOADED

80 percent of the benefitis realized in the first 50
percent of the lifecycle.

_A bicycle manufacturer, as in previous example,
issues new bicycles every year in November–December, 
but the majority of sales happen in the
beginning of the season — in spring — and drop off
toward the end of the summer._

###### 04 BELL CURVE, NO CATCH UP

A bell curve with “no catch up” implies that there is a network
effect in the market place that gives the first mover an advantage
that cannot be taken away later.

_This network-effect, first-mover advantage is often associated
with technology platforms such as operating systems,
productivity suites, mobile telephony standards, messaging and
communications tools, and social media networking._

###### 05 BELL CURVE WITH CATCH UP

A bell curve with catch up has no first-mover advantage, and
second and subsequent movers can catch up and even overtake
an early market mover.

_The first car manufacturer that introduced LED lights in the
market had an advantage, and it took one year for a second
manufacturer to offer the same technology. Then it took several
years for other market players to catchup. Nevertheless,the
first player didn’t have a lock-in market effect,and it didn’t
affect competitors’ sales._

###### 06 BACK LOADED

80percent of the benefit is realized in the
last 50 percent of the lifecycle.

_A hotel’s Easter marketing campaign starts
after the NewYear (90–100days’ lifecycle).
Most of the reservations are made in the
second half of the lifecycle._

###### 07 VERY BACK LOADED

80 percent of the benefit is realized in the last 20
percent of the lifecycle.

_A conference organizer offers an event in a local
region or metropolitan area aimed at attendees from
that geographical region. Unless there is a perceived
scarcity of tickets, attendees wait until the last 20
percent of the lifecycle before purchasing a ticket._

###### 08 CONSTANT RATE

The constant rate function models the benefit for things such as
cost-saving features.

_When the product or service is deployed,cost is saved — perhaps
workers are made redundant. Consequently, if we had that
feature today, we would have the savings tomorrow,and the
amount saved is fixed and constant._

###### 09 BELL CURVE EXTENDED, DECAYING LIFE, DECAYING LOYALTY

This models an extended but shortening lifecycle,
together with decaying loyalty. These are situations
where a delay in releasing a product, feature, or
service beyond the desired date has little impact
due to customer loyalty,technology lock-in, or
monopoly of supply or limited choice in the market.
However, long delays cause the lifecycle period to
shorten and loyalty to drop off.

_Loyal customers will wait for their favorite brand
(e.g., mobile phones,laptops, tablets) to release
the product with the newest technology (e.g.,
processor, video chip sets, cameras,etc.). But the
delay reduces both the loyalty and the lifecycle of
the product because underlying technologies will
be replaced in their own independent lifecycle._

###### 10 BELL CURVE, EXTENDED LIFE, DECAYING LOYALTY

This models an extended lifecycle, with decaying
loyalty over time. These are situations where a delay
in releasing a product, feature, or service beyond
the desired date has little impact due to customer
loyalty, technology lock-in, or monopoly of supply or
limited choice in the market.

_Microsoft Windows and Apple iPhone/iOS are both
examples, but more subtly, so is the next album
from a popular rock band such as Depeche Mode or
Coldplay. Depeche Mode release albums on a four-year cadence, 
but were thereto be a delay, the loyal
fans would wait and still buy the album. However,
longer delays eventually cause loyalty to drop off._

###### 11 LAST-MINUTE DECAY

Immediate benefits regardless of the delay, however, last-minute resultsin a rapid
drop-off in realized benefits.

_This models a business such as promoting a pop concert for a popular artist, such
as Taylor Swift. If the tickets go on sale today, the whole stadium is sold out within
hours. If we delay a week or a month,we still sell out.The perception of scarcity
means that the sales are immediate regardless of the delay, unless we wait until
the last minute without announcing the event._
